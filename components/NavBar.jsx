import styles from "../styles/components/NavBar.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { ChatBubbleOutlineOutlined } from "@mui/icons-material";
import { ListOutlined } from "@mui/icons-material";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input className={styles.input} type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <LanguageOutlinedIcon
              className={styles.icon}
              style={{ fontSize: 20 }}
            />
            English
          </div>
          <div className={styles.item}>
            <DarkModeOutlinedIcon
              className={styles.icon}
              style={{ fontSize: 20 }}
            />
          </div>
          <div className={styles.item}>
            <FullscreenExitOutlinedIcon
              className={styles.icon}
              style={{ fontSize: 20 }}
            />
          </div>
          <div className={styles.item}>
            <NotificationsNoneOutlinedIcon
              className={styles.icon}
              style={{ fontSize: 20 }}
            />
            <div className={styles.counter}>1</div>
          </div>
          <div className={styles.item}>
            <ChatBubbleOutlineOutlined
              className={styles.icon}
              style={{ fontSize: 20 }}
            />
            <div className={styles.counter}>2</div>
          </div>
          <div className={styles.item}>
            <ListOutlined className={styles.icon} style={{ fontSize: 20 }} />
          </div>
          <div className={styles.item}>
            <Image
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg"
              alt="avatar"
              className={styles.avatar}
              width="30px"
              height="30px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
