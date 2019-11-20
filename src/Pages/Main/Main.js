import React, { Component } from "react";
import "./Main.scss";
import Header from "Components/Header/Header";
import DatePicker from "Components/Calendar/DatePicker.js";
import PhotoMenu from "Components/PhotoMenu/PhotoMenu";
import ViewMore from "Components/PhotoMenu/ViewMore";
import RecommandMenu from "Components/PhotoMenu/RecommandMenu";
import RecommandWorld from "Components/PhotoMenu/RecommandWorld";
import PplNumSetting from "Components/PplNumSetting/PplNumSetting";
import "../../Components/PplNumSetting/PplNumSetting.scss";
import { recommandMenuData } from "../../Components/PhotoMenu/recommandMenuData";

export class Main extends Component {
  state = {
    result: [],
    offsetNum: 0,
    limitNum: 5,
    inputLocation: "",
    menu: [],
    recommandData: recommandMenuData,
    testLocation: "오스투니",
    testSuperHost: "슈퍼호스트",
    testReviewNum: 4.93,
    testHotelInfo: "I SETTE CONI - TRULLO EDERA",
    viewMore: "2,000",
    testRecommandTitle1: "서울의 숙소",
    testRecommandTitle2: "제주(Jeju)의 숙소",
    testRecommandTitle3: "300개 이상의 숙소",
    testImage1:
      "https://a0.muscache.com/im/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?aki_policy=x_large",
    testImage2:
      "https://a0.muscache.com/im/pictures/4230043/7e9a64d3_original.jpg?aki_policy=xx_large",
    testImage3:
      "https://a0.muscache.com/im/pictures/31e7af5d-f92d-445d-a83e-c1dd13678b89.jpg?aki_policy=xx_large",
    testImage4:
      "https://a0.muscache.com/im/pictures/10026520/717f5adc_original.jpg?aki_policy=xx_large"
  };

  handleOnChange = e => {
    this.setState({ inputLocation: e.target.value }, () => {
      console.log(this.state.inputLocation);
    });
  };
  // handleOptionBox = e => {
  //   e.preventDefault();
  //   this.setState({
  //     optionBoxValue: !this.state.optionBoxValue
  //   });
  // };

  componentDidMount() {
    this.getMenuInfo();
    this.scrollGetApi();
    window.addEventListener("scroll", this.infiniteScroll, true);
  }
  getMenuInfo = () => {
    fetch("http://10.58.1.221:8000/rooms", {})
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          menu: res.rooms_list,
          viewMore: res.total
        });
      });
  };
  testOnClick = () => {
    this.setState(
      {
        offsetNum: this.state.offsetNum + 5, //
        limitNum: this.state.limitNum + 5

        //afterScrollNum:this.state.limitNum
      },
      () => {
        console.log(this.state.offsetNum, this.state.limitNum);
        this.scrollGetApi();
      }
    );
  };
  scrollGetApi = () => {
    fetch(
      `http://10.58.1.221:8000/rooms?offset=${this.state.offsetNum}&limit=${this.state.limitNum}`,
      {}
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          result: this.state.result.concat(res.rooms_list)
        });
      });
  };

  // infiniteScroll = () => {
  //   let scrollHeight = Math.max(
  //     document.documentElement.scrollHeight,
  //     document.body.scrollHeight
  //   );
  //   let scrollTop = Math.max(
  //     document.documentElement.scrollTop,
  //     document.body.scrollTop
  //   );
  //   let clientHeight = document.documentElement.clientHeight;
  //   if (scrollTop + clientHeight === scrollHeight) {
  //     this.setState({
  //       preItems: this.state.items,
  //       items: this.state.items + 3
  //     });
  //     this.scrollGetApi();
  //   }
  // };

  render() {
    const { menu, recommandData } = this.state;
    const {
      testLocation,
      testSuperHost,
      testReviewNum,
      testHotelInfo,
      testViewMore,
      testRecommandTitle1,
      testRecommandTitle2,
      testRecommandTitle3,
      testImage2,
      testImage3
    } = this.state;
    const recommandMenu = recommandData.map(el => {
      return <RecommandWorld img={el.src} location={el.location} />;
    });
    console.log(this.state.result);

    const photoMenuTest = this.state.result.map(el => {
      return (
        <PhotoMenu
          location={testLocation}
          superHost={testSuperHost}
          reviewNum={testReviewNum}
          id={el.id}
          hotelInfo={el.title}
          img={el.pic1}
        />
      );
    });

    const photoMenu = menu.map(el => {
      return (
        <PhotoMenu
          location={testLocation}
          superHost={testSuperHost}
          reviewNum={testReviewNum}
          id={el.id}
          hotelInfo={el.title}
          img={el.pic1}
        />
      );
    });
    return (
      <div>
        <Header />

        <div className="main__header">
          {/* <div className="mainImg"> */}
          <video className="video" loop autoPlay muted>
            <source src={require("./src.mp4")} type="video/mp4" />
          </video>
          <div className="searchBox">
            <h1>특색 있는 숙소와 즐길 거리를 예약하세요.</h1>
            <div className="searchBox__form">
              <div className="destination">
                <div className="destination__title">목적지</div>
                <div className="destination__input">
                  <input
                    placeholder="모든 위치"
                    onChange={this.handleOnChange}
                  />
                </div>
              </div>

              <div className="searchBox__calendar">
                <div className="calendar__flex">
                  <div>체크인</div>
                  <div>체크아웃</div>
                </div>
                <DatePicker />
              </div>
              <div className="searchBox__pplNum__title">인원</div>
              <PplNumSetting />
              <div className="searchBox__btnbox">
                <button className="searchBtn">검색</button>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="recommand__msg">
          에어비앤비와 함께 전 세계를 여행해보세요.
        </div>
        <div className="recommand">{recommandMenu}</div>

        <div className="recommandByReview__header">
          <div>
            <div className="recommandByReview-title">
              최고의 평점을 받은 숙소
            </div>
            <span>최고의 평점을 받은 전 세계의 숙소를 둘러보세요.</span>
          </div>
        </div>
        <div className="recommandByReview">
          <PhotoMenu
            location={testLocation}
            superHost={testSuperHost}
            reviewNum={testReviewNum}
            hotelInfo={testHotelInfo}
            img={testImage3}
          />
        </div>
        <ViewMore viewMore={testViewMore} />

        <div className="eachContainer">
          <RecommandMenu recommandTitle={testRecommandTitle1} />
          <div className="recommandByReview">
            {this.state.menu && photoMenu}
          </div>
          <ViewMore viewMore={this.state.viewMore} />
        </div>

        <div className="eachContainer">
          <RecommandMenu recommandTitle={testRecommandTitle2} />
          <div className="recommandByReview">
            <PhotoMenu
              location={testLocation}
              superHost={testSuperHost}
              reviewNum={testReviewNum}
              hotelInfo={testHotelInfo}
              img={testImage2}
            />
          </div>
          <ViewMore viewMore={this.state.viewMore} />
        </div>

        <div className="eachContainer">
          <RecommandMenu recommandTitle={testRecommandTitle3} />
          <div className="recommandByReview">
            {this.state.result && photoMenuTest}
          </div>
          <ViewMore viewMore={this.state.viewMore} />
        </div>

        <button onClick={this.testOnClick}>testButton</button>
      </div>
    );
  }
}

export default Main;
