import React from 'react';
import { Container } from '@mui/material';
import RectangleImage from './RectangleImage';
import TextContainer from './TextContainer';
import insti from "./static/images/insti.jpeg";
import {Fab}  from '@mui/material';
import { useState } from 'react';
import InfoContainer from './InfoContainer';

function ScrollItem(props) {
  const mystyle = {
    display: 'flex',
    flexDirection: props.side === 'left' ? 'row' : 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between', // Add this line for equal spacing
    marginTop: '2%',
    color: 'white',
  };
  const dataStyle = {
    textAlign : props.side,
    alignItems: props.side
  }
  const [fabText,setFabText] = useState("Read More");

  function handleClick(){
    const t = "Read More"===fabText? "Read Less" : "Read More";
    setFabText(t);
  }
  const moreInfo = "Read Less"===fabText ? <InfoContainer brief={props.brief} implementation={props.implementation} tech={props.tech} link={props.link}/> : <></>;
  return (
    <Container elevation={3} style={mystyle}>
      <div className='dataStyle'>
      <TextContainer side={props.side} heading={props.heading} subheading={props.subheading} />
      {moreInfo}
      <Fab onClick={handleClick}>{fabText}</Fab>
      
      </div>
      <RectangleImage src={insti} />
    </Container>
  );
}

export default ScrollItem;
