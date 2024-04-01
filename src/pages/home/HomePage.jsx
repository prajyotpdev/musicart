import { useState } from "react";
import User from "../../store/models/User";
import styleshomepage from "../home/HomePage.module.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import DashBoardpage from "../dashboard/DashboardPage.jsx";
import TopNavbar from "./components/topnavbar/TopNavbar.jsx";
import InvoicePage from "../invoice/InvoicePage.jsx";
import TopRibbon from "./components/top-ribbon/TopRibbon.jsx";
import CartPage from "../cart/CartPage.jsx";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("home"); // Track active section
  const [user, setUser] = useState(new User());
  const updateUser = () => {
    const updatedUser = new User("prajyot@getTimeMeasureUtils.com");
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };
  const handleSectionChange = (newSection) => {
    setActiveSection(newSection);
  };
  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <DashBoardpage />;
      case "invoice":
        return <InvoicePage />;
      case "cart":
        return <CartPage/>;
      default:
        return <DashBoardpage />;
    }
  };

  return (
    <div className={styleshomepage.homepage}>
      <TopRibbon />
      <TopNavbar
        onSectionChange={handleSectionChange}
        currentsection={activeSection}
        style={{ flex: "1 auto" }}
      />
      <div className={styleshomepage.heroContainer}>{renderSection()}</div>{" "}
    </div>
  );
};

export default HomePage;
