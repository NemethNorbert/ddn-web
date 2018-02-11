import React, {Component} from 'react';
import { Nav, NavItem } from 'reactstrap';


import {API_LIST_URL} from '../consts';
import ajax from '../net'

export default class Agents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anyOnline: true,
            failed: false
        }
    }
    
    componentDidMount() {
        this.fetchAgents();
    }

    fetchAgents() {
        ajax(API_LIST_URL).then(results => {
            this.setState({agents: results.data, anyOnline: true, failed: false});
        }).fail(response => {
            if (response.status === 404) {
                this.setState({anyOnline:false, failed:false});
            }  else {
                this.setState({failed:true});
            }
        });
    }
    
    render() {
        return (
            <Nav pills className="justify-content-center">
                {this.doRender()}
            </Nav>
        );
    }

    doRender() {
        const agents = this.state.agents

        if (this.state.failed) {
            return (<NavItem className="btn btn-danger disabled btn-sm mx-1">Can't reach API server</NavItem>);
        }

        if (!this.state.anyOnline) {
            return (<NavItem className="btn btn-danger disabled btn-sm mx-1">None of the agents are online</NavItem>); 
        }

        if (!agents) {
            return (<NavItem className="btn btn-warning disabled btn-sm mx-1">Checking agent availability</NavItem>);
        }

        return (
            <div>
                {agents.map((agent) => {
                    return this.renderAgent(agent);
                })}
            </div>
        );
    }

    renderAgent(agent) {
        var buttonClass = "btn disabled btn-sm mx-1 btn-success";
        var iconClass = "fa fa-fw fa-check";

        if (!agent.agent_up) {
            buttonClass = "btn disabled btn-sm mx-1 btn-danger";
            iconClass = "fa fa-fw fa-exclamation-triangle";
        }

        return(
            <NavItem className={buttonClass} key={agent.agent_identifier} data-toggle="tooltip" title={agent.agent_long}>
                <i className={iconClass}> </i>{agent.agent}
            </NavItem>
        )
    }
}