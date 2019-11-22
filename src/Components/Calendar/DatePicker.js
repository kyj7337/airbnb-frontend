import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

class DatePicker extends Component {
  state = {
    startY: "",
    startM: "",
    startD: "",
    endY: "",
    endM: "",
    endD: ""
  };
  calendarCheck = () => {
    const { startDate, endDate } = this.state;
    let startObj = startDate._d;
    let startStr = String(startObj);
    let startArr = startStr.split(" ");
    let endObj = endDate._d;
    let endStr = String(endObj);
    let endArr = endStr.split(" ");
    console.log(this.state);
    this.setState({
      startD: startArr[2],
      startY: startArr[3],
      startM: startArr[1],
      endD: endArr[2],
      endY: endArr[3],
      endM: endArr[1]
    });
  };
  // handleMonth = month => {
  //   if (this.state.endM === "Nov") {
  //     this.setState({ endM: 11 }, () => console.log(this.state.endM));
  //   }
  // };

  render() {
    // const { startDate, setStartDate } = this.state;
    // const { endDate, setEndDate } = this.state;
    // const { focusedInput, setFocusedInput } = this.state;
    // const handleDatesChange = ({ startDate, endDate }) => {
    //   setStartDate(startDate);
    //   setEndDate(endDate);
    // };
    return (
      <div className="datepicker">
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          startDatePlaceholderText="체크인"
          endDatePlaceholderText="체크아웃"
          minimumNights="1"
          monthFormat="YYYY년MM월"
          displayFormat="MM월 DD일"
        />
        {/* <button onClick={this.calendarCheck}>확인용</button> */}
      </div>
    );
  }
}

export default DatePicker;
