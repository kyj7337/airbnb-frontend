import React, { Component } from "react";
import "./TextArea.scss";
export class TextArea extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  handleState = e => {
    this.setState({ text: e.target.value }, () =>
      this.props.handleText(this.state.text, this.props.value)
    );
  };

  render() {
    const { holder, name, handleText } = this.props;
    console.log(this.props);

    return (
      <>
        <div className="textarea-container">
          <div className="textarea-name">{name} :</div>
          <textarea
            onChange={this.handleState}
            className="textarea-field"
            placeholder={holder}
            value={this.state.text}
            name={name}
          ></textarea>
        </div>
      </>
    );
  }
}

export default TextArea;
