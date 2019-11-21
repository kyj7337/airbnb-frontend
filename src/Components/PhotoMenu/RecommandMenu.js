import React, { Component } from "react";

export class RecommandMenu extends Component {
  render() {
    return (
      <div className="recommandByReview__header">
        <div>
          <div className="recommandByReview-title">
            {this.props.recommandTitle}
          </div>
        </div>
      </div>
    );
  }
}

export default RecommandMenu;
