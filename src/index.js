import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
window.Kakao.init("ef4d978887fc12d6f3b6f3ac59c12316");
window.fbAsyncInit = function() {
  window.FB.init({
    appId: "{556195765142816}",
    cookie: true,
    xfbml: true,
    version: "{v5.0}"
  });

  window.FB.AppEvents.logPageView();
};
(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

window.IMP.init("imp80616913");

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
