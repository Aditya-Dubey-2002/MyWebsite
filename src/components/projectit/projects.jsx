import React from "react";
import Footer from "../Footer";
import YourNavBar from "../nav-bar";
import { Paper } from "@mui/material";
import StartPage from "../StartPage";

function Projects(props) {
    const mainBx = {
        backgroundColor: props.bgcolor,
        margin: "2.5%",
        color: "black",
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
            <YourNavBar bgcolor={props.bgcolor}/>
            <StartPage />
            <hr />
            <h2>Projects</h2>
            <p>Very imp to go through</p>
        </Paper>
        <Footer />
    </div>)
}

export default Projects;