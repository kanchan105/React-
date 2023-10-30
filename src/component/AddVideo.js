import "./AddVideo.css";
import { useState } from "react";

function AddVideo(addVideos) {
  const [video, setVideo] = useState({
    channel: "Puma",
    time: "102 years",
    
    
   
  });
  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    console.log(video)
    
  }

  function handleChange(e) {
   
    setVideo({...video,
      [e.target.name] : e.target.value,
      [e.target.type] : e.target.verified
      
  })
    
  }
 
 
 
  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
      />
      <input
        type="text"
        name="type"
        onChange={handleChange}
        placeholder="type"
      />
      <input
        type="text"
        name="verified"
        onChange={handleChange}
        placeholder="verified"
      />
      

      <button
        onClick={handleSubmit}
        // onClick={() => {
        // //   setVideos([
        // //     ...videos,
        // //     {
        // //       title: "AWS",
        // //       views: 109000,
        // //       channel: "Puma",
        // //       time: "102 years",
        // //       verified: true,
        // //       type: "laptop",
        // //     },
        // //   ]);
        //  }}
      >
       
        Add Video
      </button>
    </form>
  );
}

export default AddVideo;
