import React, { Component } from "react";
import "./DetailHeader.scss";
import { isuserlogin } from "config.js";

export class DetailHeader extends Component {
  state = {
    loginCheck: true
  };
  componentDidMount() {
    isuserlogin() && this.setState({ loginCheck: false });
    console.log(this.state);
  }
  out = () => {
    this.alert();
    localStorage.removeItem("access_token");
    this.setState({ loginCheck: true });
  };
  alert = () => {
    alert("로그아웃되었습니다.");
  };
  render() {
    return (
      <div className="header">
        <div className="header-container">
          <div className="header-container__input">
            <a href="/">
              <div className="main-logo" />
            </a>
            <div className="innerContainer">
              <div className="header2-inputbox">
                <div className="locationIcon" />
                <input className="searching" placeholder="모든 위치 · 숙소" />
              </div>
              <div className="searchBtn">
                <div className="searchIcon" />
              </div>
            </div>
          </div>
          <div className="navbar">
            <div
              className={
                this.state.loginCheck ? "navbar__beforeSignIn" : "displayNone"
              }
            >
              <div className="navbar__beforeSignIn__joinHost">
                <a href="/HostRegiste">
                  <span>호스트가 되어보세요</span>
                </a>
              </div>

              <div className="navbar__beforeSignIn__signup">
                <a href="/SignUp">
                  <span>회원가입</span>
                </a>
              </div>

              <div className="navbar__beforeSignIn__signin">
                <a href="/Login">
                  <span>로그인</span>
                </a>
              </div>
            </div>
            <div
              className={
                this.state.loginCheck ? "displayNone" : "navbar__afterSignIn"
              }
            >
              <div className="navbar__beforeSignIn__joinHost">
                <a href="/HostRegiste">
                  <span>호스트가 되어보세요</span>
                </a>
              </div>
              <div onClick={this.out} className="logout">
                <span onClick={this.alert}>로그아웃</span>
              </div>

              <a href="/GuestDetail" alt="">
                <div className="defaultProfilePic" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailHeader;
