import React, { Component } from "react";
import "./DetailHeader.scss";

export class DetailHeader extends Component {
  state = {
    loginCheck: true
  };

  render() {
    return (
      <div className="header">
        <div className="header-container">
          <div className="header-container__input">
            <div className="main-logo" />
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
                <span>호스트가 되어보세요</span>
              </div>
              <div className="navbar__beforeSignIn__signup">
                <span>회원가입</span>
              </div>
              <div className="navbar__beforeSignIn__signin">
                <span>로그인</span>
              </div>
            </div>
            <div
              className={
                this.state.loginCheck ? "displayNone" : "navbar__afterSignIn"
              }
            >
              <div className="navbar__beforeSignIn__joinHost">
                <span>호스트가 되어보세요</span>
              </div>
              <div className="logout">
                <span>로그아웃</span>
              </div>
              <div className="defaultProfilePic" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailHeader;
