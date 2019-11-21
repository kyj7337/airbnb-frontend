import React, { Component } from "react";

export class PlusMinus extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    };
  }
  handlePlus = e => {
    console.log(e.target);
    let plusMinus = this.state.num;
    if (e.target.name === "minus" && this.state.num > 0) {
      this.setState({ num: (plusMinus -= 1) }, () =>
        this.props.pm(this.state.num, this.props.nameProps)
      );
    } else if (e.target.name === "plus" && this.state.num < 20) {
      this.setState({ num: (plusMinus += 1) }, () =>
        this.props.pm(this.state.num, this.props.nameProps)
      );
    }
  };
  render() {
    const { num } = this.state;
    const { nameProps } = this.props;
    return (
      <>
        <div className="count-button-container">
          <div className="count-button-name">{nameProps}:</div>
          <button
            onClick={this.handlePlus}
            name="minus"
            className="count-button"
          >
            -
          </button>
          <span className="count">{num}</span>
          <button
            onClick={this.handlePlus}
            name="plus"
            className="count-button"
          >
            +
          </button>
        </div>
      </>
    );
  }
}

export default PlusMinus;
