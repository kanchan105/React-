import {useState} from "react"
function Counter()
{ const [number,setNumber]=useState(0);
  function handleClick()
  {
  setNumber(number+1);
  console.log(number)
  }
  return(
    <>
    <h1 style={{color:"red"}}>{number}</h1>
    <button onClick={handleClick}></button>
    </>
  )
     
   
}

export default Counter