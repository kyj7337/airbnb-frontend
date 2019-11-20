import React, { Component } from "react";

export class ViewMore extends Component {
  render() {
    return (
      <div className="viewMore">
        {`모두 보기(${this.props.viewMore}개 이상)`}
        <span>></span>
      </div>
    );
  }
}

export default ViewMore;
