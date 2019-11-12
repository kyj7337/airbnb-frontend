import React, { Component } from "react";
import "./Cancel.scss";

export class Cancel extends Component {
  state = {
    detail: true
  };

  detailswitch = () => {
    this.setState({ detail: !this.state.detail });
  };

  hiddenswitch = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    const { detail } = this.state;
    const { refunddesc, refundpolicy } = this.props;
    let detail_true = "cancel-detail";
    let detail_false = "cancel-detail-on";
    let hidden_true = "cancel-hidden";
    let hidden_false = "cancel-hidden-on";
    let text_true = "cancel-text";
    let text_false = "cancel-text-on";
    return (
      <div className="cancel-wrapper">
        <div className="cancel-name">예약 취소</div>
        <div className="cancel-subname">{refundpolicy}</div>
        <div className={detail ? text_true : text_false}>{refunddesc}</div>
        <div
          className={detail ? detail_true : detail_false}
          onClick={this.detailswitch}
        >
          정책 자세히 읽기
          <img src={require("./underarrow.png")} alt="" />
        </div>
        <div className={detail ? hidden_false : hidden_true}>
          <li>
            체크인 7일 전까지 예약을 취소하면 모든 수수료를 포함한 요금 전액이
            환불됩니다.
          </li>
          <li>
            체크인까지 7일이 남지 않은 시점에 예약을 취소하면 수수료를 포함한 총
            숙박 요금의 50%가 환불됩니다.
          </li>
          <li>숙박 중 예약을 취소하면 일부 환불을 요청할 수 있습니다.</li>
          <div className="hiddenswitch" onClick={this.detailswitch}>
            정책 숨기기
            <img src={require("./uparrow.png")} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Cancel;
