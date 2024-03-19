// import React from 'react'
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import LoadingScreen from "../pages/loading/LoadingScreen.jsx";
import SignInPage from "../pages/signin/SignInPage.jsx";
import { selectUser } from "../store/slices/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../pages/home/HomePage.jsx";
import AboutPage from "../pages/about/AboutPage.jsx";
// import PublishedPage from "../pages/publish_page/PublicPage.jsx";
import DashBoardpage from "../pages/dashboard/DashboardPage.jsx";
import RequireAuth from "../components/auth/require-auth.jsx";
import RegisterPage from "../pages/register/RegisterPage.jsx";

const RouteManager = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user.user);
  const currentUser = useSelector(selectUser);
  const [hasFetched, setHasFetched] = useState(false);
  const navigate = useNavigate();
  console.log("User:", !!currentUser);

  useEffect(() => {
    if (currentUser) {
      navigate("/musicart/user");
    }
  }, [currentUser]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const profiles = [
    {
      id: "event1",
      name: "Event 1",
      date: "2023-09-10",
      description: "Description 1",
    },
    {
      id: "event2",
      name: "Event 2",
      date: "2023-09-15",
      description: "Description 2",
    },
    // Add more events from Firebase data
  ];

  return (
    <Routes>
      <Route
        path="/musicart/"
        element={isLoading ? <LoadingScreen /> : <SignInPage />}
      />
      <Route path="/musicart/about" element={<AboutPage />} />
      {/* <Route path="/musicart/edit" element={<EditDetailsScreen />} /> */}
      <Route path="/musicart/register" element={<RegisterPage />} />
      <Route path="/musicart/signin" element={<SignInPage />} />
      {/* <Route path="/musicart/updates" element={<UpdatesPage />} /> */}
      {/* <Route path="/musicart/rough" element={<RoughPage />} /> */}
      {/* <Route
        path="/musicart/profiles/:profileId"
        element={<PublishedPage />}
      ></Route> */}
      <Route
        path="/musicart/user"
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      />
      <Route
        path="/musicart/home"
        element={
          isLoading && !currentUser ? (
            <LoadingScreen />
          ) : currentUser ? (
            <HomePage />
          ) : (
            <HomePage />
          )
        }
      />
    </Routes>
  );
};

export default RouteManager;
