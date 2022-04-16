import styled from "styled-components";
import {motion} from "framer-motion";
import TokenomicsNavBar from "../components/NavBar/TokenomicsNavBar";
import Back from "../images/tokenomics/BG.png";

import SliderSection from "../components/Sections/SliderSection";
import UtilitySection from "../components/Sections/UtilitySection";
import SupplySection from "../components/Sections/SupplySection";
import GraphSection from "../components/Sections/GraphSection";
import BurnSection from "../components/Sections/BurnSection";
import StakingSection from "../components/Sections/StakingSection";
import InvestorsSection from "../components/Sections/InvestorsSection";

const Section = styled.div`
    width: 100vw;
    height: 7000px;
    background: url(${Back}), black;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
`;

const ColumnLeft = styled.div`
    width: 70%;
    height: 60vh;
    float: left;
    margin-top: 30vh;
    display: flex;
    flex-direction: column;
`;

const ColumnRight = styled.div`
    width: 30%;
    height: 60vh;
    float: left;
    margin-top: 30vh;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 40px;
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
    height: 30%;
    display: flex;
    align-items: center;
    h1{
        color: white;
        font-size: 68px;
        font-weight: 400;
        transform: translate(60%, 30%);
    }
`;

const Description = styled.div`
    width: 45%;
    height: 60%;
    display: flex;
    align-items: center;
    transform: translate(100%, 0%);
    h1{
        color: white;
        font-size: 20px;
        font-weight: 400; 
        
        line-height: 30px;
    }
`;

const FifthEmpty = styled.div`
    width: 100%;
    height: 35vh;
`;

const FourthEmpty = styled.div`
    width: 100%;
    height: 20vh;
`;

const ThirdEmpty = styled.div`
    width: 100%;
    height: 30vh;
`;

const SecondEmpty = styled.div`
    width: 100%;
    height: 27.5vh;
`;

const FirstEmpty = styled.div`
    width: 100%;
    height: 25vh;
`;

const Tokenomics = () => {
    return(
        <Section>
            <TokenomicsNavBar />
            <Wrapper>
                <ColumnLeft>
                    <Title><h1>FORT'nomics</h1></Title>
                    <Description><h1>FORT is the utility token that powers the entire Fortis ecosystem. From payments to lending to holder rewards - it all happens with FORT. Learn how it works!</h1></Description>
                </ColumnLeft>
                <ColumnRight>
                    <ButtonWrapper>
                    <TopButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>JOIN THE MOVEMENT</TopButton>
                    <BottomButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>ACQUIRE FORT</BottomButton>
                    <BottomButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>LEARN MORE</BottomButton>
                    </ButtonWrapper>
                </ColumnRight>
            </Wrapper>
            <SliderSection />
            <FifthEmpty />
            <UtilitySection />
            <FourthEmpty />
            <SupplySection />
            <ThirdEmpty />
            <GraphSection />
            <SecondEmpty />
            <BurnSection />
            <FirstEmpty />
            <StakingSection />
            <FifthEmpty />
            <InvestorsSection />
        </Section>
    )
}


export default Tokenomics;