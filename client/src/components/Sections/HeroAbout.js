import styled from "styled-components";
import {motion} from "framer-motion";
import {TopButtonSmart, BottomButtonSmart} from "./Elements";


const Section = styled.div`
    max-width: 100vw;
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Row = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
`;

const RowOne = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    h1{
        font-size: 52px;
        color: white;
        font-weight: 500;
        padding-left: 30px;
    }
`;

const RowTwo = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    h1{
        font-size: 52px;
        color: white;
        font-weight: 500;
        padding-left: 90px;
    }
`;
const RowThree = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 52px;
        color: white;
        font-weight: 500;
    }
`;

const Desc = styled.div`
    width: 85%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-size: 20px;
        line-height: 25px;
        font-weight: 200;
    }
`;

const Buttons = styled.div`
    width: 100%;
    height: 220px;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const HeroAbout = () => {
    return(
        <Section>
            <Row></Row>
            <RowOne ><h1>Fortis is</h1></RowOne>
            <RowTwo ><h1>Making</h1></RowTwo>
            <RowThree ><h1>Money Better</h1></RowThree>
            <Desc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a volutpat donec nisl, in turpis ridiculus tristique. Sed magna massa, cum scelerisque.</h1></Desc>
            <Buttons>
                <TopButtonSmart>JOIN THE MOVEMENT</TopButtonSmart>
                <BottomButtonSmart>ECOSYSTEM</BottomButtonSmart>
                <BottomButtonSmart>TEAM</BottomButtonSmart>
            </Buttons>
        </Section>
    )
}

export default HeroAbout;