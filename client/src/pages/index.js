import styled from "styled-components";
import NavBar from "../components/NavBar";
import SmartNavBar from "../components/NavBar/SmartNavBar";
import {motion} from "framer-motion";
import MissionSection from "../components/Sections/MissionSection";
import EcosystemSection from "../components/Sections/EcosystemSection";
import PoweredSection from "../components/Sections/PoweredSection";
import HeroSmart from "../components/Sections/HeroSmart";
import MissionSmart from "../components/Sections/MissionSmart";
import EcosystemSmart from "../components/Sections/EcosystemSmart";
import PoweredSmart from "../components/Sections/PoweredSmart";

import BG from "../images/home/HomeBG.png";
import SmartBG from "../images/home/SmartBG.png";



const Section = styled.div`
    width: 100vw;
    height: 3600px;
    background: url(${BG}), black;
    background-size: contain;
    background-repeat: no-repeat;
    @media screen and (max-width: 768px){
        display: none;
    }

`;

const SmartSection = styled.div`
    width: 100vw;
    height: 3500px;
    background: url(${SmartBG}), black;
    background-size: contain;
    background-repeat: no-repeat;
    @media screen and (min-width: 768px){
        display: none;
    }
    
`;

const Box = styled.div`
    width: 50%;
    height: 65vh;
    transform: translate(50%, 45%);
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const TopTitle = styled.div`
    width: 100%;
    height: 12.5%;
    font-size: 72px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-20%, -30%);
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const BottomTitle = styled.div`
    width: 100%;
    height: 12.5%;
    font-size: 72px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(5%, 10%);
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const Description = styled.div`
    width: 50%;
    height: 40%;
    color: white;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
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

const ButtonHolder = styled.div`
    width: 40%;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Empty = styled.div`
    width: 100%;
    height: 90vh;
`;

const SecondEmpty = styled.div`
    width: 100%;
    height: 40vh;
`;

const ThirdEmpty = styled.div`
    width: 100%;
    height: 65vh;
`;

const FourthEmpty = styled.div`
    width: 100%;
    height: 470px;
    
`;

const SixthEmpty = styled.div`
    width: 100%;
    height: 425px;
`;

const Home = () => {
    return(
        <>
        <Section>
            <NavBar />
            <Box>
            <TopTitle>The coin of</TopTitle>
                <BottomTitle>the people</BottomTitle>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a volutpat donec nisl, in turpis ridiculus tristique. Sed magna massa, cum scelerisque.</Description>
                <ButtonHolder>
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><TopButton>JOIN THE MOVEMENT</TopButton></motion.div>
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><BottomButton>LEARN MORE</BottomButton></motion.div>
                </ButtonHolder>
            </Box>
            <Empty />
            <MissionSection />
            <SecondEmpty />
            <EcosystemSection />
            <ThirdEmpty />
            <PoweredSection />
        </Section>
        <SmartSection>
            <SmartNavBar /> 
            <HeroSmart />
            <MissionSmart />
            <FourthEmpty />
            <EcosystemSmart />
            <SixthEmpty />
            <PoweredSmart />
        </SmartSection>
        </>
    )
}

export default Home;