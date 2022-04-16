import styled from "styled-components";
import {motion} from "framer-motion";

import Acquire from "../../svg/acquire.svg";
import Box1 from "../../images/roadmap/box1.png";
import Box2 from "../../images/roadmap/box2.png";
import Box3 from "../../images/roadmap/box3.png";
import IconApp from "../../images/roadmap/IconSales.png";
import IconRoad from "../../images/roadmap/IconSwap.png";
import IconLabs from "../../images/roadmap/IconExchange.png";


const Section = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TopGrid = styled.div`
    width: 70%;
    height: 20vh;
`;

const Title = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 85%;
`;

const ColumnLeft = styled.div`
    width: 80%;
    height: 100%;
    float: left;
    display: flex;
    align-items: center;
    
    h1{
        color: white;
        font-size: 32px;
        font-weight: 400;
        width: 100%;
    }
`;

const ColumnRight = styled.div`
    width: 20%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`;

const BottomGrid = styled.div`
    width: 70%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Box = styled.div`
    width: 31%;
    height: 100%;
    background: red;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12), inset 0px 1px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(22px);
    border-radius: 3px;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    

    /* &::before{
       content: "";
       width: 100%;
       height: 3px;
       background: white;
       transition: width 0.3s ease;
       transform: translate(0, 100%);
    } */
`;

const Empty = styled.div`
    width: 100%;
    height: 50%;
    img{
        display: block;
        width: 25%;
       margin-left: auto; 
       margin-right: auto;
       margin-top: 110px;
    }
`;



const GridTitle = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-weight: 500;
        font-size: 20px;
    }
`;

const GridDesc = styled.div`
    width: 90%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1{
        color: white;
        font-weight: 400;
        font-size: 18px;
    }
`;

const Buttons = styled.div`
    width: 100%;
    height: 15vh;
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
    margin: 10px 0;
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-shadow: black -1px 2px, black -2px 2px;
`;


const InvestorsSection = () => {
    return(
        <Section>
            <TopGrid>
                <Title><img src={Acquire} alt="title" /></Title>
                <Wrapper>
                    <ColumnLeft>
                    <h1>Interested investors will be able to acquire the FORT token through a number of methods</h1>
                    </ColumnLeft>
                    <ColumnRight>
                    
                    </ColumnRight>
                </Wrapper>
            </TopGrid>
            <BottomGrid>
                <Box style={{backgroundImage: `url(${Box1})`}}>
                    <Empty><img src={IconApp} alt="icon1" /></Empty>
                    <GridTitle><h1>ICO - Pre Sales</h1></GridTitle>
                    <GridDesc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1></GridDesc>
                </Box>
                <Box style={{backgroundImage: `url(${Box2})`}}>
                    <Empty><img src={IconRoad} alt="icon2" /></Empty>
                    <GridTitle><h1>T-Swap Exchange</h1></GridTitle>
                    <GridDesc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1></GridDesc>
                </Box>
                <Box style={{backgroundImage: `url(${Box3})`}}>
                    <Empty><img src={IconLabs} alt="icon3" /></Empty>
                    <GridTitle><h1>Major Exchange</h1></GridTitle>
                    <GridDesc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1></GridDesc>
                </Box>
            </BottomGrid>
            <Buttons>
            <TopButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>JOIN THE MOVEMENT</TopButton>
            </Buttons>
        </Section>
    )
}

export default InvestorsSection;