import React from "react";

function RectangleImage(props) {
  const imgStyle = {
    border: "5px solid white", // Set the border size and color
    borderRadius: "10px",
    // width: "100%", // Ensure the image takes the full width of the container
    // width: "40vh",
    maxHeight: "100%",
    maxWidth:"100%" // Maintain the aspect ratio
  };

  const conStyle = {
    // You can add container styles if needed
    maxWidth:"50vh"
  };

  return (
    <div style={conStyle}>
      <img src={props.src} alt="Rectangle" className="image-rec" style={imgStyle} />
    </div>
  );
}

export default RectangleImage;
