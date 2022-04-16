import styled from "styled-components";
import RoadmapSmartNavBar from "../components/NavBar/RoadmapSmartNavBar";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import Back from "../images/roadmap/roadmapSmartBG.png";
import {TopButtonSmart, BottomButtonSmart} from "../components/Sections/Elements";
import SmartProducts from "../components/Sections/SmartProducts";
import AppSmart from "../components/Sections/AppSmart";
import SmartElements from "../components/Sections/SmartElements";
import SmartGateway from "../components/Sections/SmartGateway";
import SmartIdeas from "../components/Sections/SmartIdeas";
import SmartShape from "../components/Sections/SmartShape";

const Section = styled.div`
    width: 100vw;
    height: 7600px;
    display: flex;
    flex-direction: column;
    background: url(${Back}), black;
    background-size: contain;
    background-repeat: no-repeat;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Empty = styled.div`
    width: 100%;
    height: 110px;
`;

const Text = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    align-items: center;
    font-size: 56px;
    line-height: 55px;
    color: white;
    font-weight: 500;
`;

const Desc = styled.div`
    width: 70%;
    height: 200px;
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

const EmptyOne = styled.div`
    width: 100%;
    height: 200px;
`;

const RoadmapSmart = () => {
    return(
        <Section>
            <RoadmapSmartNavBar />
            <Wrapper>
                <Empty/>
                <Text>Fortis Roadmap</Text>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporius dab incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</Desc>
                <Buttons>
                    <TopButtonSmart style={{margin: '5px 0'}}>JOIN THE MOVEMENT</TopButtonSmart>
                    <BottomButtonSmart style={{margin: '5px 0'}}>PRODUCTS</BottomButtonSmart>
                    <BottomButtonSmart style={{margin: '5px 0'}}>ROADMAP</BottomButtonSmart>
                </Buttons>
            </Wrapper>
            <EmptyOne />
            <SmartProducts />
            <AppSmart />
            <SmartElements />
            <SmartGateway />
            <SmartIdeas />
            <SmartShape />
        </Section>
    )
}

export default RoadmapSmart;