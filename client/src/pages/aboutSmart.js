import styled from "styled-components";
import AboutSmartNavBar from "../components/NavBar/AboutSmartNavBar";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";

import HeroAbout from "../components/Sections/HeroAbout";
import SmartAbout from "../components/Sections/SmartAbout";
import SmartFounder from "../components/Sections/SmartFounder";
import SmartTeam from "../components/Sections/SmartTeam";

import Back from "../images/about/AboutSmartBG.png";



const Section = styled.div`
    width: 100vw;
    height: 3050px;
    display: flex;
    flex-direction: column;
    background: url(${Back}), black;
    background-size: contain;
    background-repeat: no-repeat;
`;



const AboutSmart = () => {
    return(
        <>
        <Section>
            <AboutSmartNavBar />
            <HeroAbout />
            <SmartAbout />
            <SmartFounder />
        </Section>
        <SmartTeam />
        </>
    )
}

export default AboutSmart;