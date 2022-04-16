import styled from "styled-components";
import {motion} from "framer-motion";
import {Link as LinkR} from "react-router-dom";
import Icon1 from "../../images/about/icon1.png";
import Icon2 from "../../images/about/icon2.png";
import Icon3 from "../../images/about/icon3.png";
import Eco from "../../svg/ecosystem.svg";


const Section = styled.div`
    width: 100%;
    height: 950px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    width: 55%;
    height: 125px;
    display: flex;
    img{
        transform: scale(1.2) translate(10%, 0);
        margin-top: auto;
        margin-bottom: 15px;
    }
`;

const Text = styled.div`
    width: 55%;
    height: 325px;
    display: flex;
    align-items: center;
    color: white;
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
`;

const Desc = styled.div`
    width: 55%;
    height: 175px;
    color: white;
    font-size: 16px;
    font-weight: 200;
    line-height: 30px;
`;

const BottomTitle = styled.div`
    width: 50%;
    height: 100px;
    display: flex;
    align-items: center;
    h1{
        color: white;
        font-size: 38px;
        font-weight: 400;
    }
`;

const Grid = styled.div`
    width: 52.5%;
    height: 225px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Item = styled(motion.div)`
    width: 32%;
    height: 95%;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12), inset 0px 1px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(22px);
    border-radius: 3px;
    &:hover{
        background: rgba(0, 0, 0, 0.8);
    }

`;

const Icon = styled.div`
    width: 100%;
    height: 40%;
    img{
        transform: scale(0.85) translate(-10%, -5%);
    }
`;

const BoxEmpty = styled.div`
    width: 100%;
    height: 30%;
    img{
        transform: scale(0.85) translate(-10%, -5%);
    }
`;

const BoxTitle = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: white;
    font-weight: 400;
    padding-left: 20px;
`;

const AboutSection = () => {
    return(
        <Section id="movement">
           <Title><img src={Eco} alt="" /></Title>
           <Text>People all around the world are interested in cryptocurrency. But the current process of buying and spending crypto is disjointed and confusing. Fortis brings every aspect of the crypto ecosystem together under one app to save you time and peace of mind.</Text>
            <Desc>It all starts with the Fortis App - a secure and easy to use method of turning your country’s fiat currency into crypto. Now you can earn passive income through Fortis Staking, access a loan through Fortis Lend, and spend with your Fortis Card. Business owners can adopt Fortis Gateway to accept crypto for payment. And crypto innovators can fund their ideas through the Fortis Labs. Fortis presents a complex network, simplified, so you can feel confident and secure with your crypto.</Desc>
            <BottomTitle><h1>Want to learn more?</h1></BottomTitle>
            <Grid>
                <Item whileHover={{scale: 1.025}} whileTap={{scale: 0.95}}>
                    <Icon><img src={Icon1} alt="" /></Icon>
                    <BoxEmpty></BoxEmpty>
                    <BoxTitle>Fortis Roadmap</BoxTitle>
                </Item>
                <Item whileHover={{scale: 1.025}} whileTap={{scale: 0.95}}>
                    <Icon><img src={Icon2} alt="" /></Icon>
                    <BoxEmpty></BoxEmpty>
                    <BoxTitle>Fort'nomics</BoxTitle>
                </Item>
                <Item whileHover={{scale: 1.025}} whileTap={{scale: 0.95}}>
                    <Icon><img src={Icon3} alt="" /></Icon>
                    <BoxEmpty></BoxEmpty>
                    <BoxTitle>Fortis Founder</BoxTitle>
                </Item>
            </Grid>
        </Section>
    )
}

export default AboutSection;