function InfoContainer(props){
    const myStyle = {
        // width: "70%"
        display:"flex",
        flexDirection:"row",
        justifyItem:"space-around",
        alignItems:"center",
        width:"100%"
    }
    return(
        <div style={myStyle} >
            {/* <h3><b>TechStack</b></h3> */}
            <p>{props.tech}</p>
            <a><p>{props.link}</p></a>
        </div>
    )
}

export default InfoContainer;