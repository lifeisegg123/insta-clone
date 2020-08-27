import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar/NavBar";
import Timeline from "./Timeline/Timeline";
function MainPage() {
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log(userInfo);
  return (
    <div>
      <NavBar></NavBar>
      {/* <Timeline></Timeline> */}
    </div>
  );
}

export default MainPage;
