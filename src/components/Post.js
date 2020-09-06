import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PanToolIcon from "@material-ui/icons/PanTool";
import WcIcon from "@material-ui/icons/Wc";
import TouchAppIcon from "@material-ui/icons/TouchApp";

function Post({ profilePic, image, username, timestamp, message }) {
  console.log(profilePic, message);
  const [likes, setLikes] = useState(0);
  const LikesHandle = () => {
    setLikes(likes + 1);
  };
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbDownIcon />
          <p onClick={LikesHandle}>{`daj Lajk ${likes}`}</p>
        </div>
        <div className="post__option">
          <ExitToAppIcon />
          <p>Komentuj</p>
        </div>
        <div className="post__option">
          <PanToolIcon />
          <p>podziel sie </p>
        </div>
        <div className="post__option">
          <WcIcon />
          <TouchAppIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
