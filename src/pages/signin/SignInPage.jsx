import React from "react";
import styles from "../signin/SignInPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAsync, selectUser } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import User from "../../store/models/User.jsx";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user.user);

  const [user, setUser] = useState(new User());

  const updateUser = () => {
    const updatedUser = new User("prajyot@getTimeMeasureUtils.com");
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    console.log(JSON.stringify(updatedUser));
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    dispatch(
      loginAsync({
        email: email,
        password: password,
      })
    );
    console.log("This is state" + state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("User Signed In");
    const userData = {
      email: email,
      password: password,
    };

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const signin = await fetch(`${baseUrl}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (signin.ok) {
        const responseJson = await signin.json();
        console.log("Response from the server:", responseJson);
      } else {
        // Handle the case when the request was not successful
        console.error("Signin failed with status:", signin.status);
      }
    } catch (err) {
      console.error();
    }
  };

  const handleCheckHealth = async (e) => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const checkHealth = await fetch(`${baseUrl}/health`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("server is running = " + checkHealth.json);
  };

  const routeChange = () => {
    let path = `signup`;
    navigate("/musicart/register");
  };

  return (
    <div className={styles.signInContainer}>
      <div className={styles.leftSide}>
        <h2>Welcome aboard my friend</h2>
        <h4>just a couple of clicks and we start</h4>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.heading}>
          <h1>Login</h1>
        </div>
        <button onClick={handleCheckHealth}> Check health </button>
        {/* <h3>Your personal job finder is here</h3> */}
        <div className={styles.signInForm}>
          <form onSubmit={handleSignIn} className={styles.signInForm}>
            <input
              className={styles.inputfield}
              placeholder="Email"
              type="email"
              onChange={handleEmail}
            />
            <input
              className={styles.inputfield}
              placeholder="Password"
              type="password"
              onChange={handlePassword}
            />
            <button type="submit" className={styles.submitbtn}>
              Log in
            </button>
            <div className={styles.signup} onClick={routeChange}>
              Have no account yet?{" "}
              <div className={styles.signupbtn}>Register</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
