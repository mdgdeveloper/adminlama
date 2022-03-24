import styles from "../styles/components/SideBar.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <span className={styles.logo}>mdgCode</span>
      </div>
      <hr className={styles.hr} />
      <div className={styles.center}>
        <ul className={styles.centerList}>
          <p className={styles.title}>Main</p>
          <li className={styles.li}>
            <DashboardIcon className={styles.icon} />
            <span className={styles.span}>Dashboard</span>
          </li>
          <p className={styles.title}>Lists</p>
          <li className={styles.li}>
            <PersonOutlineOutlinedIcon className={styles.icon} />
            <span className={styles.span}>Users</span>
          </li>
          <li className={styles.li}>
            <Inventory2Icon className={styles.icon} />
            <span className={styles.span}>Products</span>
          </li>
          <li className={styles.li}>
            <CreditCardIcon className={styles.icon} />
            <span className={styles.span}>Orders</span>
          </li>
          <li className={styles.li}>
            <LocalShippingIcon className={styles.icon} />
            <span className={styles.span}>Delivery</span>
          </li>
          <p className={styles.title}>Useful Links</p>
          <li className={styles.li}>
            <AssessmentOutlinedIcon className={styles.icon} />
            <span className={styles.span}>Stats</span>
          </li>
          <li className={styles.li}>
            <NotificationsIcon className={styles.icon} />
            <span className={styles.span}>Notifications</span>
          </li>
          <p className={styles.title}>Service</p>
          <li className={styles.li}>
            <SettingsSystemDaydreamOutlinedIcon className={styles.icon} />
            <span className={styles.span}>System Health</span>
          </li>
          <li className={styles.li}>
            <PsychologyOutlinedIcon className={styles.icon} />
            <span className={styles.span}>Logs</span>
          </li>
          <li className={styles.li}>
            <SettingsApplicationsOutlinedIcon className={styles.icon} />
            <span className={styles.span}>Settings</span>
          </li>
          <p className={styles.title}>User</p>
          <li className={styles.li}>
            <AccountCircleOutlinedIcon className={styles.icon} />
            <span className={styles.span}>Profile</span>
          </li>
          <li className={styles.li}>
            <LogoutOutlinedIcon className={styles.icon} />
            <span className={styles.span}>Logout</span>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.colorOption}></div>
        <div className={styles.colorOption}></div>
      </div>
      SideBar
    </div>
  );
};

export default SideBar;
