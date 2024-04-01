import styles from "./DashboardPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MusicComponent from "./components/itemGrid/musicItemComponent.jsx";

import { fetchAllItems } from "../../store/slices/feedSlice.js";
import FilterBar from "./components/filterBar/FilterBar.jsx";
import DeskTopBanner from "../home/components/banner/DeskTopBanner.jsx";

const DashBoardpage = () => {
  const dispatch = useDispatch();
  const musicItemsFeed = useSelector(
    (state) => state.feed && state.feed.feed && state.feed.feed.data
  );
  const isLoading = useSelector((state) => state.feed.isLoading);
  // useEffect(() => {
  //   handleGetAllData();
  // });
  useEffect(() => {
    // Dispatch fetchAllItems action when component mounts
    dispatch(fetchAllItems());
  }, [dispatch]);
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
  const [dummyData, setDummyData] = useState();
  const clearLocalStorage = () => {
    localStorage.clear();
    // You can also update the state or perform any other necessary actions
  };
  const fetchFeed = async () => {
    try {
      dispatch(fetchAllItems());
      // const response = await axios.get(
      //   "http://localhost:8000/api/v1/musicartitem/all"
      // );
      setFeed(response.data);
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

  const getRandomStringFromList = (listofItems) => {
    return listofItems[getRandomInt(0, listofItems.length - 1)];
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
        _id: getRandomInt(10000, 2000000),
        isAvailable: Math.random() < 0.5,
        company: getRandomStringFromList([
          "Boat",
          "Zebronics",
          "iBall",
          "Bose",
          "Senheiser",
          "Bang & Olufsen",
          "JBL",
          "Phillips",
        ]),
        aboutItem: "A great song",
        displayName: "Item:" + getRandomInt(100, 200),
        colour: getRandomStringFromList([
          "Red",
          "Grey",
          "White",
          "Black",
          "Blue",
        ]),
        price: getRandomInt(400, 2000), // Random price between 5 and 20
        type: getRandomStringFromList([
          "Over-ear Earphone",
          "On-ear Earphone",
          "In-ear Earphone",
        ]),
        description: "This is a detailed description of the song",
        displayImageList,
      });
    }
    setDummyData(data);
    // console.log(dummyData);
  };

  const handleUpdateFeed = (filteredItems) => {
    console.log("Filtered items:", filteredItems);
  };
  return (
    <>
      <div className={styles.dashboardPage}>
        {/* <Navbar /> */}
        <DeskTopBanner />

        {/* <button onClick={generateDummyData}>Create random Entries</button> */}
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
          <FilterBar updateFeed={handleUpdateFeed} />
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
                  type={item.type}
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
