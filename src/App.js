import Play from "./component/Video";
import "./App.css"

function App() {
   let obj={
    title:"React js", views:"1000",  Channel:"Hotstar", time:"1 years ago"
   }
  return (
    <>
     <div className="App">
     <Play{...obj} ></Play>
     <div>
     <Play title="Mongodb"  views="5000" Channel="amazon" time="4 years ago"></Play>
     </div>
     </div>
     </>
   
  );
}
export default App;
