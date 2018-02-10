import React, {Component} from 'react';
import { USER_EMAIL } from '../consts';

export default class ActionsGroup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            entry: props.entry,
        }
    }

    render() {
        const entry = this.state.entry

        if (entry.creator === USER_EMAIL) {
            return (
                <div className="btn-group" role="group">
                    {this.renderExpiry()}
                    {this.renderInfo()}
                    {this.renderRecreate()}
                    {this.renderDrop()}
                </div>
            )
        }

        return (
            <div className="btn-group" role="group">
                {this.renderExpiry()}
                {this.renderInfo()}
            </div>
        )
    }

    renderExpiry() {
        return (
            <a className="btn btn-primary" href="/extend/1" title="Extend Expiry">
                <small><i className="fa fa-plus" aria-hidden="true"></i></small>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
            </a>
        )
    }

    renderInfo() {
        return (
            <a className="btn btn-secondary" href="/portalext/1" title="Portal Properties"><i className="fa fa-info" aria-hidden="true"></i> </a>
        )
    }

    renderRecreate() {
        return (
            <a className="btn btn-secondary" href="/recreate/1" title="Recreate Database"><i className="fa fa-refresh" aria-hidden="true"></i> </a>
        )
    }

    renderDrop() {
        return (
            <a className="btn btn-danger" href="/drop/1" title="Drop Database"><i className="fa fa-trash" aria-hidden="true"></i> </a>
        )
    }

}
