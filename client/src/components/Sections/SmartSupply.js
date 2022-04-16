import styled from "styled-components";
import {motion} from "framer-motion";

import Allocation from "../../svg/allocation.svg";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        transform: scale(1.2) translate(10%, 0);
    }
`;

const Title = styled.div`
    width: 95%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1{
        font-size: 32px;
        color: white;
        font-weight: 400;
    }
`;

const Grid = styled.div`
    width: 95%;
    height: 500px;
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
        font-weight: 200;
        margin-left: auto;
        margin-right: 20px;
        text-align: right;
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

const SmartSupply = () => {
    return(
        <Section>
            <Logo><img src={Allocation} alt="" /></Logo>
            <Title><h1>Fort has a strict total supply of 1 Billion With the Following Allocation</h1></Title>
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


export default SmartSupply;