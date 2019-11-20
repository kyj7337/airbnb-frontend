import React, { Component } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class DatePicker extends Component {
  constructor() {
    super();
    this.state = {
      startY: "",
      startM: "",
      startD: "",
      endY: "",
      endM: "",
      endD: ""
    };
  }
  calendarCheck = () => {
    let startObj = this.state.startDate._d;
    let startStr = String(startObj);
    let startArr = startStr.split(" ");
    let endObj = this.state.endDate._d;
    let endStr = String(endObj);
    let endArr = endStr.split(" ");
    console.log(this.state);
    this.setState({ startD: startArr[2] });
    this.setState({ startY: startArr[3] });
    this.setState({ startM: startArr[1] });
    this.setState({ endD: endArr[2] }, () => console.log(this.state.endD));
    this.setState({ endY: endArr[3] }, () => console.log(this.state.endY));
    this.setState({ endM: endArr[1] }, () => this.handleMonth(this.state.endM));
    //console.log(this.state.endM);
  };
  handleMonth = month => {
    if (this.state.endM === "Nov") {
      this.setState({ endM: 11 }, () => console.log(this.state.endM));
    }
  };

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
        />
        {/* <button onClick={this.calendarCheck}>확인용</button> */}
      </div>
    );
  }
}

export default DatePicker;
