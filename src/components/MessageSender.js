import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { useStateValue } from "./StateProvider";
import db from "../firebase";
import firebase from "firebase";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const [imageUrl, setImagetUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //dodawanie do bazydanych posta
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });
    setInput("");
    setImagetUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`co tam? ${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImagetUrl(e.target.value)}
            placeholder="obrazek"
          />
          <button type="submit" onClick={handleSubmit}>
            hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <PlayCircleFilledIcon style={{ color: "red" }} />
          <h3>Video</h3>
        </div>
        <div className="messageSender__option">
          <AddPhotoAlternateIcon style={{ color: "red" }} />
          <h3>obrazek / Wideo</h3>
        </div>
        <div className="messageSender__option">
          <EmojiEmotionsIcon style={{ color: "green" }} />
          <h3>co czujesz dziubku ?</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
