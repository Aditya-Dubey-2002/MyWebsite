import React from "react";
import Footer from "../Footer";
import YourNavBar from "../nav-bar";
import { Paper } from "@mui/material";
import StartPage from "../StartPage";
import ScrollItem from "../scrollItems/scroll-item";
import './projects.css'



function Projects(props) {
    const workExperienceData = [
        {
            side: "left",
            heading: "Front-End Developer",
            subheading: "SellerSetu Pvt. Ltd.",
            brief: "Utilized React for enhancing user experience and feature additions, bug fixes. Elevated UI/UX through user-centric design.",
            responsibility: "Collaborated closely with cross-functional teams, contributing to innovative solutions and meeting project goals.",
            tech: "React.js, HTML/CSS, JavaScript, Bootstrap",
            link: "LinkedIn Profile" // Replace with the actual link if available
        },
        {
            side: "left",
            heading: "Web Developer",
            subheading: "Department of Chemical Engineering",
            brief: "Led the development and maintenance of a fully responsive website for the prestigious N0ET-22 Conference.",
            responsibility: "Successfully managed the site for posting vital updates and information related to the conference, ensuring seamless communication with attendees.",
            tech: "React, HTML, CSS, JavaScript, Bootstrap",
            link: "LinkedIn Profile" // Replace with the actual link if available
        },
        // Add more work experience entries as needed
    ];
    
    const projectData = [
        {
            side: "right",
            heading: "MySpace",
            subheading: "Connect,Share and Manage Yourself",
            brief: "MySpace is a personalized website for tracking daily activities, featuring personal blogs and a comprehensive to-do list. It emphasizes user engagement and privacy.",
            implementation: "Implemented with a user-centric approach, featuring personalized public profiles, blog encryption for sensitive information, and confidential communications.",
            tech: "Node.js, Express, MongoDB, React.js",
            link: "GitHub Link" // Replace with the actual link if available
        },
        {
            side: "right",
            heading: "How's the Weather?",
            subheading: "Know the if you need an Umbrella or Sunglasses",
            brief: "How's the Weather? is a user-friendly website providing real-time weather information for any city based on its name or geographical coordinates.",
            implementation: "Developed with a focus on simplicity and functionality, offering real-time weather data retrieval using the OpenWeatherMap API.",
            tech: "Node.js, EJS, MongoDB, JavaScript",
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
        <Paper elevation={5} style={mainBx} className="mnbx">
            <YourNavBar bgcolor={props.bgcolor} />
            <StartPage first="Explore my journey," second="through impactful projects and enriching work experiences, where passion meets proficiency in every endeavor." />
            <hr />
            <div className="sub-page">
                <h2 className="page-heading">Work Experience</h2>
                {workExperienceData.map((project, key) => (
                    <ScrollItem index={key} {...project} />
                ))}
            </div>
            <hr />
            <div >
            <h2 className="page-heading">Personal Projects</h2>
                {projectData.map((project, key) => (
                    <ScrollItem index={key} {...project} />
                ))}
            </div>
        </Paper>
        <Footer />
    </div>)
}

export default Projects;