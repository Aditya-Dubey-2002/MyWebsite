function InfoContainer(props){
    const myStyle = {
        alignItems:props.side,
        textAlign:props.side,
    }
    return(
        <div style={myStyle}>
            <h3><b>Brief</b></h3>
            <p>{props.brief}</p>
            <h3><b>Implementation</b></h3>
            <p>{props.implementation}</p>
            <h3><b>TechStack</b></h3>
            <p>{props.tech}</p>
            <h3><b>Link</b></h3>
            <p>{props.link}</p>
        </div>
    )
}

export default InfoContainer;