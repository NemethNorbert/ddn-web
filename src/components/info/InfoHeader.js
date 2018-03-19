import { Component } from "react";

export default class InfoHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      db: props.database
    };

    console.log(this.state.db);
  }

  render() {
    return "yay";
  }
}
