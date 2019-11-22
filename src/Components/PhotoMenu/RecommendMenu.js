import React, { Component } from "react";

export class RecommendMenu extends Component {
  render() {
    return (
      <div className="recommendByReview__header">
        <div>
          <div className="recommendByReview-title">
            {this.props.recommendTitle}의 숙소
          </div>
        </div>
      </div>
    );
  }
}

export default RecommendMenu;

// async function handleClick() {
//   const data = await Axios.post();
//   data &&
//     this.setState({ lat: data.lat, lng: data.lng }, () => {
//       const lat = this.state.lat;
//       const lng = this.state.lng;
//       fetch(`${api}?lat=${lat}&llng=${lng}`)
//         .then(res => res.json())
//         .then(
//           res => res.message === "success" && this.props.history.push("url")
//         );
//     });
// }
