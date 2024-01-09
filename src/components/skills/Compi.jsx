import data from "./Data";
import { Grid } from "@mui/material";
import CompiCard from "./CompiCard";

function Compi() {
    const cp = data[4].skills;
    return (<div style={{height:"100%"}}>
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing = {5}
        >
            {/* <Grid item> */}
                {cp.map((site, index) => (
                    <CompiCard key={index} {...site} />
                ))}
            {/* </Grid> */}
        </Grid>
    </div>)
}

export default Compi;