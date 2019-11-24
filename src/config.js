const loginAPI = "http://10.58.0.155:8002/account/signin";
const RoomDetailAPI = "http://10.58.1.221:8000/rooms/";
const RoomDetailAPIMockup = "http://localhost:3000/data/Roomsdetail.json";
const GuestDetailAPI = "http://10.58.1.221:8000/reservation/list";
const PayDetailAPI = "http://10.58.1.221:8000/reservation";

//RoomDetailAPI가 사용된 곳 : Map.js , RoomDetailPage.js , RoomsDetailMain.js, Picture.js

const isuserlogin = () => {
  return localStorage.getItem("access_token") !== null;
};

export {
  isuserlogin,
  loginAPI,
  RoomDetailAPI,
  GuestDetailAPI,
  PayDetailAPI,
  RoomDetailAPIMockup
};
