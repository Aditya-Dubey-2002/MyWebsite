import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import insti from "./static/images/insti.jpeg"
import { Button, CardActionArea, CardActions,Container } from '@mui/material';
// import {Box} from '@mui/material';
function ScrollItem(props) {
  const mystyle = {
    // marginLeft: ((props.side === "left") ? "5%" :"45%"),
    // padding: "4px",
    // margin: "10px",
    // backgroundColor: "black",
    // color :"white"
}
return <Container style={mystyle} maxWidth="35">
<Card sx={{ maxWidth: 425 }}  >
  <CardActionArea>
    <CardMedia
      component="img"
      height="140"
      image={insti}
      alt="IIT ISM"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.content}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
    </CardActions>
  </CardActionArea>
</Card>
</Container>
}

export default ScrollItem;