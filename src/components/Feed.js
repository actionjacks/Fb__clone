import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  //
  // console.log(posts);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
      {/* post for test */}
      {/* <Post
        profilePic="./avatarChuck.jpg"
        message={"Dobra strona ! Chuck Norris"}
        timestamp={"1400.01.10"}
        username={"Chuck Fck Norris"}
        image={
          "https://images.forwardcdn.com/image/720x/center/images/cropped/istock-470309868-1492797983.jpg"
        }
      /> */}
    </div>
  );
}

export default Feed;
