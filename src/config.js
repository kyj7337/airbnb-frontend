const loginAPI = "http://10.58.1.8:8000/users/signin";
const RoomDetailAPI = "http://10.58.1.221:8000/rooms/";
const GuestDetailAPI = "http://10.58.1.221:8001/reservation/list";
const PayDetailAPI = "http://10.58.1.221:8001/reservation";
//GuestDetailAPI와 PayDetailAPI는 결국 같은 endpoint를 갖는다 ???
//GuestDetail로 POST 하고 POST한 걸 GET 하니깐 결국 같은곳??
export { loginAPI, RoomDetailAPI, GuestDetailAPI, PayDetailAPI };

export const isuserlogin = () => {
  return localStorage.getItem("access_token") !== null;
};
