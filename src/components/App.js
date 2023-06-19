import React from "react";
import video from "../data/video.js";
import Buttons from "./Buttons.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <Buttons videoUpvotes={video.upvotes} videoDownvotes={video.downvotes} />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;
