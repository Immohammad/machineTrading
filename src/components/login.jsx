import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "./variables.js";

import loginImage from "./assets/logo.png";
import { toast } from "react-toastify";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [code, setCode] = useState("");
  const [type, setType] = useState(0);

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
      username: userName,
      password: password,
      email: email,
      firstname: firstName,
      lastname: lastName,
      companyname: companyName,
      phonenumber: phonenumber,
      nationalcode: code,
      referrerCode: referrerCode,
      type: type,
    };
    axios
      .post(`${BASE_URL}/register`, newUser)
      .then((response) => {
        toast("ثبت نام با موفقیت انجام شد");
        setTimeout(() => {
          handleLogin(event);
        }, 1000);
      })
      .catch((error) => {
        toast("مشکلی پیش آمد");
        // console.log(error);
      });
  }

  return (
    <div id="formLogin">
      <div style={{ margin: "0 auto" }}>
        <form onSubmit={handleLogin} id="loginForm">
          <h4 style={{ margin: "30px", color: "#334456" }}>ورود</h4>
          <label>نام کاربری</label>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            placeholder="نام کاربری"
            required
          />
          <br />
          <label>رمز عبور</label>
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
          <p style={{ marginTop: "20px" }}>
            در صورتی که تا کنون ثبت نام نکرده‌اید ابتدا{" "}
            <span className="changeLoginButtons" onClick={showSignupForm}>
              ثبت نام کنید.
            </span>
          </p>
        </form>

        {/* Signup form that is shown when user wants */}
        <form
          onSubmit={handleRegister}
          id="signupForm"
          style={{ display: "none" }}
        >
          <h4 style={{ margin: "30px", color: "#334456" }}>ثبت نام</h4>
          <label>نام کاربری</label>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            required
          />
          <label>رمز عبور</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <label>ایمیل</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label>شماره موبایل</label>
          <input
            type="tel"
            value={phonenumber}
            onChange={(event) => setPhonenumber(event.target.value)}
            required
          />

          <label>نوع کاربر</label>
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            required
            style={{ display: "block", width: "100%" }}
          >
            <option value={0}>حقیقی</option>
            <option value={1}>حقوقی</option>
          </select>
          {type == 0 ? (
            <>
              <label>نام</label>
              <input
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
              <label>نام خانوادگی</label>
              <input
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
              <label>کد ملی</label>
              <input
                type="number"
                value={code}
                onChange={(event) => setCode(event.target.value)}
                required
                style={{ webkitAppearance: "none" }}
              />
            </>
          ) : (
            <>
              <label>نام شرکت</label>
              <input
                type="text"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
                required
              />
              <label>کد اقتصادی</label>
              <input
                type="number"
                value={code}
                onChange={(event) => setCode(event.target.value)}
                required
              />
            </>
          )}

          <label>کد معرف</label>
          <input
            type="text"
            value={referrerCode}
            onChange={(event) => setReferrerCode(event.target.value)}
            required
          />
          <input type="submit" value="ثبت نام" className="loginButtons" />
          <p style={{ marginTop: "20px" }}>
            در صورتی که قبلا ثبت نام کرده‌اید{" "}
            <span className="changeLoginButtons" onClick={showLoginForm}>
              وارد شوید.
            </span>
          </p>
        </form>
      </div>
      <img src={loginImage} alt="Login" style={{ width: "30vw" }} />
    </div>
  );
}

export default Login;
