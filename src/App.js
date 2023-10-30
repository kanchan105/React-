import Play from "./component/Video";
import "./App.css";
import videoDB from "./data/data.js";
import PlayButton from "./component/PlayButton";
import Counter from "./component/counter";
import {useState} from "react"
function App() {
  const[videos,setVideos]=useState(videoDB);
  return (
    <>
      <div className="App">
        <div>
          <button onClick={()=>{
            setVideos([...videos,{title:"AWS",
            views:109000,
            channel:"Puma",
            time:"102 years",
            verified: true,
            type:"laptop"}])
          }}
          > Add Video</button>
        </div>
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
        <div style={{ clear: "both" }}>
         
      
        </div>
        <Counter></Counter>
      </div>
    </>
  );
}
export default App;
