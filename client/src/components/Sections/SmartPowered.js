import styled from "styled-components";
import {useState, useRef, useEffect} from "react";
import {motion} from "framer-motion";
import {TopButtonSmart, BottomButtonSmart} from "./Elements";

import Powered from "../../svg/powered.svg";
import Box1 from "../../images/roadmap/box1.png";
import Box2 from "../../images/roadmap/box2.png";
import Box3 from "../../images/roadmap/box3.png";
import IconUtility from "../../images/roadmap/IconUtility.png";
import IconUsage from "../../images/roadmap/IconUsage.png";
import IconBurn from "../../images/roadmap/IconBurn.png";
import IconStaking from "../../images/roadmap/IconStaking.png";


const Section = styled.div`
    width: 100vw;
    height: 120vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.div`
    width: 90%;
    height: 125px;
    display: flex;
    align-items: center;
    img{
        transform: scale(1.2) translate(10%, 0);
    }
`;

const Title = styled.div`
    width: 95%;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 28px;
    color: white;
    font-weight: 400;
`;

const Buttons = styled.div`
    width: 80%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`;

const Carousel = styled(motion.div)`
    cursor: grab;
    height: 50vh;
    width: 95vw;
    overflow: hidden;
`;

const InnerCarousel = styled(motion.div)`
    display: flex;
    height: 50vh;
    width: 95vw;
`;

const Item = styled.div`
    min-width: 300px;
    min-height: 48vh;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12), inset 0px 1px 1px rgba(0, 0, 0, 0.2);
    //backdrop-filter: blur(22px);
    border-radius: 3px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Empty = styled.div`
    width: 100%;
    height: 50%;
    img{
        display: block;
        width: 25%;
       margin-left: auto; 
       margin-right: auto;
       margin-top: 80px;
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


const SmartPowered = () => {

    const [width, setWidth] = useState(0);
    const carroussel = useRef();

    useEffect(() => {
        //console.log(carroussel.current.scrollWidth, carroussel.current.offsetWidth);
        setWidth(carroussel.current.scrollWidth - carroussel.current.offsetWidth);
    }, [])

    return(
        <Section>
            <Logo><img src={Powered} alt="" /></Logo>
            <Title>Find out where Fort</Title>
            <Title>comes from & what it’s for!</Title>
            <Buttons>
                <TopButtonSmart style={{margin: '10px 0px'}}>ACQUIRE FORT</TopButtonSmart>
                <BottomButtonSmart style={{margin: '10px 0px'}}>JOIN THE MOVEMENT</BottomButtonSmart>
            </Buttons>
            <Carousel ref={carroussel}>
                <InnerCarousel drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: 'grabbing'}}>
                    <Item style={{backgroundImage: `url(${Box2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <Empty><img src={IconUtility} alt="icon1" /></Empty>
                            <GridTitle><h1>Utility</h1></GridTitle>
                            <GridDesc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1></GridDesc>
                    </Item>
                    <Item style={{backgroundImage: `url(${Box1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <Empty><img src={IconUsage} alt="icon1" /></Empty>
                            <GridTitle><h1>Allocation & Usage</h1></GridTitle>
                            <GridDesc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1></GridDesc>
                    </Item>
                    <Item style={{backgroundImage: `url(${Box3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <Empty><img src={IconBurn} alt="icon1" /></Empty>
                            <GridTitle><h1>Burn Mechanism</h1></GridTitle>
                            <GridDesc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1></GridDesc>
                    </Item>
                    <Item style={{backgroundImage: `url(${Box3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <Empty><img src={IconStaking} alt="icon1" /></Empty>
                            <GridTitle><h1>Staking & Rewards</h1></GridTitle>
                            <GridDesc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1></GridDesc>
                    </Item>
                </InnerCarousel>
            </Carousel>
        </Section>
    )
}


export default SmartPowered;