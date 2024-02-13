import { Link } from "react-router-dom";
const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
        </Link>
    </div>
)

const contentRender = { 
    1: (
        <h1 className="sm-text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-">Hi, Mara Parmeshwari ji❤️❤️❤️❤️<span className="font-semifold">Pehchan Kon?</span><br/>Jokes apart tu maja le aani😁😁😁😁</h1>
    ),
    2: (
        <InfoBox 
            text="Chal Taru Nanpan joiye pehla aapde😁😘"
            link="/childhood"
            btnText="Ahiya click Kar"
        />
    ),
    3: (
        <InfoBox 
            text="Hu aavu photos ma?🤣😂 chal aapda moments joisu ave?😁😁❤️❤️"
            link="/ustogether"
            btnText="Jovu Che?"
        />
    ),
    4: (
        <InfoBox 
            text="Vaato pan thase mara sathe because aa sidhu aapda email ID par redirect karse jenu login khali aapdi pase hase😁😁❤️❤️"
            link="/alwaystogether"
            btnText="chal gossip kariye😂😂😂🤣🤣"
        />
    ),
}
const HomeInfo = ({ currentStage }) => {
  return contentRender[currentStage] || null;
}

export default HomeInfo
