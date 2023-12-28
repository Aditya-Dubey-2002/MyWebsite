import { useState } from "react";
import { Box } from "@mui/material";
import { Fab } from "@mui/material";
import EdItem from "./education-item";
import { Fade } from "@mui/material";

function EdButtons() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    function show01(e) {
        setShow1(!show1);
    }
    function show02() {
        setShow2(!show2);
    }
    return <Box > 
        <Fab onClick={show01} >University</Fab>
        <Fade
            // in={show1}
        >
                    {show1 ? <EdItem title="Dual Degree at IIT (ISM) Dhanbad" subtitle="B.Tech in Chemical Engineeing & M.Tech in Computer Science and Engineering" /> : <></>}

        </Fade>
        <Fab onClick={show02}>Schooling</Fab>
        {show2 ? <EdItem title="Vidya Bhavan Public School" subtitle="12th Standard : 95.6%, 10th Standard: 92.6%" /> : <></>}
    </Box>
}

export default EdButtons;