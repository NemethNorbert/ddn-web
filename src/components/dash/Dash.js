import React, {Component} from 'react';

import { API_LIST_DBS_URL } from '../consts';
import DashRow from './DashRow';
import ajax from '../net';

export default class Dash extends Component {
    constructor(props) {
        super(props)

        this.state = {
            success: true,
        }
    }

    componentDidMount() {
        this.fetchDatabases();
    }

    fetchDatabases() {
        ajax(API_LIST_DBS_URL).then(results => {
            this.setState({success:true, entries: results.data});
        }).fail(response => {
            this.setState({success:false});
        });
    }

    render() {
        if (!this.state.success) {
            return (<div>Something went horribly wrong</div>)
        }

        if (!this.state.entries) {
            return (<div>Fething entries..</div>)
        }

        return (
            <div>
                <h3>Database list</h3>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Agent</th>
                            <th>Created</th>
                            <th>Expires</th>
                            <th>Status</th>
                            <th style={{"width": "110px"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.entries.map(entry => 
                            <DashRow entry={entry} key={entry.id} />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}