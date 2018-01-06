import React, {Component} from 'react'
import { Nav, NavItem } from 'reactstrap';

import $ from 'jquery';
import _ from 'lodash';

const API_LIST_URL = `http://localhost:7010/api/list`;


export default class Agents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anyOnline: false
        }
    }
    
    componentDidMount() {
        this.fetchAgents()
    }

    fetchAgents() {
        $.getJSON(API_LIST_URL).then((results) => {
            this.setState({agents: results.map, anyOnline: Object.keys(results.map).length > 0});
        });
    }

    renderAgent(name) {
        return (
            <NavItem className="btn btn-success disabled btn-sm mx-l" key={name} data-toggle="tooltip" title={name}>{name}</NavItem>
        );
    }
    
    render() {
        const agents = this.state.agents

        if (!agents) {
            return <div>Checking agent availability</div>;
        }

        if (!this.state.anyOnline) {
            return (
                <Nav pills className="justify-content-center">
                    <NavItem className="btn btn-danger disabled btn-sm mx-l">None of the agents are online</NavItem>
                </Nav>
            ) 
        }

        const agentList = _.keys(agents)

        return (
            <Nav pills className="justify-content-center">
                {agentList.map((name) => {
                    return this.renderAgent(name);
                })}
            </Nav>
        )
    }
}