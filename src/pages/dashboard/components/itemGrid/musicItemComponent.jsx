import styles from "./musicItemComponent.module.css";
import img1 from "../../../../assets/images/img1.png";
import { useNavigate } from "react-router-dom";
import addtocartbtn from "../../../../assets/icons/addToCartIcon.svg";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../../../store/slices/cartSlice";

function MusicComponent(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCart = async (e) => {
    e.preventDefault();
    // console.log("Item added to cart:", props.id);
    dispatch(
      addCartItem({ itemId: props.id, quantity: 1, colour: props.colour })
    );
  };

  return (
    <div className={styles.musicContainer}>
      <div className={styles.imgContainer}>
        <div>
          <img src={props.displayImageList[0]} width="140" height="140" />
        </div>
      </div>
      <div style={{ padding: "5px" }}>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "left",
            paddingBottom: "5px",
          }}
        >
          {props.displayName}
        </div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "left",
            paddingBottom: "5px",
          }}
        >
          Price - ₹ {props.price}
        </div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "left",
            paddingBottom: "5px",
          }}
        >
          {props.colour} | {props.type}
        </div>
        <div onClick={addToCart} className={styles.addtocartbtn}>
          <img src={addtocartbtn} alt="logo" height={"50px"} />
        </div>
      </div>
    </div>
  );
}

export default MusicComponent;
