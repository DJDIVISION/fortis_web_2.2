import styled from "styled-components";
import {motion} from "framer-motion";
import {TopButtonSmart, BottomButtonSmart} from "./Elements";
import Utility from "../../svg/utility.svg";
import Icon1 from "../../images/tokenomics/icon1.png";
import Icon2 from "../../images/tokenomics/icon2.png";
import Icon3 from "../../images/tokenomics/icon3.png";
import Icon4 from "../../images/tokenomics/icon4.png";
import Icon5 from "../../images/tokenomics/icon5.png";
import Icon6 from "../../images/tokenomics/icon6.png";
import Icon7 from "../../images/tokenomics/icon7.png";
import Icon8 from "../../images/tokenomics/icon8.png";


const Section = styled.div`
    width: 100%;
    height: 1450px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopEmpty = styled.div`
    width: 100%;
    height: 100px;
`;

const Logo = styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        transform: scale(1.2) translate(10%, 0);
    }
`;

const Title = styled.div`
    width: 80%;
    height: 300px;
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
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Row = styled.div`
    width: 100%;
    height: 25%;
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Item = styled.div`
    width: 49%;
    height: 98%;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12), inset 0px 1px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(22px);
    border-radius: 3px;
    transition: filter 300ms;
    cursor: pointer;
    &:hover{
        filter: brightness(1.2);
        background: #484a4d;
    }
    
`;

const Buttons = styled.div`
    width: 80%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Holder = styled.div`
    height: 25%;
    width: 100%;
    img{
        transform: scale(0.9);
    }
`;

const Empty = styled.div`
    height: 50%;
    width: 100%;
`;

const BoxText = styled.div`
    height: 25%;
    width: 100%;
    h1{
        font-size: 16px;
        color: white;
        font-weight: 400;
        padding-left: 8px;
    }
`;


const SmartUtility = () => {
    return(
        <Section>
            <TopEmpty />
            <Logo><img src={Utility} alt="title" /></Logo>
            <Title><h1>The FORT token provides versatile utility for a number of use cases within the Fortis ecosystem.</h1></Title>
            <Grid>
                <Row>
                    <Item>
                    <Holder><img src={Icon1} alt="icon1" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>Bid and Stake</h1></BoxText>
                    </Item>
                    <Item>
                    <Holder><img src={Icon2} alt="icon2" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>Farming</h1></BoxText>
                    </Item>
                </Row>
                <Row>
                    <Item>
                    <Holder><img src={Icon3} alt="icon3" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>Social Media Games</h1></BoxText>
                    </Item>
                    <Item>
                    <Holder><img src={Icon4} alt="icon4" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>NFT Rewards</h1></BoxText>
                    </Item>
                </Row>
                <Row>
                    <Item>
                    <Holder><img src={Icon5} alt="icon5" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>Droplets</h1></BoxText>
                    </Item>
                    <Item>
                    <Holder><img src={Icon6} alt="icon6" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>P2P Payments</h1></BoxText>
                    </Item>
                </Row>
                <Row>
                    <Item>
                    <Holder><img src={Icon7} alt="icon7" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>Fortis Labs</h1></BoxText>
                    </Item>
                    <Item>
                    <Holder><img src={Icon8} alt="icon8" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>And More</h1></BoxText>
                    </Item>
                </Row>
            </Grid>
            <Buttons>
                <TopButtonSmart>ACQUIRE FORT</TopButtonSmart>
                <BottomButtonSmart>ALLOCATION</BottomButtonSmart>
            </Buttons>
        </Section>
    )
}


export default SmartUtility;