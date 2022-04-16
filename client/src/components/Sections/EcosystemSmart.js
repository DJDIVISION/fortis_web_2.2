import styled from "styled-components";
import {motion} from "framer-motion";
import {TopButtonSmart, BottomButtonSmart} from "./Elements";



const Section = styled.div`
    max-width: 100vw;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const Title = styled.div`
    width: 80%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: white;
    font-size: 42px;
    line-height: 45px;

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
    font-weight: 200;
`;
const Buttons = styled.div`
    width: 90%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    padding-left: 30px;
`;


const EcosystemSmart = () => {
    return(
        <Section>
            <Title>The Fortis ecosystem</Title>
            <Desc>Fortis is on a mission ipsum dolor sit amet, consectetur adipiscing elit. Amet a volutpat donec nisl, in turpis ridiculus tristique. Sed magna massa, cum scelerisque.</Desc>
            <Buttons>
            <TopButtonSmart>JOIN THE MOVEMENT</TopButtonSmart>
            <BottomButtonSmart>LEARN MORE</BottomButtonSmart>
            </Buttons>
        </Section>
    )
}

export default EcosystemSmart;