import React, { Component } from "react";
import { recommendMenuData } from "Components/PhotoMenu/recommendMenuData";
import Header from "Components/Header/Header";
import DatePicker from "Components/Calendar/DatePicker.js";
import PhotoMenu from "Components/PhotoMenu/PhotoMenu";
import BiggerPhotoMenu from "Components/PhotoMenu/BiggerPhotoMenu";
import ViewMore from "Components/PhotoMenu/ViewMore";
import RecommendMenu from "Components/PhotoMenu/RecommendMenu";
import RecommendWorld from "Components/PhotoMenu/RecommendWorld";
import PplNumSetting from "Components/PplNumSetting/PplNumSetting";
import "Components/PplNumSetting/PplNumSetting.scss";
import "./Main.scss";
import { withRouter } from "react-router-dom";

export class Main extends Component {
  state = {
    listArray: [],
    listRoomsArray1: [],
    listRoomsArray2: [],
    listRoomTitle1: "",
    listRoomTitle2: "",
    listRoomTitle: "에어비앤비 플러스",
    recommendInfo: [],
    recommendInfoArray: [],
    result: [],
    offsetNum: 0,
    limitNum: 5,
    inputLocation: "",
    menu: [],
    recommendData: recommendMenuData,
    testLocation: "오스투니",
    testSuperHost: "슈퍼호스트",
    testReviewNum: 4.93,
    viewMore: "2,000",
    testRecommendTitle3: "100개 이상",
    listMenu: ""
  };
  // clickedViewMore = () => {
  //   this.history.push(`/list?id=${id}`);
  // };
  handleRecommendWorldClick = id => {
    console.log(id);
    this.props.history.push(`/list?id=${id}`);
  };
  handlePhotoMenu = id => {
    console.log(id);
    this.props.history.push(`/RoomsDetailPage?id=${id}`);
  };
  handleBiggerPhotoMenu = id => {
    console.log(id);
    this.props.history.push(`/RoomsDetailPage?id=${id}`);
  };
  handleOnChange = e => {
    this.setState({ inputLocation: e.target.value }, () => {
      //console.log(this.state.inputLocation);
    });
  };
  searchOnClick = () => {
    fetch(
      `http://10.58.1.221:8000/rooms/search?keyword=${this.state.inputLocation}`,
      {}
    )
      .then(res => res.json())
      .then(res => res.message === "success" && this.props.history.push("url"));
  };

  componentDidMount() {
    this.getMenuInfo();
    this.scrollGetApi();
    this.getLocationInfo();
    this.getRecommendInfo();
    //window.addEventListener("scroll", this.infiniteScroll, true);
    window.addEventListener("scroll", this.handleScroll);
  }
  componenetWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    if (scrollHeight - innerHeight - scrollTop < 50) {
      console.log("Almost Bottom Of This Browser");
      if (this.state.limitNum <= 110) {
        this.testOnClick();
      }
    }
  };
  getRecommendInfo = () => {
    fetch(
      "http://10.58.1.221:8000/rooms/cityrecommendation?number=10&offset=9",
      {}
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        //const { recommendInfo } = this.state
        // const recommendData = res["selected_data"].map(data => {
        //   return data["city_rooms"];
        // });
        // this.setState({ recommendInfo: recommendData });
        let recommendInfoArray = [];
        const data = res["selected_data"]; // => array => array for => [] => setState
        // for (let i = 0; i < data.length; i++) {
        for (let i = 0; i < 4; i++) {
          console.log(data[i]["city_rooms"]);
          recommendInfoArray = recommendInfoArray.concat(data[i]["city_rooms"]);
          this.setState({
            recommendInfo: recommendInfoArray
          });
        }
      });
  };
  // getRecommendCityRooms(){
  //   for(i=0,i<this.state.recommendInfo.length,i++){
  //     this.setState({
  //       recommendInfoArray:this.state.recommendInfoArray.concat(this.state.recommendInfo[i][city_rooms])
  //     })

  //   }
  // }
  getMenuInfo = () => {
    fetch("http://10.58.1.221:8000/rooms/cities", {})
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
      },
      () => {
        // console.log(this.state.offsetNum, this.state.limitNum);
        this.scrollGetApi();
      }
    );
  };
  getLocationInfo = () => {
    fetch(`http://10.58.1.221:8000/rooms/cityrecommendation`, {})
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState(
          {
            listArray: res["selected_data"],
            //this.state.listArray[0]["city_rooms"]
            listRoomsArray1: res["selected_data"][0]["city_rooms"],
            listRoomsArray2: res["selected_data"][1]["city_rooms"],
            listRoomTitle1: res["selected_data"][0]["city_name"],
            listRoomTitle2: res["selected_data"][1]["city_name"]
          },
          () => {
            // console.log("되라", res["selected_data"][0]["city_rooms"]);
          }
        );
      });
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
    console.log("제발 됐으면1 ", this.state.recommendInfo);
    const { menu, recommendData } = this.state;
    const {
      testLocation,
      testSuperHost,
      testReviewNum,

      testRecommendTitle3
    } = this.state;
    const recommendMenu = recommendData.map(el => (
      <RecommendWorld
        clicked={this.handleRecommendWorldClick}
        _id={el.id}
        img={el.src}
        location={el.location}
      />
    ));

    const photoMenuTest = this.state.result.map(el => {
      return (
        <PhotoMenu
          clickPhotoMenu={this.handlePhotoMenu}
          location={el.city}
          superHost={testSuperHost}
          reviewNum={testReviewNum}
          _id={el.id}
          hotelInfo={el.title}
          img={el.pic1}
        />
      );
    });

    // const photoMenu = menu.map(el => {
    //   return (
    //     <PhotoMenu
    //       location={testLocation}
    //       superHost={testSuperHost}
    //       reviewNum={testReviewNum}
    //       id={el.id}
    //       hotelInfo={el.title}
    //       img={el.pic1}
    //     />
    //   );
    // });

    const listMenuFirst = this.state.listRoomsArray1.map((el, index) => {
      return (
        <PhotoMenu
          clickPhotoMenu={this.handlePhotoMenu}
          _id={el.room_id}
          location={el.room_city}
          superHost={testSuperHost}
          hotelInfo={el.room_title}
          reviewNum={testReviewNum}
          img={el.room_pic1}
        />
      );
    });
    const listMenuSecond = this.state.listRoomsArray2.map(el => {
      return (
        <PhotoMenu
          clickPhotoMenu={this.handlePhotoMenu}
          _id={el.room_id}
          location={el.room_city}
          superHost={testSuperHost}
          hotelInfo={el.room_title}
          reviewNum={testReviewNum}
          img={el.room_pic1}
        />
      );
    });
    const highReviewP = this.state.recommendInfo.map(el => {
      return (
        <BiggerPhotoMenu
          clickBiggerPhotoMenu={this.handleBiggerPhotoMenu}
          _id={el.room_id}
          location={el.room_city}
          superHost={testSuperHost}
          hotelInfo={el.room_title}
          reviewNum={testReviewNum}
          img={el.room_pic1}
        />
      );
    });
    // this.state.listArray.length &&
    // console.log("이거", this.state.listArray[0]["city_name"]);
    return (
      <div className="mainWholeContainer">
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
        <div className="recommend__msg">
          에어비앤비와 함께 전 세계를 여행해보세요.
        </div>
        <div className="recommend">{recommendMenu}</div>

        <div className="recommendByReview__header">
          <div>
            <div className="recommendByReview-title">전 세계 숙소</div>
            <span>최고의 평점을 받은 전 세계의 숙소를 둘러보세요.</span>
          </div>
        </div>
        <div className="recommendByReview">
          {this.state.recommendInfo && highReviewP}
        </div>
        <ViewMore />

        <div className="eachContainer">
          <RecommendMenu recommendTitle={this.state.listRoomTitle} />
          <div className="extraMsg">
            퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션
          </div>
          <div className="plusRoomImg" />
        </div>

        <div className="eachContainer">
          {this.state.listRoomTitle1 && (
            <RecommendMenu recommendTitle={this.state.listRoomTitle1} />
          )}
          <div className="recommendByReview">
            {this.state.listRoomsArray1 && listMenuFirst}
          </div>
          <ViewMore />
        </div>

        <div className="eachContainer">
          {this.state.listRoomTitle2 && (
            <RecommendMenu recommendTitle={this.state.listRoomTitle2} />
          )}
          <div className="recommendByReview">
            {this.state.listRoomsArray2 && listMenuSecond}
          </div>
          <ViewMore />
        </div>

        <div className="eachContainer">
          <RecommendMenu recommendTitle={testRecommendTitle3} />
          <div className="recommendByReview">
            {this.state.result && photoMenuTest}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
