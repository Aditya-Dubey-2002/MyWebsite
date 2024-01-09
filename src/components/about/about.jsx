import React, { useState } from "react";
import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EdButtons from "./ed-buttons";
import { Link } from "react-router-dom";
// import insti from '..static/images/insti.jpeg';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import DrawerAppBar from "../nav-bar";
import AboutBody from "./about-body";
import Footer from "../Footer";
import { Paper } from "@mui/material";

function About(props) {
    const [over, setOver] = useState(false);
    function onOver() {
        setOver(true);
    }
    function onOut() {
        setOver(false)
    }
    function clicked() {
        setOver(!over);
    }
    const insti = '../static/images/insti.jpeg'
    const mainBx = {
        backgroundColor: '#B15EFF',
        margin: "2.5%",
        color: "white",
        padding: "1.5%",
        borderRadius: "5px",
        textAlign: "center",
        height: "10%",
        overflow: "hidden",
        border: "1px solid #ccc",
        position: "relative"
    }
    return (
        <>
            <Paper elevation={5} style={mainBx} className="mnbx">
                <DrawerAppBar bgcolor={props.bgcolor} />
                <AboutBody className="a-body" />
            </Paper>
            <Footer/>
        </>


        // <Box onMouseOver={onOver} onMouseOut={onOut}>

        //     <Card >
        //         <CardActionArea>
        //             {/* <CardMedia
        //                 component="img"
        //                 height="140"
        //                 image={insti}
        //                 alt="green iguana"
        //             /> */}
        //             <CardContent>
        //                 <Typography gutterBottom variant="h5" component="div">
        //                     Lizard
        //                 </Typography>
        //                 <Typography variant="body2" color="text.secondary">
        //                     <p>Education</p>
        //     {over?<EdButtons/>:<></>}
        //                 </Typography>
        //             </CardContent>
        //         </CardActionArea>
        //     </Card>
        // </Box>
    )
}

export default About;