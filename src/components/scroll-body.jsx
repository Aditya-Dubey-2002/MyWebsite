import React, { useEffect, useState } from "react";
import ScrollItem from "./scroll-item";
import { Zoom } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function ScrollBody(props) {
    const [checked,setChecked] = useState(props.check);
    const doc = <ScrollItem title="Education" content="Dual Degree in CSE and ChemEn" side="right" />
    // function doc(){
    //     return checked?:<div>Hello</div>;
    // }
    return (
    <Timeline position="alternate-reverse" sx={"30px"} >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Education</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Projects</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Skills</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>More about me!</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
   
}

export default ScrollBody;