import styled from "styled-components";
import AboutNavBar from "../components/NavBar/AboutNavBar";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import Back from "../images/about/BG.png";

import AboutSection from "../components/Sections/AboutSection";
import FounderSection from "../components/Sections/FounderSection";
import TeamSection from "../components/Sections/TeamSection";
import JoinTeamSection from "../components/Sections/JoinTeamSection";
import Footer from "../components/Sections/Footer";
import {TopButton, BottomButton} from "../components/Sections/Elements";


const Section = styled.div`
    width: 100vw;
    height: 3790px;
    display: flex;
    flex-direction: column;
    background: url(${Back}), black;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
`;



const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
`;

const EmptyRow = styled.div`
    width: 100%;
    height: 200px;
`;

const ColumnLeft = styled.div`
    width: 70%;
    height: 475px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const TopTitle = styled.div`
    width: 60%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 78px;
    color: white;
    font-weight: 500;
`;

const BottomTitle = styled.div`
    width: 60%;
    height: 15%;
    display: flex;
    align-items: center;
    h1{
        font-size: 78px;
        color: white;
        font-weight: 500;
        margin-left: auto;
    }
`;

const Desc = styled.div`
    width: 40%;
    height: 55%;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: white;
    font-weight: 200;
    margin-left: auto;
    margin-right: 100px;
`;

const ColumnRight = styled.div`
    width: 30%;
    height: 475px;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-top: 50px;
`;


const Empty = styled.div`
    width: 100%;
    height: 10vh;
`;

const SecondEmpty = styled.div`
    width: 100%;
    height: 100px;
`;

const About = () => {
    return(
        <>
        <Section>
            <AboutNavBar />
            <EmptyRow></EmptyRow>
            <Wrapper>
            <ColumnLeft>
                <TopTitle>Fortis is Making</TopTitle>
                <BottomTitle><h1>Money Better</h1></BottomTitle>
                <Desc>We’re working to make Fortis secure and transparent, so that you feel safe knowing that your identity and money are protected. Every aspect of Fortis has been engineered to solve the most pressing cryptocurrency issues. Find out how below. </Desc>
            </ColumnLeft>
            <ColumnRight>
                <LinkS to="movement" smooth={true} duration={1000} spy={true} exact="true"><TopButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>JOIN THE MOVEMENT</TopButton></LinkS>
                <BottomButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>ECOSYSTEM</BottomButton>
                <BottomButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>TEAM</BottomButton>
            </ColumnRight>
            </Wrapper>
            <AboutSection />
            <SecondEmpty />
            <FounderSection />
            
            <Empty></Empty>
            <TeamSection />
            <Empty></Empty>
            <JoinTeamSection />
        </Section>
        <Footer />
        </>
    )
}


export default About;