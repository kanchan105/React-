import './Video.css';

function Play({title,views,channel,time}) {
  return (
    <> 
    <div className="container">
      <img className="pic"src="https://loremflickr.com/320/240/flower" alt="Katherine Johnson" />
     
      <div>
      <div className="title" >{title}</div>
      <div className="channel">{channel}✅</div>
      <div className="views">{views} views <span>.</span> {time}</div>
      </div>
      </div>
    </>
  );
}

export default Play;
