import React, { Component } from "react";
import "./Header.scss";
import { isuserlogin } from "config.js";

// /import emptyImg from "Images/profileImg.png"

export class Header extends Component {
  state = {
    loginCheck: true
  };
  componentDidMount() {
    isuserlogin() && this.setState({ loginCheck: false });
    console.log(this.state);
  }
  out = () => {
    localStorage.removeItem("access_token");
    this.setState({ loginCheck: true });
  };
  render() {
    return (
      <div className="header-container">
        <a href="/">
          <div className="main-logo" />
        </a>
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
            <div onClick={this.out} className="logout">
              <span>로그아웃</span>
            </div>
            <div className="defaultProfilePic" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
