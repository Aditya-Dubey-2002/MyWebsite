import { Paper } from "@mui/material"

function CompiCard(props) {
    const cardStyle = {
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        justifyItems: "center",
        padding:"5px",
        textDecoration: "none"
    }
    return (<Paper elevation={10}>
        <a href={props.link} style={{textDecoration:"none"}}>
            <div style={cardStyle}>
                {props.icon}
                <h3>{props.name}</h3>
                <h3>{props.handle}</h3>
                <h3>Highest Rating : {props.rating}</h3>
                <h3>Current Rating : {props.curRating}</h3>
                <h3>Problems Solved : {props.problems}</h3>
            </div>
        </a>
    </Paper>)
}

export default CompiCard;