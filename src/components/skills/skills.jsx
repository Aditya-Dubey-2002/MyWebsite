import { useState } from "react";
import React from "react";
import YourNavBar from "../nav-bar";
import Footer from "../Footer";
import { Paper } from "@mui/material";
import StartPage from "../StartPage";
import IconLabelTabs from "./skills-tabs";
import Compi from "./Compi";

function Skills(props) {
    const mainBx = {
        backgroundColor: props.bgcolor,
        margin: "2.5%",
        color: "white",
        padding: "1.5%",
        borderRadius: "5px",
        textAlign: "center",
        alignItems: 'center',
        height: "10%",
        overflow: "hidden",
        border: "1px solid #ccc",
        position: "relative"
    }
    return (<div >
        <Paper elevation={5} style={mainBx} className="mnbx">
            <YourNavBar />
            <StartPage first="A tech maestro," second=" proficient in C++, HTML/CSS, JavaScript, React, competitive programming, DSA, and web development, shaping innovative solutions with a dash of creativity. Scroll to know more" />
            <hr />
            <div className="sub-page">
                <h2 className="page-heading">
                    Technical Skills
                </h2>
                <IconLabelTabs />
            </div>
            <hr />
            <div className="sub-page">
                <h2 className="page-heading">
                    Competitive Programming
                </h2>
                <Compi />
            </div>
        </Paper>
        <Footer />
    </div>)
}

export default Skills;