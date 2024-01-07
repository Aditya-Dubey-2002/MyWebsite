import React from 'react';
import { Container } from '@mui/material';
import RectangleImage from './RectangleImage.jsx';
import TextContainer from './TextContainer.jsx';
import insti from "../static/images/insti.jpeg";
import {Fab}  from '@mui/material';
import { useState } from 'react';
import InfoContainer from './InfoContainer.jsx';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './scroll-item.css'

function ScrollItem(props) {
  const mystyle = {
    display: 'flex',
    flexDirection: props.side === 'left' ? 'row' : 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between', // Add this line for equal spacing
    marginBottom: '2%',
    marginTop: '4%',
    color: 'white',
  };
  const dataStyle = {
    textAlign : props.side,
    // alignItems: props.side
  }
  const [clicked,setClicked] = useState(false);

  function handleClick(){
    const t = !clicked? <RemoveIcon/ > : <KeyboardArrowDownIcon />;
    setClicked(!clicked);
  }
  const moreInfo = (clicked)&&(props.brief) ? <InfoContainer brief={props.brief} implementation={props.implementation} tech={props.tech} link={props.link}/> : <></>;
  return (
    <Container elevation={3} style={mystyle} >
      <div style={dataStyle} >
      <TextContainer side={props.side} heading={props.heading} subheading={props.subheading} />
      <div className={`scroll-text-container ${!clicked ? 'hidden' : ''}`}>{moreInfo}</div>
      {props.brief?<Fab onClick={handleClick} size="small">{!clicked?<KeyboardArrowDownIcon/>:<RemoveIcon/>}</Fab>:<></>}
      </div>
      <RectangleImage src={props.imgsrc?props.imgsrc:insti} />
    </Container>
  );
}

export default ScrollItem;
