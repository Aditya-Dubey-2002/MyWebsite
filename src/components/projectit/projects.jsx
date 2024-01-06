import React from "react";
import Footer from "../Footer";
import YourNavBar from "../nav-bar";
import { Paper } from "@mui/material";
import StartPage from "../StartPage";
import ScrollItem from "../scroll-item";



function Projects(props) {
    const projectData = [
        {
            side: "left",
            heading: "MySpace",
            subheading: "Connect,Share and Manage Yourself",
            brief: "MySpace is a personalized website for tracking daily activities, featuring personal blogs and a comprehensive to-do list. It emphasizes user engagement and privacy.",
            implementation: "Implemented with a user-centric approach, featuring personalized public profiles, blog encryption for sensitive information, and confidential communications.",
            tech: "Tech Stack: Node.js, Express, MongoDB, React.js",
            link: "GitHub Link" // Replace with the actual link if available
        },
        {
            side: "right",
            heading: "How's the Weather?",
            subheading: "Know the if you need an Umbrella or Sunglasses",
            brief: "How's the Weather? is a user-friendly website providing real-time weather information for any city based on its name or geographical coordinates.",
            implementation: "Developed with a focus on simplicity and functionality, offering real-time weather data retrieval using the OpenWeatherMap API.",
            tech: "Tech Stack: Node.js, EJS, MongoDB, JavaScript",
            link: "GitHub Link" // Replace with the actual link if available
        }
    ];
    const mainBx = {
        backgroundColor: props.bgcolor,
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
    return (<div>
        <Paper elevation={5} style={mainBx}>
            <YourNavBar bgcolor={props.bgcolor} />
            <StartPage first="Discover my tech journey through projects" second="—where innovation meets code, turning ideas into impactful solutions" />
            <hr />
            <h2>Projects</h2>
            <p>Very imp to go through</p>
            {/* {cardData.map((card, index) => (
                <MasonCard key={index} {...card} />
            ))} */}
            {projectData.map((project, key) => (
                <ScrollItem index={key} {...project} />
            ))}
            {/* <ScrollItem side='left' heading="MySpace" subheading="Connect,Share and Manage Yourself" brief />
            <ScrollItem side='right' heading="What's the Weather?" subheading="Know the if you need an Umbrella or Sunglasses" brief /> */}
        </Paper>
        <Footer />
    </div>)
}

export default Projects;