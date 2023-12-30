import ScrollItem from "../scroll-item";
import "./about.css";
import StartPage from "../StartPage";


function AboutBody() {
    return (<div className="about-box">
        <StartPage />
        <hr/>
        <h2 >Education</h2>
        <ScrollItem side="left" heading="IIT (ISM) Dhanbad" subheading="Dual Degree: B.Tech in Chemical Engineering with M.Tech in Computer Science and Engineering" />
        <ScrollItem side="right" heading="Vidya Bhavan Public School" subheading="An awesome time to remember" />
    </div>
    )
}

export default AboutBody;