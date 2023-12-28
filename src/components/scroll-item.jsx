import React from 'react';
import { Container } from '@mui/material';
import RectangleImage from './RectangleImage';
import TextContainer from './TextContainer';
import insti from "./static/images/insti.jpeg"

function ScrollItem(props) {
  const mystyle = {
    display: 'flex',
    flexDirection: props.side === 'left' ? 'row' : 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between', // Add this line for equal spacing
    marginTop: '2%',
    color: 'white',
  };

  return (
    <Container elevation={3} style={mystyle}>
      <TextContainer side={props.side} heading={props.heading} subheading={props.subheading} />
      <RectangleImage src={insti} />
    </Container>
  );
}

export default ScrollItem;
