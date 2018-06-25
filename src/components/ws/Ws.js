import { Component } from "react";
import Sockette from "sockette";

import { WS_URL, USER_EMAIL } from "../consts";

export default class WSocket extends Component {
  componentDidMount() {
    this.ws = new Sockette(WS_URL + "/" + USER_EMAIL, {
      timeout: 5e3,
      maxAttempts: 10,
      onopen: e => {
        console.log("Connected!", e);
        this.ws.send("Yooo");
      },
      onmessage: e => console.log("Received:", e),
      onreconnect: e => console.log("Reconnecting...", e),
      onmaximum: e => console.log("Stop Attempting!", e),
      onclose: e => console.log("Closed!", e),
      onerror: e => console.log("Error:", e)
    });
  }

  render() {
    return null;
  }
}
