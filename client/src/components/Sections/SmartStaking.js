import styled from "styled-components";
import {motion} from "framer-motion";
import {TopButtonSmart, BottomButtonSmart} from "./Elements";



const Section = styled.div`
    width: 95%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    width: 95%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 38px;
    color: white;
    font-weight: 400;
`;

const Desc = styled.div`
    width: 90%;
    height: 225px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: white;
    font-weight: 200;
    text-align: center;
`;

const Grid = styled.div`
    width: 95%;
    height: 500px;
    display: flex;
    flex-direction: column;
`;

const Buttons = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const FirstRow = styled.div`
    width: 100%;
    height: 14.285%;
    display: flex;
    h1{
        font-size: 18px;
        color: white;
        font-weight: 400;
        padding-left: 20px;
    }
`;

const ColumnLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: left;
`;

const ColumnRight = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    h1{
        margin-left: auto;
        margin-right: 10px;
    }
    h2{
        margin-left: auto;
        margin-right: 30px;
    }
`;

const Row = styled.div`
    width: 100%;
    height: 14.285%;
    display: flex;
    h1{
        font-size: 28px;
        color: white;
        font-weight: 400;
        padding-left: 30px;
    }
    h2{
        font-size: 28px;
        color: white;
        font-weight: 400;
        padding-left: 30px;
    }
`;


const SmartStaking = () => {
    return(
        <Section>
            <Title>Staking Rewards</Title>
            <Desc>The FORT Staking feature will increase the current circulating supply by using an inflationary smart contract. This method is used to reward users that are staking FORT to support the project. The table below will give a better understanding of the Staking per year.</Desc>
            <Grid>
            <FirstRow>
                    <ColumnLeft><h1>Year</h1></ColumnLeft>
                    <ColumnRight><h1>Min/Max Inflation *</h1></ColumnRight>
                </FirstRow>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <ColumnLeft><h1>2021</h1></ColumnLeft>
                    <ColumnRight><h2>~12%</h2></ColumnRight>
                </Row>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <ColumnLeft><h1>2022</h1></ColumnLeft>
                    <ColumnRight><h2>~10%</h2></ColumnRight>
                </Row>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <ColumnLeft><h1>2023</h1></ColumnLeft>
                    <ColumnRight><h2>~8%</h2></ColumnRight>
                </Row>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <ColumnLeft><h1>2024</h1></ColumnLeft>
                    <ColumnRight><h2>~6%</h2></ColumnRight>
                </Row>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <ColumnLeft><h1>2025</h1></ColumnLeft>
                    <ColumnRight><h2>~4%</h2></ColumnRight>
                </Row>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <ColumnLeft><h1>2026</h1></ColumnLeft>
                    <ColumnRight><h2>~2%</h2></ColumnRight>
                </Row>
            </Grid>
            <Buttons>
                <TopButtonSmart style={{margin: '15px 0'}}>ACQUIRE FORT</TopButtonSmart> 
                <BottomButtonSmart style={{margin: '15px 0'}}>JOIN THE MOVEMENT</BottomButtonSmart>
            </Buttons>
        </Section>
    )
}


export default SmartStaking;