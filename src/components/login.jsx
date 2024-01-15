import React, { useState } from "react";
import axios from "axios";
import BASE_URL from './variables.js';

import loginImage from "./assets/logo.png";
import { toast } from "react-toastify";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [referrerCode, setReferrerCode] = useState("");

  const showSignupForm = () => {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
  };

  const showLoginForm = () => {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  };

  function handleLogin(event) {
    event.preventDefault();
    const currentUser = {
      username: userName,
      password: password,
    };
    axios
      .post(`${BASE_URL}/login`, currentUser)
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", userName);
        window.location = "/dashboard";
      })
      .catch(function () {
        toast("نام کاربری یا رمز عبور نادرست است");
      });
  }

  function handleRegister(event) {
    event.preventDefault();
    const newUser = {
      email: userName,
      password: password,
      fullname: fullname,
      phonenumber: phonenumber,
      referrerCode: referrerCode,
    };
    axios
      .post(`${BASE_URL}/register`, newUser)
      .then(function (response) {
        toast("ثبت نام با موفقیت انجام شد")
        setTimeout(() => {
          handleLogin(event);
        }, 1000);
      })
      .catch(function (error) {
        toast("مشکلی پیش آمد");
        console.log(error)
      });
  }

  return (
    <div id="formLogin">
      <div style={{ margin: "0 auto" }}>
        <form onSubmit={handleLogin} id="loginForm">
          <h4 style={{ margin: "30px", color: "#334456" }}>ورود</h4>
          <label>
            نام کاربری
          </label>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            placeholder="نام کاربری"
            required
          />
          <br />
          <label>
            رمز ورود
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="رمز ورود"
            required
          />
          <br />
          <input
            type="submit"
            value="ورود به حساب کاربری"
            className="loginButtons"
          />
          <p style={{ marginTop: "20px" }}>در صورتی که تا کنون ثبت نام نکرده‌اید ابتدا  <span className="changeLoginButtons" onClick={showSignupForm}>ثبت نام کنید.</span></p>
        </form>

        {/* Signup form that is shown when user wants */}
        <form onSubmit={handleRegister} id="signupForm" style={{ display: "none" }}>
          <h4 style={{ margin: "30px", color: "#334456" }}>ثبت نام</h4>
          <label>
            نام کاربری
          </label>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            required
          />
          <label>
            رمز ورود
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <label>
            نام و نام خانوادگی</label>
          <input
            type="text"
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
            required
          />
          <label>
            شماره موبایل</label>
          <input
            type="tel"
            value={phonenumber}
            onChange={(event) => setPhonenumber(event.target.value)}
            required
          />

          <label>
            کد معرف</label>
          <input
            type="text"
            value={referrerCode}
            onChange={(event) => setReferrerCode(event.target.value)}
            required
          />
          <input
            type="submit"
            value="ثبت نام"
            className="loginButtons"
          />
          <p style={{ marginTop: "20px" }}>در صورتی که قبلا ثبت نام کرده‌اید <span className="changeLoginButtons" onClick={showLoginForm}>وارد شوید.</span></p>
        </form>
      </div>
      <img src={loginImage} alt="Login" style={{ width: "30vw" }} />
    </div>
  );
}

export default Login;
