function InfoContainer(props){
    const myStyle = {
        // width: "70%"
    }
    return(
        <div style={myStyle} >
            <h3 ><b>Brief</b></h3>
            <p>{props.brief}</p>
            <h3><b>Implementation</b></h3>
            <p>{props.implementation}</p>
            <h3><b>TechStack</b></h3>
            <p>{props.tech}</p>
            <a><p>{props.link}</p></a>
        </div>
    )
}

export default InfoContainer;