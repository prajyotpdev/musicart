import styles from "../musicItemComponent.module.css";
import img1 from "../../../../assets/images/img1.png";

function MusicComponent(props) {
  return (
    <div className={styles.musicContainer}>
      <div className={styles.imgContainer}>
        <div>
          <img src={props.img} width="140" height="140" />
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
          {props.title}
        </div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "left",
            paddingBottom: "5px",
          }}
        >
          {props.price}
        </div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "left",
            paddingBottom: "5px",
          }}
        >
          {props.color}
        </div>
      </div>
    </div>
  );
}

export default MusicComponent;
