import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import MasonCard from './mason-card';
import Dp from './intro/dp';
import LoadingSpinner from './loader';
import bike from "./static/images/motorbike.png";

const cardData = [
  {
    bgcolor: '#3D30A2',
    color: 'white',
    component: <Dp size={130}/>,
    title: 'Aditya Dubey',
    extraComp: true,
    // videoSrc:videosrc
  },
  {
    bgcolor: '#B15EFF',
    color: 'white',
    title: 'About',
    isrc : bike,
    etitle: 'Wanna know where I studied',
    hint: 'Know my academia',
    path: '/about',
  },
  {
    bgcolor: '#BF3131',
    color: 'white',
    title: 'Projects',
    etitle: "Paintings of this little 'Picasso'",
    hint: "That's the mark",
    path: '/projects',
  },
  {
    bgcolor: '#65B741',
    color: 'white',
    title: 'Skills',
    etitle: 'A never ending list though',
    hint: 'Arrows in my quiver',
    path: '/skills',
  },
  {
    bgcolor: '#3D30A2',
    color: 'white',
    title: 'Blog',
    etitle: 'Thoughts I wander around',
    hint: 'I write sometimes',
    path: '/blog',
  },
  {
    bgcolor: '#B15EFF',
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
    justifyItems :"center",
    alignItem:"center",
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

  return (
    loading?LoadingSpinner:
    <Box sx={{ width: '100%', }} style={mystyle} className="main-box">
      <Masonry columns={{ xs: 1, sm: 3 }} spacing={2}>
      {/* <MasonCard bgcolor="blue"/> */}
        {cardData.map((card, index) => (
          <MasonCard key={index} {...card} />
        ))}
      </Masonry>
      {/* <>Yo Yo Honey Singh</> */}
    </Box>

  );
}

export default Massonary;
