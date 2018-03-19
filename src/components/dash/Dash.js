import React, { Component } from "react";

import DashRow from "./DashRow";

import ajax from "../net";
import { API_LIST_DBS_URL } from "../consts";

export default class Dash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: true,
      showModal: false,
      modalData: {}
    };

    this.modalHandler = this.modalHandler.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.fetchDatabases();
  }

  fetchDatabases() {
    ajax(API_LIST_DBS_URL)
      .then(results => {
        this.setState({ success: true, entries: results.data });
      })
      .fail(response => {
        this.setState({ success: false });
      });
  }

  render() {
    if (!this.state.success) {
      return <div>Couldn't reach API server</div>;
    }

    if (!this.state.entries) {
      return <div>Fething entries..</div>;
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
              <th style={{ width: "110px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.entries.map(entry => (
              <DashRow
                entry={entry}
                key={entry.id}
                modalHandler={this.modalHandler}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  modalHandler(data) {
    this.setState({
      showModal: true,
      modalData: data
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      modalData: {}
    });
  }
}
