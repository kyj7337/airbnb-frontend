import React, { Component } from "react";

export class PplNumSetting extends Component {
  state = {
    inputPplNum: "인원",
    optionBoxValue: false,
    adultNum: 0,
    infantNum: 0
  };

  handleOptionBox = () => {
    this.setState({
      optionBoxValue: !this.state.optionBoxValue
    });
  };
  handleDeleteBox = () => {
    this.setState({
      adultNum: 0,
      infantNum: 0,
      inputPplNum: "인원"
    });
  };

  adultMinusBtn = () => {
    const nestAdultNumMinus = this.state.adultNum - 1;
    if (this.state.adultNum !== 0) {
      this.setState({
        adultNum: nestAdultNumMinus,
        inputPplNum: `성인 ${nestAdultNumMinus}, 유아 ${this.state.infantNum}`
      });
    }
  };

  adultPlusBtn = () => {
    const nestAdultNumPlus = this.state.adultNum + 1;
    this.setState({
      adultNum: nestAdultNumPlus,
      inputPplNum: `성인 ${nestAdultNumPlus}, 유아 ${this.state.infantNum}`
    });
  };
  infantMinusBtn = () => {
    const nestInfantNumMinus = this.state.infantNum - 1;
    if (this.state.infantNum !== 0) {
      this.setState(
        {
          infantNum: nestInfantNumMinus
        },
        () =>
          this.setState({
            inputPplNum: `성인 ${this.state.adultNum}, 유아 ${this.state.infantNum}`
          })
      );
    }
  };
  infantPlusBtn = () => {
    const nestInfantNumPlus = this.state.infantNum + 1;
    if (this.state.adultNum === 0) {
      this.setState(
        {
          infantNum: nestInfantNumPlus,
          adultNum: 1
        },
        () =>
          this.setState({
            inputPplNum: `성인 ${this.state.adultNum}, 유아 ${this.state.infantNum}`
          })
      );
    } else {
      this.setState(
        {
          infantNum: nestInfantNumPlus
        },
        () =>
          this.setState({
            inputPplNum: `성인 ${this.state.adultNum}, 유아 ${this.state.infantNum}`
          })
      );
    }
  };

  render() {
    //console.log(this.state.optionBoxValue);
    //console.log(this.state.adultNum);
    return (
      <div className="searchBox__pplNum">
        <button
          className="searchBox__pplNum__btn header2-pplNum"
          onClick={this.handleOptionBox}
        >
          {this.state.inputPplNum}
        </button>
        <div
          className={
            this.state.optionBoxValue
              ? "searchBox__pplNum__option"
              : "displayNone"
          }
        >
          <div className="option-div">
            <div className="adultNum">성인</div>
            <div className="adultNumBtn">
              <button className="minusBtn" onClick={this.adultMinusBtn}>
                -
              </button>
              <div className="pplNumStatus">{this.state.adultNum}+</div>
              <button className="plusBtn" onClick={this.adultPlusBtn}>
                +
              </button>
            </div>
          </div>
          <div className="option-div">
            <div className="adultNum">
              유아
              <span>( 2세 미만 )</span>
            </div>
            <div className="adultNumBtn">
              <button className="minusBtn" onClick={this.infantMinusBtn}>
                -
              </button>
              <div className="pplNumStatus">{this.state.infantNum}+</div>
              <button className="plusBtn" onClick={this.infantPlusBtn}>
                +
              </button>
            </div>
          </div>
          <div className="option-save">
            <button className="pplNumdeleteBtn" onClick={this.handleDeleteBox}>
              삭제
            </button>
            <button className="pplNumSaveBtn" onClick={this.handleOptionBox}>
              저장
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PplNumSetting;
