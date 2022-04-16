import styled from "styled-components";
import {motion} from "framer-motion";

import Founder from "../../svg/founder.svg";
import FounderImg from "../../images/about/founderImg.png";

const Section = styled.div`
    width: 100%;
    height: 740px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ColumnLeft = styled.div`
    width: 40%;
    height: 740px;
    float: left;
    
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 740px;
    float: left;
`;

const ColumnTitle = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    img{
        transform: scale(1.2) translate(25%, 0);

    }
`;

const Title = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    
    h1{
        font-size: 58px;
        color: white;
        line-height: 70px;
        width: 80%;
        margin-left: 20px;
    }
`;

const Description = styled.div`
    width: 80%;
    height: 25%;
    display: flex;
    align-items: center;
    h1{
        font-size: 18px;
        color: white;
        font-style: normal;
        font-weight: 400;
        margin-left: 20px;
    }
`;

const ButtonWrapper = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const TopButton = styled(motion.div)`
    width: 225px;
    height: 55px;
    font-size: 14px;
    font-weight: 500;
    background: white;
    background: linear-gradient(97.87deg, #E30647 -28.9%, #FFAA0A 93.4%);
    margin: 10px 0;
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-shadow: black -1px 2px, black -2px 2px;
    
`;

const ImageHolder = styled.div`
    width: 175px;
    height: 175px;
    background: black;
    border-radius: 50%;
    margin-top: 160px;
    margin-left: 75px;
    background-image: url(${FounderImg});
    background-size: cover;
`;


const FounderSection = () => {
    return(
        <Section>
            <ColumnLeft>
                <ColumnTitle><img src={Founder} alt="title" /></ColumnTitle>
                <Title><h1>About Jesus Sobredo - CEO</h1></Title>
                <Description><h1>Jesus has been the driving force behind Fortis ever since he encountered major issues in the crypto space and knew he could solve them. Jesus is passionate about creating a global currency that serves the people of the world, no matter what arbitrary financial limitations surround them.</h1></Description>
                <Description><h1>Known for his compelling entrepreneurial spirit, Jesus is an active community member. His background in traditional finances and a passion for innovative blockchain solutions, makes him the perfect individual to lead the ambitious mission of Fortis. Look out for his updates in the Fortis Telegram channel!</h1></Description>
                <ButtonWrapper>
                    <TopButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>JOIN THE MOVEMENT</TopButton>
                </ButtonWrapper>
            </ColumnLeft>
            <ColumnRight>
                <ImageHolder></ImageHolder>
            </ColumnRight>
        </Section>
    )
}

export default FounderSection;