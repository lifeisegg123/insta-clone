import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from "./routes/LoginPage/LoginPage";
import SignupPage from "./routes/SignupPage/SignupPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Route path="/user" component={Footer}></Route>
        <Route path="/user/login" component={LoginPage}></Route>
        <Route path="/user/signup" component={SignupPage}></Route>
      </Router>
    </>
  );
}

export default App;
