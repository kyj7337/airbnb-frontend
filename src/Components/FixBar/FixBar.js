import React, { Component } from "react";
import "./FixBar.scss";

export class FixBar extends Component {
  state = {
    navbar: true
  };
  handleScroll = () => {
    this.setState({ Navbar: window.scrollY < 600 });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    let normal = "fixbar-wrapper";
    let fixed = "fixbar-wrapper-on";
    const { Navbar } = this.state;
    return (
      <div className={Navbar ? normal : fixed}>
        <div className="fixbar-main">
          <div className="main-left">
            <span className="one">개요 ·</span>
            <span className="three">호스트 ·</span>
            <span className="four">위치 ·</span>
            <span className="five">환불 정책</span>
          </div>
          <div className="main-right">
            <div className="main-share">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                alt=""
              />
              <span className="share-text">공유하기</span>
            </div>
            <div className="main-save">
              <img
                src={require("../../Pages/RoomsDetailPage/Picture/repl_heart.png")}
                alt=""
              />
              <span className="save-text">저장</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FixBar;
