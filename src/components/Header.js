import React from "react";
import "./Header.css";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import LayersClearIcon from "@material-ui/icons/LayersClear";
import PanToolIcon from "@material-ui/icons/PanTool";
import { useStateValue } from "./StateProvider";
//
function Header() {
  //bieemy z providera informacje o logowaniu
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img src="logo.jpeg" alt="" />
        <div className="header__input">
          <YoutubeSearchedForIcon />
          <input type="text" placeholder="Proszę przyjechać na Facebooka!" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option">
          <HomeWorkIcon className="header__option--active" fontSize="large" />
        </div>
        <div className="header__option">
          <GolfCourseIcon fontSize="large" />
        </div>
        <div className="header__option">
          <YouTubeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <AddShoppingCartIcon fontSize="large" />
        </div>
        <div className="header__option">
          <EmojiPeopleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <DirectionsRunIcon />
        </IconButton>
        <IconButton>
          <LayersClearIcon />
        </IconButton>
        <IconButton>
          <PanToolIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
