import "./Video.css";

function Play({ title, views, channel, time, verified,type }) {
  return (
    <>
      <div className="container">
        <img
          className="pic"
          src={`https://loremflickr.com/320/240/${type}`}
          alt="Katherine Johnson"
        />

        <div>
          <div className="title">{title}</div>

          <div className="channel">
            {channel}
            {verified &&  "✅" }
          </div>

          <div className="views">
            {views} views <span>.</span> {time}
          </div>
        </div>
      </div>
    </>
  );
}

export default Play;
