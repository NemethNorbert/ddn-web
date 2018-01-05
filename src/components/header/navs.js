import React, {Component} from 'react';

export class Nav extends Component {
    render() {
        return (
            <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
        );
    }
}