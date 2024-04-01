import React from "react";
import stylesDeskTopBanner from "./DeskTopBanner.module.css";
import { jwtDecode } from "jwt-decode";
import bannerImage from "../../../../assets/images/banner_image.png";
import { useSelector } from "react-redux";

const DeskTopBanner = () => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const originalDate = new Date();
  const day = originalDate.getDate();
  const month = originalDate.toLocaleString("en-US", { month: "short" });
  const year = originalDate.getFullYear();

  function getOrdinalNum(n) {
    return (
      n +
      (n > 0
        ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
        : "")
    );
  }

  const userName = useSelector((state) => state.user.user).name;

  return (
    <div className={stylesDeskTopBanner.deskTopBanner}>
      <div className={stylesDeskTopBanner.deskTopBannerContent}>
        Grab upto 50% off on Selected headphones
      </div>
      <div className={stylesDeskTopBanner.deskTopBannerImage}>
        <img src={bannerImage} height={"200vh"} />
      </div>
    </div>
  );
};

export default DeskTopBanner;
