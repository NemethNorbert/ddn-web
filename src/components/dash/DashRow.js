import React, {Component} from 'react'
import DateFormat from 'dateformat';
import {sprintf} from 'sprintf-js';
import {NotificationManager} from 'react-notifications';

import { DATE_FORMAT, API_EXTEND_DB_URL, MONTHS } from '../consts';
import ActionsGroup, { ExtendButton } from './ActionsGroup';
import ajax from '../net';


export default class DashRow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            entry: this.props.entry
        }

        this.handleExtendEvent = this.handleExtendEvent.bind(this);
    }

    render() {
        const entry = this.state.entry

        return (
            <tr role="row">
                <td>{entry.dbname}</td>
                <td>{entry.agent}</td>
                <td>{DateFormat(Date.parse(entry.createdate), DATE_FORMAT)}</td>
                <td>{DateFormat(Date.parse(entry.expirydate), DATE_FORMAT)}</td>
                <td>{entry.status_label}</td>
                <td>
                    <ActionsGroup>
                        <ExtendButton onClick={this.handleExtendEvent}/>
                    </ActionsGroup>
                </td>
            </tr>
        )
    }

    handleExtendEvent(e) {
        const endpoint = sprintf(API_EXTEND_DB_URL, this.state.entry.id, 1, MONTHS)

        ajax(endpoint, {type: "PUT"}).then(result => {
            if (result.success) {
                let curEntry = this.state.entry;
                curEntry.expirydate = result.data;
                
                this.setState({curEntry});

                NotificationManager.success("Extended the expiry of '" + curEntry.dbname + "' by 1 month", "Success");
            } else {
                NotificationManager.error("Failed to extend expiry with message: " + result.data, "Failure");
            }
            // TODO Add unsuccessful update handling
        }).fail(reason => {
            NotificationManager.error("Failed to extend, check console log.", "Failure")
            console.log(reason);
        })
    }
}