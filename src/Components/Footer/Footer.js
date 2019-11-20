import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-main">
        <div className="footer-column">
          <div className="column-bold">에어비앤비</div>
          <span>채용정보</span>
          <span>뉴스</span>
          <span>정책</span>
          <span>도움말</span>
          <span>다양성과 소속감</span>
          <span>
            접근성<button>NEW!</button>
          </span>
        </div>
        <div className="footer-column">
          <div className="column-bold">여행하기</div>
          <span>신뢰와 안전</span>
          <span>친구 초대하기</span>
          <span>Airbnb Citizen</span>
          <span>비즈니스 프로그램</span>
          <span>
            즐길거리<button>NEW!</button>
          </span>
          <span>Airbnbmag</span>
          <span>한국의 변경된 환불정책</span>
        </div>
        <div className="footer-column">
          <div className="column-bold">호스팅하기</div>
          <span>호스팅의 장점</span>
          <span>호스트 추천하기</span>
          <span>호스팅 기준</span>
          <span>책임감 있는 호스팅 하기</span>
          <span>커뮤니티 센터</span>
          <span>
            체험 호스팅<button>NEW!</button>
          </span>
          <span>Open Homes 프로그램</span>
        </div>
        <div className="footer-column-s">
          <div className="img-group">
            <img className="f" src={require("./icon/facebook.png")} alt="" />
            <img className="t" src={require("./icon/twit.png")} alt="" />
            <img src={require("./icon/insta.png")} alt="" />
            <img src={require("./icon/naver.png")} alt="" />
            <img className="l" src={require("./icon/linkedin.png")} alt="" />
          </div>
          <span>이용약관</span>
          <span>개인정보 처리방침</span>
          <span>여행지 찾기</span>
        </div>
      </div>
      <div className="footer-bot">
        <div className="footer-group">
          <img src={require("Styles/blacklogo.png")} alt="" />
          <span>© 2019 Airbnb, Inc. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};
// export class Footer extends Component {
//   render() {
//     return (
//       <div className="footer-wrapper">
//         <div className="footer-main">
//           <div className="footer-column">
//             <div className="column-bold">에어비앤비</div>
//             <span>채용정보</span>
//             <span>뉴스</span>
//             <span>정책</span>
//             <span>도움말</span>
//             <span>다양성과 소속감</span>
//             <span>
//               접근성<button>NEW!</button>
//             </span>
//           </div>
//           <div className="footer-column">
//             <div className="column-bold">여행하기</div>
//             <span>신뢰와 안전</span>
//             <span>친구 초대하기</span>
//             <span>Airbnb Citizen</span>
//             <span>비즈니스 프로그램</span>
//             <span>
//               즐길거리<button>NEW!</button>
//             </span>
//             <span>Airbnbmag</span>
//             <span>한국의 변경된 환불정책</span>
//           </div>
//           <div className="footer-column">
//             <div className="column-bold">호스팅하기</div>
//             <span>호스팅의 장점</span>
//             <span>호스트 추천하기</span>
//             <span>호스팅 기준</span>
//             <span>책임감 있는 호스팅 하기</span>
//             <span>커뮤니티 센터</span>
//             <span>
//               체험 호스팅<button>NEW!</button>
//             </span>
//             <span>Open Homes 프로그램</span>
//           </div>
//           <div className="footer-column-s">
//             <div className="img-group">
//               <img className="f" src={require("./icon/facebook.png")} alt="" />
//               <img className="t" src={require("./icon/twit.png")} alt="" />
//               <img src={require("./icon/insta.png")} alt="" />
//               <img src={require("./icon/naver.png")} alt="" />
//               <img className="l" src={require("./icon/linkedin.png")} alt="" />
//             </div>
//             <span>이용약관</span>
//             <span>개인정보 처리방침</span>
//             <span>여행지 찾기</span>
//           </div>
//         </div>
//         <div className="footer-bot">
//           <div className="footer-group">
//             <img src={require("Styles/blacklogo.png")} alt="" />
//             <span>© 2019 Airbnb, Inc. All rights reserved.</span>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
export default Footer;
