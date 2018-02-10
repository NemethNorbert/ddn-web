import React, {Component} from 'react';
import DateFormat from 'dateformat';

import $ from 'jquery';
import _ from 'lodash';

import {API_LIST_DBS_URL} from '../consts';

const DATE_FORMAT = "mmmm d, yyyy"

export default class Dash extends Component {
    constructor(props) {
        super(props)

        this.state = {
            success: true,
        }
    }

    componentDidMount() {
        //this.fetchDatabases();
    }

    fetchDatabases() {
        const email = JSON.stringify({"requester":"daniel.javorszky@liferay.com"});
        
        $.post(API_LIST_DBS_URL, email).then(result => {
            this.setState({
                success: true,
                entries: result,
            })
        }).fail(() => {
            this.setState({success: false});
        })
    }

    render() {
        if (!this.state.success) {
            return (
                <div>Something went horribly wrong</div>
            )
        }

        if (!this.state.entries) {
            return (
                <div>Fething entries..</div>
            )
        }

        const entries = _.values(this.state.entries)

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
                        {entries.map(entry => {
                            return this.renderRow(entry);
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    renderRow(entry) {
        return (
            <tr role="row" key={entry.id}>
                <td>{entry.dbname}</td>
                <td>{entry.agent}</td>
                <td>{DateFormat(Date.parse(entry.createdate), DATE_FORMAT)}</td>
                <td>{DateFormat(Date.parse(entry.expirydate), DATE_FORMAT)}</td>
                <td>{entry.status}</td>
                <td>Actions</td>
            </tr>
        );
    }

    
}