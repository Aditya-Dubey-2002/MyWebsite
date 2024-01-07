import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import MasonCard from './mason-card';
import Dp from './intro/dp';
import LoadingSpinner from './loader';
import bike from "./static/images/motorbike.png";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from './useWindowsDimensions';

const cardData = [
  {
    bgcolor: '#3D30A2',
    color: 'white',
    component: <Dp size={130} />,
    title: 'Aditya Dubey',
    extraComp: true,
    // videoSrc:videosrc
  },
  {
    bgcolor: '#B15EFF',
    color: 'white',
    title: 'About',
    isrc: bike,
    etitle: 'Wanna know where I studied',
    hint: 'Know my academia',
    path: '/about',
  },
  {
    bgcolor: '#BF3131',
    color: 'white',
    title: 'Portfolio',
    etitle: "Paintings of this little 'Picasso'",
    hint: "That's the mark",
    path: '/projects',
  },
  {
    bgcolor: '#65B741',
    color: 'white',
    title: 'Proficiencies',
    etitle: 'My Skills, Your Solutions.',
    hint: 'Arrows in my quiver',
    path: '/skills',
  },
  {
    bgcolor: '#F99417',
    color: 'white',
    title: 'Blog',
    etitle: 'Thoughts I wander around',
    hint: 'Coming Soon...',
    path: '/blog',
  },
  {
    bgcolor: '#DA0C81',
    color: 'white',
    title: 'Contact Me',
    etitle: "Let's Connect",
    hint: "Don't you wanna connect",
    path: '/contact',
  },
];


function Massonary() {
  const mystyle = {
    marginLeft: '0.5%',
    marginTop: '5vh',
    justifyItems: "center",
    alignItem: "center",
    // height:"95vh"
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., API call) that takes time
    const fetchData = async () => {
      // Your asynchronous operation here
      // Set loading to false when the operation is complete
      setLoading(false);
    };

    fetchData();
  }, []);
  // function handleClick(e) {
  const navigate = useNavigate();
  const routeChange = (e) => {
    const path = cardData[e.key].path;
    console.log(e);
    navigate(path);
  }
  const [great, setGreat] = useState(true);
  const { height, width } = useWindowDimensions();
  console.log(width>425);
  const compo = (width >= 700) ? cardData.map((card, index) => (
    ((<a href={card.path}><MasonCard key={index} {...card}  /></a>))
  )) : cardData.map((card, index) => (
    (<MasonCard key={index} {...card} />)
  ))
  // }
  return (
    loading ? LoadingSpinner :
      <Box sx={{ width: '100%', }} style={mystyle} className="main-box">
        <Masonry columns={{ xs: 1, sm: 3 }} spacing={2}>
          {/* <MasonCard bgcolor="blue"/> */}
          {compo}
        </Masonry>
        {/* <>Yo Yo Honey Singh</> */}
      </Box>

  );
}

export default Massonary;
