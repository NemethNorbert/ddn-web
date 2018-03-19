import React, { Component } from "react";
import { NotificationManager } from "react-notifications";
import { sprintf } from "sprintf-js";

import InfoHeader from "./InfoHeader";

import ajax from "../net";
import { API_ACCESS_INFO_URL, API_DATABASE_INFO_URL } from "../consts";

export default class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      database: null,
      access: null
    };
  }

  componentDidMount() {
    this.fetchInfo(this.state.id);
  }

  render() {
    const database = this.state.database;

    if (!database) {
      return <h3>Fetching database...</h3>;
    }

    return (
      <div>
        <InfoHeader database={database} />
      </div>
    );
  }

  fetchInfo() {
    const endpoint = sprintf(API_DATABASE_INFO_URL, this.state.id);

    ajax(endpoint)
      .then(result => {
        if (result.success) {
          this.setState({ database: result.data });
        } else {
          NotificationManager.error(
            "Reason: " + result.data,
            "Unable to fetch access information"
          );
          console.log(result.data);
        }
      })
      .fail(reason => {
        NotificationManager.error(
          "Check console log for more information.",
          "Unable to fetch access information"
        );
        console.log(reason);
      });
  }

  fetchAccessInfo() {
    const endpoint = sprintf(API_ACCESS_INFO_URL, this.state.id);

    ajax(endpoint)
      .then(result => {
        if (result.success) {
          this.setState({ info: result.data });
        } else {
          NotificationManager.error(
            "Reason: " + result.data,
            "Unable to fetch access information"
          );
          console.log(result.data);
        }
      })
      .fail(reason => {
        NotificationManager.error(
          "Check console log for more information.",
          "Unable to fetch access information"
        );
        console.log(reason);
      });
  }
}
/*
function Properties(props) {
  const data = props.data;

  if (data.jdbc_url_6210) {
    return (
      <p>
        {data.jdbc_driver}
        {data.jdbc_url_6210}
        jdbc.default.user={data.user}
        jdbc.default.password={data.password}
      </p>
    );
  }

  return <textarea />;
}
*/
