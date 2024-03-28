import styles from "./DashboardPage.module.css";
import FilterForm from "../../components/dropdown/Dropdown.jsx";
import StatusFeed from "./components/feed/StatusFeed.jsx";
import Navbar from "../home/components/navbar/Navbar.jsx";
// import { fetchTasks } from "../../store/slices/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MusicComponent from "./components/itemGrid/musicItemComponent.jsx";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import { useNavigate } from "react-router-dom";

import { fetchAllItems } from "../../store/slices/feedSlice.js";

const DashBoardpage = () => {
  const dispatch = useDispatch();
  const musicItemsFeed = useSelector(
    (state) => state.feed && state.feed.feed && state.feed.feed.data
  );
  console.log("this is my musicfeed" + musicItemsFeed);
  const isLoading = useSelector((state) => state.feed.isLoading);
  // useEffect(() => {
  //   handleGetAllData();
  // });
  // useEffect(() => {
  //   // Dispatch fetchAllItems action when component mounts
  //   dispatch(fetchAllItems());
  // }, [dispatch]);
  const handleGetAllData = async (e) => {
    // dispatch(fetchAllItems());
    // setFeed([
    //   {
    //     _id: "65fc605825e7463a49446e9a",
    //     displayName: "My Favorite Song",
    //     type: "song",
    //     price: 9,
    //     colour: "red",
    //     description: "This is a detailed description of the song",
    //     company: "Music Company",
    //     aboutItem: "A great song",
    //     isAvailable: true,
    //     displayImageList: ["image1.jpg", "image2.png"],
    //     __v: 0,
    //   },
    // ]);
    console.log("this is username" + nameUser);
  };

  const [feed, setFeed] = useState([]);
  const [dummyData, setDummyData] = useState([]);
  const clearLocalStorage = () => {
    localStorage.clear();
    // You can also update the state or perform any other necessary actions
  };
  const fetchFeed = async () => {
    try {
      // dispatch(fetchAllItems());
      // const response = await axios.get(
      //   "http://localhost:8000/api/v1/musicartitem/all"
      // );
      // setFeed(response.data);
      console.log("successed");
    } catch (error) {
      console.error("Error fetching feed:", error);
    }
  };

  const updateFeed = async (filteredItems) => {
    setFeed(filteredItems); // Update feed with filtered items
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const getRandomImageUrl = () => {
    const width = 200;
    const height = 200;
    const randomId = getRandomInt(1, 1000); // Generate a random ID for the image
    return "https://picsum.photos/200";
  };
  const generateDummyData = () => {
    const data = [];
    for (let i = 0; i < 30; i++) {
      const numImages = getRandomInt(1, 5); // Generate a random number of images (between 1 and 5)
      const displayImageList = Array.from({ length: numImages }, () =>
        getRandomImageUrl()
      );
      data.push({
        isAvailable: Math.random() < 0.5, // Random boolean value for isAvailable
        company: "Music Company",
        aboutItem: "A great song",
        displayName: `My Favorite Song ${i + 1}`,
        colour: "red",
        price: getRandomInt(5, 20), // Random price between 5 and 20
        type: "song",
        description: "This is a detailed description of the song",
        displayImageList,
      });
    }
    setDummyData(data);
  };
  //  const feed =  MusicItemModel(isAvailable);
  const musicItems = [
    {
      displayImageList: [img1],
      displayName: "Sony WH-CH720N",
      price: "Price - ₹ 3,500",
      colour: "Black | Over-ear headphone",
    },
    {
      displayImageList: [img2],
      displayName: "JBL C100SI",
      price: "Price - ₹ 599",
      colour: "Black | In-ear headphone",
    },
    {
      displayImageList: [img2],
      displayName: "JBL C100SI",
      price: "Price - ₹ 599",
      colour: "Black | In-ear headphone",
    },
    {
      displayImageList: [img2],
      displayName: "JBL C100SI",
      price: "Price - ₹ 599",
      colour: "Black | In-ear headphone",
    },
    {
      displayImageList: [img2],
      displayName: "JBL C100SI",
      price: "Price - ₹ 599",
      colour: "Black | In-ear headphone",
    },
    {
      displayImageList: [img2],
      displayName: "JBL C100SI",
      price: "Price - ₹ 599",
      colour: "Black | In-ear headphone",
    },
    {
      displayImageList: [img2],
      displayName: "JBL C100SI",
      price: "Price - ₹ 599",
      colour: "Black | In-ear headphone",
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
          <button onClick={generateDummyData}>Create random Entries</button>
          {/* <div className={styles.verticalTailScroll}> */}
          {/* <div className={styles.cards}>
            {musicItems.map((item) => (
              <MusicComponent
                img={item.img}
                title={item.title}
                price={item.price}
                color={item.color}
              ></MusicComponent>
            ))}
          </div> */}
          {isLoading && !musicItemsFeed && <div>..Loading</div>}
          <div className={styles.cards}>
            {musicItemsFeed &&
              musicItemsFeed.map((item) => (
                <MusicComponent
                  id={item._id}
                  displayImageList={item.displayImageList}
                  displayName={item.displayName}
                  price={item.price}
                  colour={item.colour}
                >
                  <div key={item._id}></div>
                </MusicComponent>
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
