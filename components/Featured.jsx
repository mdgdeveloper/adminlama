import styles from "../styles/components/Featured.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <h1 className={styles.title}>Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.featuredChart}>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className={styles.featuredTitle}>Total sales made today</p>
        <p className={styles.featuredAmount}>$420</p>
        <p className={styles.featuredDesc}>
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className={styles.summary}>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Target</div>
            <div className={`${styles.itemResult} ${styles.positive}`}>
              <KeyboardArrowUpIcon fontSize="small" />
              <div className={styles.itemResultAmount}>$14.2k</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Week</div>
            <div className={`${styles.itemResult} ${styles.negative}`}>
              <KeyboardArrowDownIcon fontSize="small" />
              <div className={styles.itemResultAmount}>$14.2k</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Month</div>
            <div className={`${styles.itemResult} ${styles.positive}`}>
              <KeyboardArrowUpIcon fontSize="small" />
              <div className={styles.itemResultAmount}>$14.2k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
