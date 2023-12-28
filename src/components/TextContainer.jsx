function TextContainer(props) {
    const sty = {
        alignItems:props.side,
        textAlign:props.side,
        // width:"0%"
    }
    return (<div style={sty}>
        <h1>{props.heading}</h1>
        <h3>{props.subheading}</h3>
    </div>)
}

export default TextContainer;