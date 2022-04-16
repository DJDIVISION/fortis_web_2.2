import styled from "styled-components";
import {motion} from "framer-motion";
import {TopButtonSmart, BottomButtonSmart} from "./Elements";



const Section = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
`;

const Title = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    align-items: center;
    font-size: 28px;
    color: white;
    text-align: center;
    font-weight: 400;
    border: 1px solid white;
`;

const Desc = styled.div`
    width: 90%;
    height: 200px;
    font-size: 18px;
    color: white;
    text-align: center;
    font-weight: 200;
    line-height: 30px;
    border: 1px solid white;
`;

const Buttons = styled.div`
    width: 80%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
`;


const SmartShape = () => {
    return(
        <Section>
            <Title>Shape the future of the Fortis ecosystem.</Title>
            <Desc>The Fortis Labs platform is in the early stages of its development with more details coming soon. In the meantime, register your interest to join this exciting initiative and join our community to stay in the loop on this and other news!</Desc>
            <Buttons>
                <TopButtonSmart>REGISTER YOUR INTEREST</TopButtonSmart>
                <BottomButtonSmart>JOIN THE MOVEMENT</BottomButtonSmart>
            </Buttons>
        </Section>
    )
}


export default SmartShape;