import React from 'react';
import { Container } from '@mui/material';
import RectangleImage from './RectangleImage.jsx';
import TextContainer from './TextContainer.jsx';
import insti from "../static/images/insti.jpeg";
import { Fab } from '@mui/material';
import { useState } from 'react';
import InfoContainer from './InfoContainer.jsx';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './scroll-item.css';
import useWindowDimensions from '../useWindowsDimensions.jsx';

function ScrollItem(props) {
  const {height,width} = useWindowDimensions();
  const mystyle = {
    display: 'flex',
    flexDirection: props.side === 'left' ? 'row' : 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between', // Add this line for equal spacing
    marginBottom: '2%',
    marginTop: '4%',
    color: 'white',
  };
  const itemStyle = {
    display:"flex",
    flexDirection:width>768?(props.side==="left"?"row":"row-reverse"):"column",
    justifyContent:"space-around",
    width:"100%"
  }
  const dataStyle = {
    textAlign: "left",
    // wordBreak:"break-even"
    // width:"20%"
    // alignItems: props.side
  }
  const dataStyle2 = {
    textAlign: "left",
    // width:"80%"
  }
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    const t = !clicked ? <RemoveIcon /> : <KeyboardArrowDownIcon />;
    setClicked(!clicked);
  }
  const moreInfo =  <InfoContainer  tech={props.tech} link={props.link} />;
  return (
    <Container elevation={3} style={mystyle} >
    
      <div style={itemStyle}>
      {/* <h1>{props.heading}</h1> */}
        <div style={dataStyle} >
          <TextContainer side={props.side} heading={props.heading} subheading={props.subheading} brief={props.brief} implementation={props.implementation}/>
          {/* {props.brief ? <Fab onClick={handleClick} size="small">{!clicked ? <KeyboardArrowDownIcon /> : <RemoveIcon />}</Fab> : <></>} */}
        </div>
        <div style={dataStyle2}>
          <RectangleImage src={props.imgsrc ? props.imgsrc : insti} />
          <div >{moreInfo}</div>
        </div>
      </div>
    </Container>
  );
}

export default ScrollItem;
