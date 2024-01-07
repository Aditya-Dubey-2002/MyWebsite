import Star from "@mui/icons-material/Star";
import StarHalf from "@mui/icons-material/StarHalf";
import { pink,yellow } from "@mui/material/colors";
function Rating(props){
    const val = props.stars;
    if(val==5){
        return <><Star sx={{ color: yellow }}/><Star sx={{ color: yellow }}/><Star sx={{ color: yellow }}/><Star sx={{ color: yellow }}/><Star sx={{ color: yellow }}/></>
    }
    else if(val==4){
        return <><Star sx={{ color: yellow }}/><Star sx={{ color: yellow }}/><Star sx={{ color: yellow }}/><Star sx={{ color: yellow }}/></>
    }
    else if(val==3){
        return <><Star sx={{ color: yellow }}/><Star sx={{ color: yellow }}/><Star sx={{ color: yellow }}/></>
    }
    else if(val==2){
        return <><Star sx={{ color: yellow }}/><Star sx={{ color: yellow }}/></>
    }
    else if(val==1){
        return <><Star sx={{ color: yellow }}/></>
    }
}
export default Rating;