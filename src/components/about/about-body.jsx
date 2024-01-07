import ScrollItem from "../scrollItems/scroll-item";
import "./about.css";
import StartPage from "../StartPage";
import school from '../static/images/school.jpg';



function AboutBody() {
    const aboutEducationData = [
        {
            side: "left",
            heading: "Indian Institute of Technology (ISM), Dhanbad",
            subheading: "Dual Degree—M.Tech in CSE (CGPA of 8.55)—B.Tech in Chemical Engineering (CGPA of 8.24)",
            brief: "Embarked on an exhilarating academic journey at IIT (ISM) Dhanbad, a crucible of knowledge and innovation. Nurturing my tech prowess, fostering collaboration, and sculpting a holistic understanding of Computer Science and Chemical Engineering. Each day, I explore the corridors of intellect, shaping dreams into tangible solutions."
        },
        {
            side: "right",
            heading: "Vidya Bhavan Public School, Gwalior",
            subheading: "Senior Secondary Education (95.6 per cent)",
            imgsrc: school,
            brief: "Where my educational odyssey began – Vidya Bhavan Public School, Gwalior, the birthplace of inquisitive minds and spontaneous laughter. From navigating textbooks to navigating life, it's been a journey of growing up, goofing up, and embracing the joy of discovery. Cheers to the good old days of endless questions and timeless friendships!"
        }
    ];

    return (<div className="about-box">
        <StartPage first="Hey, I'm Aditya Dubey," second="A tech enthusiast currently diving into the realms of Computer Science and Chemical Engineering at IIT. From coding adventures to winning challenges, I'm all about tech with a dash of creativity. Join me in shaping a future where every line of code contributes to meaningful change!
        "/>
        <hr />
        <h2 className="page-heading">Education</h2>
        {aboutEducationData.map((ed, key) => (
            <ScrollItem index={key} {...ed} />
        ))}
    </div>
    )
}

export default AboutBody;