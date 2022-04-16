import styled from "styled-components";
import {motion} from "framer-motion";

import MeetTeam from "../../svg/team.svg";
import CEO from "../../svg/CEO.svg";
import CTO from "../../svg/CTO.svg";
import COO from "../../svg/COO.svg";
import FounderImg from "../../images/about/founderImg.png";
import Back from "../../images/about/BGTwo.png";
import LearnMore from "../../svg/learnMore.svg";


const Section = styled.div`
    width: 100%;
    height: 2600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${Back}), red;
    background-size: cover;
    background-repeat: no-repeat;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 425px;
`;

const ImageHolder = styled.div`
    width: 100px;
    margin-top: 110px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    transform: translate(-55%, 0);
    img{
        width: 100%;
        display: block;
        object-fit: cover;
        border-radius: 50%;
    }
`;

const Logo = styled.div`
    width: 80%;
    height: 50px;
    display: flex;
    align-items: center;
    img{
        transform: translate(10%, 0);
    }
`;

const Title = styled.div`
    width: 80%;
    height: 500px;
    display: flex;
    align-items: center;
    font-size: 28px;
    color: white;
    font-weight: 500;
    line-height: 40px;
`;

const BigImageWrapper = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const BigImageHolder = styled.div`
    width: 150px;
    height: 150px;
    background: white;
    border-radius: 50%;
    margin-bottom: 30px;
    img{
        display: block;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;

const Row = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 28px;
        color: white;
        font-weight: 400;
    }
`;

const Text = styled.div`
    width: 95%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 48px;
    color: white;
    font-weight: 400;
`;

const Desc = styled.div`
    width: 90%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 100px;
    font-size: 22px;
    color: white;
    font-weight: 200;
`;

const BottomRow = styled.div`
    width: 95%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InnerRow = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #666666;
    h1{
        color: white;
        font-size: 20px;
        font-weight: 400;
        span{
            color: #666666;
        }
    }
`;


const SmartTeam = () => {
    return(
        <Section>
            <ImageWrapper>
                <ImageHolder><img src={FounderImg} alt="Jesus" /></ImageHolder>
            </ImageWrapper>
            <Logo><img src={MeetTeam} alt="title" /></Logo>
            <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Title>
            <BigImageWrapper>
                <BigImageHolder><img src={FounderImg} alt="Jesus" /></BigImageHolder>
                <Row><h1>James Gordon</h1></Row>
                <Row><img src={CEO} alt="Jesus" /></Row>
            </BigImageWrapper>
            <BigImageWrapper>
                <BigImageHolder><img src={FounderImg} alt="Jesus" /></BigImageHolder>
                <Row><h1>Adam Parker</h1></Row>
                <Row><img src={CTO} alt="Jesus" /></Row>
            </BigImageWrapper>
            <BigImageWrapper>
                <BigImageHolder><img src={FounderImg} alt="Jesus" /></BigImageHolder>
                <Row><h1>Cameron Diaz</h1></Row>
                <Row><img src={COO} alt="Jesus" /></Row>
            </BigImageWrapper>
            <Text>Join the Team</Text>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Desc>
            <BottomRow>
                <InnerRow><h1>Web Developer <span> - Full Time</span></h1><img src={LearnMore} alt="learn" /></InnerRow>
            </BottomRow>
            <BottomRow>
                <InnerRow><h1>Technical Developer<span> - Full Time</span></h1><img src={LearnMore} alt="learn" /></InnerRow>
            </BottomRow>
        </Section>
    )
}

export default SmartTeam;