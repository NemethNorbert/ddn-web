import React, {Component} from 'react';
import { Nav, NavItem } from 'reactstrap';

import $ from 'jquery';
import _ from 'lodash';

import {API_URL} from '../consts'

const API_LIST_URL = `${API_URL}/list`;

export default class Agents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anyOnline: false,
            failed: false
        }
    }
    
    componentDidMount() {
        this.fetchAgents();
    }

    fetchAgents() {
        $.getJSON(API_LIST_URL).then(results => {
            this.setState({agents: results.map, anyOnline: Object.keys(results.map).length > 0, failed: false});
        }).fail(() => {
            this.setState({failed:true});
        });
    }

    renderAgent(name) {
        return (
            <NavItem className="btn btn-success disabled btn-sm mx-l" key={name} data-toggle="tooltip" title={name}>{name}</NavItem>
        )
    }
    
    doRender() {
        const agents = this.state.agents

        if (this.state.failed) {
            return (<NavItem className="btn btn-danger disabled btn-sm mx-l">Can't reach API server</NavItem>);
        }

        if (!agents) {
            return (<NavItem className="btn btn-warning disabled btn-sm mx-l">Checking agent availability</NavItem>);
        }

        if (!this.state.anyOnline) {
            return (<NavItem className="btn btn-danger disabled btn-sm mx-l">None of the agents are online</NavItem>); 
        }

        const agentList = _.keys(agents);

        return (
            <div>
                {agentList.map((name) => {
                    return this.renderAgent(name);
                })}
            </div>
        );
    }

    render() {
        return (
            <Nav pills className="justify-content-center">
                {this.doRender()}
            </Nav>
        );
    }
}