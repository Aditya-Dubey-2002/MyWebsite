import React from "react";
import "./dp.css";
import Avatar from '@mui/material/Avatar';
import img from '../static/images/avatar/dp.jpg'
function Dp(props) {
    console.log(props.size);
    const sizes = { width: (props.size), height: (props.size) };
    return (
        <div className="dp">
            <Avatar alt="Aditya Dubey" src={img} sx={{ width: 130, height: 130 }} className="avatar" />
        </div>
    )
}

export default Dp;