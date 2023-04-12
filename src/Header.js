import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderOption from "./HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Widgets from "./Widgets";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  const widgetsOpen = () => <Widgets />;
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3992/3992606.png"
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="./avatar.JPG"
          title={user.displayName}
          onClick={logoutApp}
        />
        <span className="widgetsIcon toggle">
          <HeaderOption Icon={MenuIcon} title="Widgets" onClick={widgetsOpen} />
        </span>
      </div>
    </div>
  );
}

export default Header;
//
