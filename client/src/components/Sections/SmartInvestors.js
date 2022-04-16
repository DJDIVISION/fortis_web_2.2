import styled from "styled-components";
import {motion} from "framer-motion";
import {useState, useRef, useEffect} from "react";
import Acquire from "../../svg/acquire.svg";
import Box1 from "../../images/roadmap/box1.png";
import Box2 from "../../images/roadmap/box2.png";
import Box3 from "../../images/roadmap/box3.png";
import Back from "../../images/about/BlackBG.png";
import IconApp from "../../images/roadmap/IconSales.png";
import IconRoad from "../../images/roadmap/IconSwap.png";
import IconLabs from "../../images/roadmap/IconExchange.png";

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${Back});
`;

const Logo = styled.div`
    width: 90%;
    height: 75px;
    display: flex;
    align-items: center;
    img{
        transform: scale(1.2) translate(10%, 0);
    }
`;

const Title = styled.div`
    width: 95%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 32px;
    color: white;
    font-weight: 400;
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


const SmartInvestors = () => {

    const [width, setWidth] = useState(0);
    const carroussel = useRef();

    useEffect(() => {
        //console.log(carroussel.current.scrollWidth, carroussel.current.offsetWidth);
        setWidth(carroussel.current.scrollWidth - carroussel.current.offsetWidth);
    }, [])

    return(
        <Section>
            <Logo><img src={Acquire} alt="" /></Logo>
            <Title>Interested investors will be able to acquire the FORT token through a number of methods</Title>
            <Carousel ref={carroussel}>
                <InnerCarousel drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: 'grabbing'}}>
                    <Item style={{backgroundImage: `url(${Box1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <Empty><img src={IconApp} alt="icon1" /></Empty>
                            <GridTitle><h1>ICO - Pre Sales</h1></GridTitle>
                            <GridDesc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1></GridDesc>
                    </Item>
                    <Item style={{backgroundImage: `url(${Box2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <Empty><img src={IconRoad} alt="icon1" /></Empty>
                            <GridTitle><h1>T-Swap Exchange</h1></GridTitle>
                            <GridDesc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1></GridDesc>
                    </Item>
                    <Item style={{backgroundImage: `url(${Box3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <Empty><img src={IconLabs} alt="icon1" /></Empty>
                            <GridTitle><h1>Major Exchange</h1></GridTitle>
                            <GridDesc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1></GridDesc>
                    </Item>
                </InnerCarousel>
            </Carousel>
        </Section>
    )
}


export default SmartInvestors;