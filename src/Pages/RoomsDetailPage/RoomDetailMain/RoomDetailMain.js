import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import { withRouter } from "react-router-dom";
import RoomDetailMockUp from "./RoomDetailMockup";
import FixBar from "Components/FixBar";
import MainHost from "Pages/RoomsDetailPage/MainHost";
import Room from "Pages/RoomsDetailPage/Room";
import Utility from "Pages/RoomsDetailPage/Utility";
import Map from "Pages/RoomsDetailPage/Map";
import HostIntro from "Pages/RoomsDetailPage/HostIntro";
import Warning from "Pages/RoomsDetailPage/Warning";
import Cancel from "Pages/RoomsDetailPage/Cancel";
import Footer from "Components/Footer";
import Payment from "Components/Payment";
import { RoomDetailAPI } from "config.js";
import "react-dates/initialize";
import "./Calendercss.scss";
import "./RoomDetailMain.scss";

export class RoomDetailMain extends Component {
  state = {
    button: false,
    start: null,
    end: null,
    daycount: null,
    data: "",
    lat: 12,
    lng: 14
  };

  componentDidMount() {
    fetch(RoomDetailAPI + this.props.location.search.split("=")[1], {
      method: "get"
    })
      .then(res => res.json())
      .then(info => {
        this.setState(
          {
            data: info.room_information
          },
          () => {
            // console.log(this.state);
          }
        );
      });
    // console.log("------------------props----------", this.props);
    // console.log(this.props.location.search.split("=")[1]);
    // console.log(RoomDetailAPI + this.props.location.search.split("=")[1]);
  }

  BtnClick = () => {
    const { button } = this.state;

    if (this.state.startDate == null) {
      alert("날짜를 설정하세요");
    } else {
      this.ToNumber();
      this.gap();
      this.setState({ button: !button });
    }
  };
  ToNumber = () => {
    const { data } = this.state;
    let cleaning = data.cleaning_fee;
    let cleaning_split = cleaning.split(".");
    let cleaning_result = cleaning_split[0];
    let Num_cleaning = Number(cleaning_result);
    this.setState({ cleaning_fee: Num_cleaning }, () => {});

    let perday = data.price;
    let perday_split = perday.split(".");
    let perday_result = perday_split[0];
    let Num_price = Number(perday_result);
    this.setState({ price: Num_price }, () => {});
  };

  gap = () => {
    let Sobj = this.state.startDate._d;
    let Sstr = String(Sobj);
    let SArr = Sstr.split(" ");
    let Eobj = this.state.endDate._d;
    let Estr = String(Eobj);
    let EArr = Estr.split(" ");
    this.setState({ start: SArr }, () => {});

    this.setState({ end: EArr }, () => {
      this.starttrans();
      this.endtrans();
      this.beyondMonth();
    });
    // console.log(this.state);
  };
  beyondMonth = () => {
    const { end, start } = this.state;

    if (end[1] === "Dec" && start[1] === "Nov") {
      this.setState({ daycount: 30 + (end[2] - start[2]) }, () => {
        // console.log(this.state.daycount);
      });
    } else {
      this.setState({ daycount: end[2] - start[2] }, () => {
        // console.log(this.state.daycount);
      });
    }
  };
  starttrans = () => {
    const { start } = this.state;
    if (start[1] === "Nov") {
      this.setState({ Startmonth: 11 }, () => {
        // console.log("11월선택", Startmonth);
      });
    } else if (start[1] === "Dec") {
      this.setState({ Startmonth: 12 }, () => {
        // console.log("12월선택", Startmonth);
      });
    }
  };
  endtrans = () => {
    const { end } = this.state;
    if (end[1] === "Nov") {
      this.setState({ Endmonth: 11 }, () => {
        // console.log("11월선택", Endmonth);
      });
    } else if (end[1] === "Dec") {
      this.setState({ Endmonth: 12 }, () => {
        // console.log("12월선택", Endmonth);
      });
    }
  };

  render() {
    let off = "payment";
    let on = "not-payment";
    let non = "non-payment";
    const {
      button,
      daycount,
      start,
      end,
      Startmonth,
      Endmonth,
      cleaning_fee,
      price
    } = this.state;
    const {
      maxpeople,
      name,
      hostpic,
      hostname,
      bed,
      bathroom,
      roomtype,
      roomtypedesc,
      roomstory,
      utility_count,
      utility_list,
      hostintro,
      language_list,
      latitude,
      longitude,
      warning_list,
      refund_desc,
      refund_policy
    } = this.state.data;
    return (
      <div>
        <FixBar />
        <div className="button-wrapper">
          <button className={button ? on : non} onClick={this.BtnClick}>
            결제하기
          </button>
          <button className={button ? off : on} onClick={this.BtnClick}>
            X
          </button>
          {button ? (
            <Payment
              price={price}
              cleaning_fee={cleaning_fee}
              usingday={daycount}
              personcount={maxpeople}
              S_year={start[3]}
              S_month={Startmonth}
              S_day={start[2]}
              E_year={end[3]}
              E_month={Endmonth}
              E_day={end[2]}
            />
          ) : null}
        </div>

        <div className="main-wrapper">
          <div className="calender">
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="your_unique_start_date_id"
              endDate={this.state.endDate}
              endDateId="your_unique_end_date_id"
              onDatesChange={({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
              }
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              startDatePlaceholderText="체크인"
              endDatePlaceholderText="체크아웃"
              // 지수님 데이터 날짜가 체크인 체크아웃에 11/29/2019로 표현되게 만들기, 그리고 실제로 그 값이 state에 저장되어 있어야함
            />
          </div>
          <MainHost
            name={name}
            hostpic={hostpic}
            hostname={hostname}
            maxpeople={maxpeople}
            bed={bed}
            bathroom={bathroom}
          />
          <Room roomtype={roomtype} roomtypedesc={roomtypedesc} />
          <div className="room-story-wrapper">
            <div className="subt">숙소</div>
            <div className="room-story">{roomstory}</div>
            <div className="to-host">
              <a href="/">호스트에게 연락하기</a>
              {/* 채팅은 마무리 된 후에 여유 있으면 */}
            </div>
          </div>
          <Utility utilitycount={utility_count} utilitylist={utility_list} />
          <HostIntro
            hostname={hostname}
            hostpic={hostpic}
            hostintro={hostintro}
            language={language_list}
          />
          <Map
            hostname={hostname}
            center={{ lat: latitude, lng: longitude }}
            lat={latitude}
            lng={longitude}
          />
          <Warning warninglist={warning_list} />
          <Cancel refunddesc={refund_desc} refundpolicy={refund_policy} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(RoomDetailMain);
