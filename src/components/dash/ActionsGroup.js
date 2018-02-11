import React from 'react';

export default function(props) {
    return (
        <div className="btn-group" role="group">
            {props.children}
        </div>
    );
}

export function ExtendButton(props) {
    return (
        <button className="btn btn-primary" onClick={props.onClick} title="Extend Expiry by a month">
            <small><i className="fa fa-plus" aria-hidden="true"></i></small>
            <i className="fa fa-clock-o" aria-hidden="true"></i>
        </button>
    );
}


/*
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
 */