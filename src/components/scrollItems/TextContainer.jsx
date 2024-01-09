function TextContainer(props) {
    const sty = {
        alignItems: props.side,
        textAlign: props.side,
        // width:"20vh"
    }
    return (<div style={sty}>
        <h1>{props.heading}</h1>
        <h3>{props.subheading}</h3>
        {/* <h3 ><b>Brief</b></h3> */}
        <p>{props.brief}</p>
        {/* <h3><b>Implementation</b></h3> */}
        <p>{props.implementation}</p>
    </div>)
}

export default TextContainer;