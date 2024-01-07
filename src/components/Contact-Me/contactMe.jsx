import React from "react";
import DrawerAppBar from "../nav-bar";
import { FormControl } from "@mui/material";
import ContactForm from "./ContactForm";
import Footer from "../Footer";
import {Paper} from "@mui/material";
import StartPage from "../StartPage";

function ContactMeCard(props) {
    const mainBx = {
        backgroundColor: props.bgcolor,
        margin: "2.5%",
        color: "white",
        padding: "1.5%",
        borderRadius: "5px",
        textAlign: "center",
        // height: "10%",
        overflow: "hidden",
        border: "1px solid #ccc",
        position: "relative"
    }
    return (
        <>
        
        <Paper style={mainBx} elevation={5}>
            <DrawerAppBar bgcolor={props.bgcolor} />
            
            <StartPage first="Let's Connect!" second="Reach out for collaborations, opportunities, or just a tech chat. Excited to hear from you!"/>
            <hr />
            <ContactForm />
        </Paper>
        <Footer />
        </>
    )
}

export default ContactMeCard;