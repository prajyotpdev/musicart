import styles from "./DashboardPage.module.css";
import FilterForm from "../../components/dropdown/Dropdown.jsx";
import StatusFeed from "./components/feed/StatusFeed.jsx";
import Navbar from "../home/components/navbar/Navbar.jsx";
// import { fetchTasks } from "../../store/slices/taskSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import MusicComponent from "./components/itemGrid/musicItemComponent.jsx";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";

const DashBoardpage = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
    // You can also update the state or perform any other necessary actions
  };

  const musicItems = [
    {
      img: img1,
      title: "Sony WH-CH720N",
      price: "Price - ₹ 3,500",
      color: "Black | Over-ear headphone",
    },
    {
      img: img2,
      title: "JBL C100SI",
      price: "Price - ₹ 599",
      color: "Black | In-ear headphone",
    },
    {
      img: img2,
      title: "JBL C100SI",
      price: "Price - ₹ 599",
      color: "Black | In-ear headphone",
    },
    {
      img: img2,
      title: "JBL C100SI",
      price: "Price - ₹ 599",
      color: "Black | In-ear headphone",
    },
    {
      img: img2,
      title: "JBL C100SI",
      price: "Price - ₹ 599",
      color: "Black | In-ear headphone",
    },
    {
      img: img2,
      title: "JBL C100SI",
      price: "Price - ₹ 599",
      color: "Black | In-ear headphone",
    },
    {
      img: img2,
      title: "JBL C100SI",
      price: "Price - ₹ 599",
      color: "Black | In-ear headphone",
    },
  ];
  

  return (
    <>
      <div className={styles.dashboardPage}>
        <Navbar />
        {/* <div className={styles.dashboardHeader}>
          Board
          <FilterForm
            data={currentTaskList}
            onFilteredDataChange={handleFilteredDataChange}
          />
        </div> */}
        {/* <SolidButton
          bgcolor={"#FF2473"}
          fontColor={"#FFFFFF"}
          onClick={handleGetAllTasks}
        >
          Test
        </SolidButton> */}
        <div className={styles.dashboardHeroContainer}>
          {/* <button onClick={clearLocalStorage}>Clear</button> */}
          {/* <div className={styles.verticalTailScroll}> */}
          <div className={styles.cards}>
            {musicItems.map((item) => (
              <MusicComponent
                img={item.img}
                title={item.title}
                price={item.price}
                color={item.color}
              ></MusicComponent>
            ))}
          </div>

          {/* <ItemGrid/> */}
          {/* <StatusFeed statusId="Backlog" key={1} />
            <StatusFeed statusId="To-do" key={2} />
            <StatusFeed statusId="In progress" key={3} />
            <StatusFeed statusId="Done" key={4} /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default DashBoardpage;
