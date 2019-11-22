import React, { Component } from "react";

export class ViewMore extends Component {
  // handleClick = () => {
  //   const { _id } = this.props;
  //   this.props.clickPhotoMenu(_id);
  // };
  render() {
    return (
      <div className="viewMore">
        모두 보기
        <span>></span>
      </div>
    );
  }
}

export default ViewMore;
