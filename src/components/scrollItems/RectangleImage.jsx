import React from "react";
import useWindowDimensions from "../useWindowsDimensions";

function RectangleImage(props) {
  const {height,width} = useWindowDimensions();
  const imgStyle = {
    border: "5px solid white", // Set the border size and color
    borderRadius: "10px",
    // width: "100%", // Ensure the image takes the full width of the container
    // width: "40vh",
    height: "100%",
    width:"100%" // Maintain the aspect ratio
  };

  const conStyle = {
    // You can add container styles if needed
    maxWidth:"100vh",
    minWidth:width>768?"90vh":"20vh"
  };

  return (
    <div style={conStyle}>
      <img src={props.src} alt="Rectangle" className="image-rec" style={imgStyle} />
    </div>
  );
}

export default RectangleImage;
