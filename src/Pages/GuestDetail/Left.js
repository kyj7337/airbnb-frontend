import React, { Component } from "react";
import "./Left.scss";

export class Left extends Component {
  constructor() {
    super();
    this.state = {
      location: true,
      imgurl: "https://a0.muscache.com/defaults/user_pic-225x225.png?v=3"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handlescrol);
  }
  handlescrol = () => {
    this.setState({ location: window.scrollY < 600 });
  };
  render() {
    // console.log("left", this.state.location);
    const normal = "left-wrapper";
    const fixed = "left-wrapper-fix";
    const { location } = this.state;
    return (
      <div className={location ? normal : fixed}>
        <div className="left-con">
          <img
            className="green"
            src={require("Components/Payment/checkgreen.png")}
            alt=""
          />
          <span>&nbsp;&nbsp;예약날짜를 확인해 주세요</span>
        </div>
        <div className="left-con">
          <img
            className="green"
            src={require("Components/Payment/checkgreen.png")}
            alt=""
          />
          <span>&nbsp;&nbsp;가격을 확인해 주세요</span>
        </div>
        <div className="left-con">
          <img
            className="green"
            src={require("Components/Payment/checkgreen.png")}
            alt=""
          />
          <span>&nbsp;&nbsp;숙소 예약 정책을 확인해 주세요</span>
        </div>
        <div className="left-con2">
          <span>아직 숙소를 예약 하지 않으셨나요?</span>
        </div>
        <button>
          <a href="/">숙소 예약하러 가기</a>
        </button>
      </div>
    );
  }
}

export default Left;

// <img
//           className="myimg"
//           src="https://a0.muscache.com/defaults/user_pic-225x225.png?v=3"
//           alt=""
//         />
//         <div>
//           <button>사진업데이트</button>
//         </div>
//         <div className="recog-wrapper">
//           <div>
//             <img
//               className="green"
//               src={require("Components/Payment/checkgreen.png")}
//               alt=""
//             />
//             &nbsp;&nbsp;이메일 주소
//           </div>
//           <div>
//             <img
//               className="green"
//               src={require("Components/Payment/checkgreen.png")}
//               alt=""
//             />
//             &nbsp;&nbsp;전화번호
//           </div>
//         </div>
