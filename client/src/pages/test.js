import styled from "styled-components";
import AboutNavBar from "../components/NavBar/AboutNavBar";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import Back from "../images/about/BG.png";

import AboutSection from "../components/Sections/AboutSection";
import FounderSection from "../components/Sections/FounderSection";
import TeamSection from "../components/Sections/TeamSection";
import JoinTeamSection from "../components/Sections/JoinTeamSection";


const Section = styled.div`
    width: 100vw;
    height: 4250px;
    display: flex;
    flex-direction: column;
    background: url(${Back}), black;
    background-repeat: no-repeat;
    background-size: contain;
`;

const Wrapper = styled.div`
    display: flex;

`;

const ColumnLeft = styled.div`
    width: 70%;
    height: 75vh;
    float: left;
    
`;

const ColumnRight = styled.div`
    width: 30%;
    height: 45vh;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 180px;
    right: 100px;
    
`;

const TopButton = styled(motion.div)`
    width: 225px;
    height: 55px;
    font-size: 14px;
    font-weight: 500;
    background: white;
    background: linear-gradient(97.87deg, #E30647 -28.9%, #FFAA0A 93.4%);
    margin: 10px 0;
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-shadow: black -1px 2px, black -2px 2px;
`;

const BottomButton = styled(motion.div)`
    width: 225px;
    height: 55px;
    font-size: 14px;
    font-weight: 500;
    background: white;
    background: rgba(0, 0, 0, 0.16);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(22px);
    border-radius: 100px;
    margin: 10px 0;
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-shadow: black -1px 2px, black -2px 2px;
`;

const Title = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Line = styled.div`
    width: 100%;
    height: 12.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-5%, -30%);
    h1{
        color: white;
        font-size: 68px;
        font-weight: 500;
    }
`;

const BottomLine = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-size: 68px;
        font-weight: 500;
        transform: translate(5%, -30%);
    }
`;

const EmptyLine = styled.div`
    width: 100%;
    height: 2.5vh;
`;

const Description = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    h1{
        color: #666666;
        font-size: 18px;
        line-height: 25px;
        width: 30%;
        transform: translate(-20%, -50%);
    }
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
`;

const About = () => {
    return(
        <Section>
            <AboutNavBar />
            <Wrapper>
            <ColumnLeft>
                <Title>
                    <Line><h1>Fortis is Making</h1></Line>
                    <BottomLine><h1>Money Better</h1></BottomLine>
                    <EmptyLine></EmptyLine>
                </Title>
            </ColumnLeft>
            <ColumnRight>
                <LinkS to="movement" smooth={true} duration={1000} spy={true} exact="true"><TopButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>JOIN THE MOVEMENT</TopButton></LinkS>
                <BottomButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>ECOSYSTEM</BottomButton>
                <BottomButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>TEAM</BottomButton>
            </ColumnRight>
            </Wrapper>
            <Description><h1>Amet a volutpat donec nisl, in turpis ridiculus tristique. Sed magna massa, cum scelerisque. Dolor sit abetus achtum dolastro umago dobak lumbro sol abestro.</h1></Description>
            <Empty></Empty>
            <AboutSection />
            <Empty></Empty>
            <Empty></Empty>
            <FounderSection />
            <Empty></Empty>
            <Empty></Empty>
            <TeamSection />
            <Empty></Empty>
            <JoinTeamSection />
        </Section>
    )
}


export default About;