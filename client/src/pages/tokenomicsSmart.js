import styled from "styled-components";
import TokenomicsSmartNavBar from "../components/NavBar/TokenomicsSmartNavBar";
import {TopButtonSmart, BottomButtonSmart} from "../components/Sections/Elements";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";

import SmartPowered from "../components/Sections/SmartPowered";
import SmartUtility from "../components/Sections/SmartUtility";
import SmartSupply from "../components/Sections/SmartSupply";
import SmartGraph from "../components/Sections/SmartGraph";
import SmartBurn from "../components/Sections/SmartBurn";
import SmartStaking from "../components/Sections/SmartStaking";
import SmartInvestors from "../components/Sections/SmartInvestors";

import Back from "../images/tokenomics/tokenomicsSmartBG.png";

const Section = styled.div`
    width: 100vw;
    height: 6900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${Back});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Empty = styled.div`
    width: 100%;
    height: 100px;
`;

const Text = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    align-items: center;
    font-size: 52px;
    color: white;
    font-weight: 500;
`;

const Desc = styled.div`
    width: 80%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    line-height: 25px;
    font-weight: 300;
`;

const Buttons = styled.div`
    width: 80%;
    height: 225px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SecondEmpty = styled.div`
    width: 100%;
    height: 90px;
`;

const ThirdEmpty = styled.div`
    width: 100%;
    height: 50px;
`;

const FourthEmpty = styled.div`
    width: 100%;
    height: 100px;
`;

const FifthEmpty = styled.div`
    width: 100%;
    height: 600px;
`;

const EmptyTwo = styled.div`
    width: 100%;
    height: 125px;
`;



const TokenomicsSmart = () => {
    return(
        <>
        <Section>
            <TokenomicsSmartNavBar />
            <Wrapper>
            <Empty />
            <Text>FORT'nomics</Text>
            <Desc>Amet a volutpat donec nisl, in turpis ridiculus tristique. Sed magna massa, cum scelerisque. Dolor sit abetus achtum dolastro umago dobak lumbro sol abestro.</Desc>
            <Buttons>
                <TopButtonSmart>JOIN THE MOVEMENT</TopButtonSmart>
                <BottomButtonSmart>ACQUIRE FORT</BottomButtonSmart>
                <BottomButtonSmart>LEARN MORE</BottomButtonSmart>
            </Buttons>
            </Wrapper>
            <SecondEmpty />
            <SmartPowered />
            <SmartUtility />
            <ThirdEmpty />
            <SmartSupply />
            <FourthEmpty />
            <SmartGraph />
            <EmptyTwo />
            <SmartBurn />
            <FifthEmpty />
            <SmartStaking />
        </Section>
        <SmartInvestors />
        </>
    )
}

export default TokenomicsSmart;