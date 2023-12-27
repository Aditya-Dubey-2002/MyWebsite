import React from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import MasonCard from './mason-card';
import Dp from './intro/dp';
import LoadingSpinner from './loader';

const cardData = [
    {
      bgcolor: '#3D30A2',
      color: 'white',
      component: <Dp />,
      title: 'Aditya Dubey',
      extraComp: true,
    },
    {
      bgcolor: '#B15EFF',
      color: 'white',
      title: 'Education',
      etitle: 'Wanna know where I studied',
      hint: 'Know my academia',
      path: '/education',
    },
    {
      bgcolor: '#FFA33C',
      color: 'white',
      title: 'Skills',
      etitle: 'A never ending list though',
      hint: 'Arrows in my quiver',
      path: '/skills',
    },
    {
      bgcolor: '#FFFB73',
      color: '#141E46',
      title: 'Projects',
      etitle: "Paintings of this little 'Picasso'",
      hint: "That's the mark",
      path: '/projects',
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
      path: '/contact-me',
    },
  ];


function Massonary() {
  const mystyle = {
    // margin: '2.5%',
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

  return (loading?LoadingSpinner:
    <Box sx={{ width: '96%', height:'100%'}} style={mystyle} className="main-box">
      <Masonry columns={{ xs: 2, sm: 3 }} spacing={2}>
        {cardData.map((card, index) => (
          <MasonCard key={index} {...card} />
        ))}
      </Masonry>
    </Box>
  );
}

export default Massonary;
