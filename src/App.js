import Play from "./component/Video";
import "./App.css"
import videos from "./data/data.js"
import PlayButton from "./component/PlayButton";

function App() {
   
  return (
    <>
     <div className="App">
     <div>Videos</div>
     {
      videos.map(video=><Play title={video.title}
      views={video.views}
      channel={video.channel}
       time={video.time}
       verified={video.verified}
       type={video.type}></Play>)
     }
     <div style={{clear:'both'}}>
     <PlayButton></PlayButton>
     </div>
     </div>
     
     </>
   
  );
}
export default App;
