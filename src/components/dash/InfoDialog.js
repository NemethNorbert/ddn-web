import React, { Component } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "55px"
  }
};
export default class InfoDialog extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.showModal}
        contentLabel="Modal"
        className="modal-dialog"
        style={customStyles}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Portal-exts</h5>

            <button
              type="button"
              className="close"
              onClick={this.props.closeModal}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Properties data={this.props.data} />
          </div>
        </div>
      </Modal>
    );
  }
}

function Properties(props) {
  const data = props.data;
  console.log(data);

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
