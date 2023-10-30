import Play from "./component/Video";
import "./App.css";
import videoDB from "./data/data.js";
import PlayButton from "./component/PlayButton";
import AddVideo from "./component/AddVideo.js";
import { useState } from "react";

function App() {
  const [videos, setVideos] = useState(videoDB);
  function addVideos(video) {
    setVideos([
      ...videos,video
      
    ]);
  }
  return (
    <>
      <div className="App"> 
      
          <AddVideo addVideos={addVideos}></AddVideo>
        
        {videos.map((video) => (
          <Play
            title={video.title}
            views={video.views}
            channel={video.channel}
            time={video.time}
            verified={video.verified}
            type={video.type}
          >
            <PlayButton
              onPlay={() => console.log("play")}
              onPause={() => console.log("pause")}
            >
              Play
            </PlayButton>
          </Play>
        ))}
        <div style={{ clear: "both" }}></div>
      </div>
    </>
  );
}
export default App;
