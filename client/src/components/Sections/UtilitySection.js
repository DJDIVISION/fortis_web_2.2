import styled from "styled-components";
import {motion} from "framer-motion";

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
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        transform: scale(1.2);
    }
`;

const Text = styled.div`
    width: 60%;
    height: 14%;
    display: flex;
    align-items: center;
    justify-content: center;
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
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
`;

const Buttons = styled.div`
    width: 100%;
    height: 11%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TopButton = styled(motion.div)`
    width: 225px;
    height: 55px;
    font-size: 14px;
    font-weight: 500;
    background: white;
    background: linear-gradient(97.87deg, #E30647 -28.9%, #FFAA0A 93.4%);
    margin: 0px 20px;
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
    margin: 0px 20px;
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-shadow: black -1px 2px, black -2px 2px;
`;

const Row = styled.div`
    width: 100%;
    height: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
`;

const Item = styled(motion.div)`
    width: 24%;
    height: 95%;
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
        font-size: 20px;
        color: white;
        font-weight: 400;
        transform: translate(10%, 0);
    }
`;


const UtilitySection = () => {
    return(
        <Section>
            <Title><img src={Utility} alt="" /></Title>
            <Text><h1>The FORT token provides versatile utility for a number of use cases within the Fortis ecosystem.</h1></Text>
            <Grid>
                <Row>
                    <Item whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                        <Holder><img src={Icon1} alt="icon1" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>Bid and Stake</h1></BoxText>
                    </Item>
                    <Item whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                    <Holder><img src={Icon2} alt="icon2" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>Farming</h1></BoxText>
                    </Item>
                    <Item whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                    <Holder><img src={Icon3} alt="icon3" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>Social Media Games</h1></BoxText>
                    </Item>
                    <Item whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                    <Holder><img src={Icon4} alt="icon4" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>NFT Rewards</h1></BoxText>
                    </Item>
                </Row>
                <Row>
                    <Item whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                    <Holder><img src={Icon5} alt="icon5" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>Droplets</h1></BoxText>
                    </Item>
                    <Item whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                    <Holder><img src={Icon6} alt="icon6" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>P2P Payments</h1></BoxText>
                    </Item>
                    <Item whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                    <Holder><img src={Icon7} alt="icon7" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>Fortis Labs</h1></BoxText>
                    </Item>
                    <Item whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                    <Holder><img src={Icon8} alt="icon8" /></Holder>
                        <Empty></Empty>
                        <BoxText><h1>And More</h1></BoxText>
                    </Item>
                </Row>
            </Grid>
            <Buttons>
                <TopButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>ACQUIRE FORT</TopButton>
                <BottomButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>ALLOCATION</BottomButton>
            </Buttons>
        </Section>
    )
}

export default UtilitySection;