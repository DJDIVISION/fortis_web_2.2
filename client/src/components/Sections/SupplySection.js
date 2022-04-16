import styled from "styled-components";
import {motion} from "framer-motion";

import Allocation from "../../svg/allocation.svg";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        transform: scale(1.2);
    }
`;

const Text = styled.div`
    width: 40%;
    height: 20%;
    text-align: center;
    h1{
        color: white;
        font-size: 32px;
        line-height: 120%;
        font-style: normal;
        font-weight: 400;
    }
`;

const Grid = styled.div`
    width: 55%;
    height: 55%;
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    width: 100%;
    height: 20%;
    display: inline-flex;
`;

const SmallTop = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    h1{
        font-size: 14px;
        color: white;
        font-weight: 400;
        padding-left: 20px;
    }
`;

const BigTop = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    h1{
        font-size: 14px;
        color: white;
        font-weight: 400;
        margin-left: auto;
        margin-right: 20px;
    }
`;

const SmallBottom = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    h1{
        font-size: 28px;
        color: white;
        font-weight: 400;
        padding-left: 30px;
    }
`;




const SupplySection = () => {
    return(
        <Section>
            <Title><img src={Allocation} alt="title" /></Title>
            <Text><h1>Fort has a strict total supply of 1 Billion With the Following Allocation</h1></Text>
            <Grid>
                <Row>
                    <SmallTop><h1>Percentage</h1></SmallTop>
                    <SmallTop><h1>Amount (FORT)</h1></SmallTop>
                    <BigTop><h1>Participant</h1></BigTop>
                </Row>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <SmallBottom><h1>25%</h1></SmallBottom>
                    <SmallBottom><h1>250M</h1></SmallBottom>
                    <BigTop><h1>Foundation</h1></BigTop>
                </Row>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <SmallBottom><h1>15%</h1></SmallBottom>
                    <SmallBottom><h1>150M</h1></SmallBottom>
                    <BigTop><h1>Team Vesting 3 years</h1></BigTop>
                </Row>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <SmallBottom><h1>33%</h1></SmallBottom>
                    <SmallBottom><h1>330M</h1></SmallBottom>
                    <BigTop><h1>Initial Supply</h1></BigTop>
                </Row>
                <Row>
                    <SmallBottom><h1>17%</h1></SmallBottom>
                    <SmallBottom><h1>270M</h1></SmallBottom>
                    <BigTop><h1>Product Development & Marketing</h1></BigTop>
                </Row>
            </Grid>
        </Section>
    )
}

export default SupplySection;