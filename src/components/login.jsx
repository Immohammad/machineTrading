import React, { useState } from "react";
import axios from "axios";
import loginImage from "./assets/logo.png";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const currentUser = {
        email: userName,
        password: password,
      };
      axios
      .post("https://api-machinetrading.onrender.com/login", currentUser)
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", userName);
        window.location = "/dashboard";
      })
      .catch(function () {
        // NotificationManager.warning("نام کاربری یا رمز عبور نادرست است");
      });
  }
  return (
    <div id="formLogin">
      <div style={{ margin: "0 auto" }}>
        {/* <img src={loginImage} alt="Login" id="loginImage"/> */}
        <form onSubmit={handleSubmit}>
          <h4 style={{ margin: "30px" }}>نام کاربری و رمز عبور را وارد کنید</h4>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            placeholder="نام کاربری"
            required
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="رمز ورود"
            required
          />
          <br />
          <br />
          <input
            type="submit"
            value="ورود به حساب کاربری"
            className="loginButtons"
          />
          {/* <p>Forget password? <span style={{color:"#FAAF40"}}>Create new</span></p> */}
        </form>
      </div>
      <img src={loginImage} alt="Login" style={{ width: "30vw" }} />
    </div>
  );
}

export default Login;
