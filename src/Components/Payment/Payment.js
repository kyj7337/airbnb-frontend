import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { PayDetailAPI } from "config.js";

import "./Payment.scss";

export class Payment extends Component {
  state = {
    amount: null,
    S_year: null,
    S_month: null,
    S_day: null,
    E_year: null,
    E_month: null,
    E_day: null,
    room_id: null
  };

  pay = () => {
    const { amount } = this.state;
    window.IMP.request_pay(
      {
        pg: "inicis",
        merchant_uid: "merchant_" + new Date().getTime(),
        name: "We & B ",
        amount: amount
      },
      function(rsp) {
        console.log(rsp);
        if (rsp.success) {
          let msg = "결제가 완료되었습니다.";
          msg += "고유ID : " + rsp.imp_uid;
          msg += "상점 거래ID : " + rsp.merchant_uid;
          msg += "결제 금액 : " + rsp.paid_amount;
          msg += "카드 승인번호 : " + rsp.apply_num;
        } else {
          let msg = "결제에 실패하였습니다.";
          msg += "에러내용 : " + rsp.error_msg;
        }
      }
    );
    this.forbackend();
  };

  forbackend = () => {
    const { state } = this.state;
    console.log(JSON.stringify(this.state));
    fetch(PayDetailAPI, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("access_token")
      },
      body: JSON.stringify(this.state)
    });
  };
  //paydetailAPI를 경연님이 만든 endpoint에 맞춰야됨 (수정은 config.js에서)

  feecheck = () => {
    const { amount } = this.state;
    const { usingday, cleaning_fee, price } = this.props;
    if (amount == null) {
      this.setState({
        amount: price * usingday + cleaning_fee + (price * usingday) / 20
      });
      console.log("amount:최종가격");
    } else if (amount !== null) {
      this.setState({ amount: null });
      console.log("amount:null");
    }
    this.one();
  };
  one = () => {
    const {
      S_year,
      S_month,
      S_day,
      E_year,
      E_month,
      E_day,
      room_id
    } = this.props;
    this.setState({ S_year: S_year }, () => {});
    this.setState({ S_month: S_month }, () => {});
    this.setState({ S_day: S_day }, () => {});
    this.setState({ E_year: E_year }, () => {});
    this.setState({ E_month: E_month }, () => {});
    this.setState({ E_day: E_day }, () => {});
    this.setState({ room_id: room_id }, () => {});
    console.log(this.state);
  };

  render() {
    const {
      usingday,
      S_year,
      S_month,
      S_day,
      E_year,
      E_month,
      E_day,
      price,
      cleaning_fee,
      personcount
    } = this.props;
    return (
      <div className="payment-wrapper">
        <div className="payment-main">
          <div className="payment-title">
            <span>결제 하기</span>
          </div>
          <div className="payment-feeds">
            <img
              src="https://i.pinimg.com/originals/99/43/30/994330d7db2eaf797f76c5f0e4a50d10.gif"
              alt=""
            />
            <div className="payment-text-wrapper">
              <div className="payment-person">
                <img
                  className="icon"
                  src={require("./personcount.png")}
                  alt=""
                />
                &nbsp;게스트 {personcount}명
              </div>
              <div>
                <span>
                  {" "}
                  <img
                    className="icon"
                    src={require("./calender.png")}
                    alt=""
                  />
                  &nbsp;{S_year + "년" + S_month + "월" + S_day + "일"} →
                </span>
                <span>
                  &nbsp;{E_year + "년" + E_month + "월" + E_day + "일"}
                </span>
              </div>
              <div className="border">
                <span>
                  {price} x {usingday}박
                </span>
                <span className="right">₩{price * usingday}</span>
              </div>
              <div>
                <span>청소비</span>
                <span className="right">₩{cleaning_fee}</span>
              </div>
              <div className="bot-border">
                <span>서비스 수수료</span>
                <span className="right">₩{(price * usingday) / 20}</span>
              </div>

              <div>
                <span>
                  <img
                    className="icongreen"
                    src={require("./checkgreen.png")}
                    alt=""
                  />
                  총합계(KRW)
                </span>
                <span className="right">
                  ₩{price * usingday + cleaning_fee + (price * usingday) / 20}
                </span>
              </div>
              <div className="checkbox">
                <input type="checkbox" onClick={this.feecheck} />
                숙소 이용규칙, 환불 정책, 및 게스트 환불 정책에 동의합니다.
                또한, 서비스 수수료를 포함하여 명시된 총 금액을 결제하는 데
                동의합니다.
              </div>
              <div className="payment-bottom">
                <div className="for-center">
                  <button className="payment-button" onClick={this.pay}>
                    <img className="lock" src={require("./lock.png")} alt="" />
                    확인 및 결제
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Payment);
