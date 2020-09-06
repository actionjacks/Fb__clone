import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story profileSrc="./avatar1.jpg" image="./meem1.jpg" title="Chuck" />
      <Story profileSrc="./avatar2.jpg" image="./meem2.jpg" title="King" />
      <Story profileSrc="./avatar3.jpg" image="./meem3.png" title="Piesel" />
      <Story profileSrc="./avatar4.jpg" image="./meem4.jpg" title="Sonic" />
    </div>
  );
}

export default StoryReel;
