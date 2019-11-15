import React, { Component } from "react";
import "./TextArea.scss";
export class TextArea extends Component {
  render() {
    const { holder, name } = this.props;
    return (
      <>
        <div className="textarea-container">
          <div className="textarea-name">{name} :</div>
          <textarea
            onChange={this.handleData}
            className="textarea-field"
            placeholder={holder}
          ></textarea>
        </div>
      </>
    );
  }
}

export default TextArea;
