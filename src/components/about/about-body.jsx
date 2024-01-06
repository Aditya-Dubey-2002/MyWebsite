import ScrollItem from "../scroll-item";
import "./about.css";
import StartPage from "../StartPage";


function AboutBody() {
    return (<div className="about-box">
        <StartPage first="Hey, I'm Aditya Dubey," second="A tech enthusiast currently diving into the realms of Computer Science and Chemical Engineering at IIT. From coding adventures to winning challenges, I'm all about tech with a dash of creativity. Join me in shaping a future where every line of code contributes to meaningful change!
        "/>
        <hr/>
        <h2 >Education</h2>
        <ScrollItem side="left" heading="IIT (ISM) Dhanbad" subheading="Dual Degree: B.Tech in Chemical Engineering with M.Tech in Computer Science and Engineering" />
        <ScrollItem side="right" heading="Vidya Bhavan Public School" subheading="An awesome time to remember" />
    </div>
    )
}

export default AboutBody;