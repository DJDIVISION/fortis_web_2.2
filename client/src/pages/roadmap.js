import styled from "styled-components";
import {motion} from "framer-motion";
import RoadmapNavBar from "../components/NavBar/RoadmapNavBar";
import {Link as LinkS} from "react-scroll";
import Back from "../images/roadmap/Roadmap.png";

import ProductsSection from "../components/Sections/ProductsSection";
import AppSection from "../components/Sections/AppSection";
import ElementsSection from "../components/Sections/ElementsSection";
import GatewaySection from "../components/Sections/GatewaySection";
import FeaturesSection from "../components/Sections/FeaturesSection";
import IdeasSection from "../components/Sections/IdeasSection";
import ShapeSection from "../components/Sections/ShapeSection";
import RoadmapSection from "../components/Sections/RoadmapSection";
import Footer from "../components/Sections/Footer";

const Section = styled.div`
    width: 100vw;
    height: 8000px;
    background: url(${Back}), black;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
`;

const ColumnLeft = styled.div`
    width: 70%;
    height: 60vh;
    float: left;
    margin-top: 30vh;
    display: flex;
    flex-direction: column;
`;

const ColumnRight = styled.div`
    width: 30%;
    height: 60vh;
    float: left;
    margin-top: 30vh;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 40px;
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
    margin: 10px 0;
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-shadow: black -1px 2px, black -2px 2px;
`;

const Title = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    border: 1px solid white;
    h1{
        color: white;
        font-size: 68px;
        font-weight: 400;
        transform: translate(40%, 0%);
    }
`;

const Description = styled.div`
    width: 60%;
    height: 70%;
    display: flex;
    align-items: center;
    h1{
        color: white;
        font-size: 32px;
        font-weight: 400; 
        transform: translate(34%, -10%);
        line-height: 130%;
    }
`;

const Empty = styled.div`
    width: 100%;
    height: 50vh;
`;

const SecondEmpty = styled.div`
    width: 100%;
    height: 60vh;
`;

const ThirdEmpty = styled.div`
    width: 100%;
    height: 45vh;
`;

const FourthEmpty = styled.div`
    width: 100%;
    height: 40vh;
`;

const FifthEmpty = styled.div`
    width: 100%;
    height: 25vh;
`;



const Roadmap = () => {
    return(
        <>
        <Section>
            <RoadmapNavBar />
            <Wrapper>
            <ColumnLeft>
                <Title><h1>Fortis Roadmap</h1></Title>
                <Description><h1>Fortis is on a mission to solve the most pressing issues facing cryptocurrency today. Read how our experienced team of developers and visionaries have a plan to make it happen.</h1></Description>
            </ColumnLeft>
            <ColumnRight>
                <ButtonWrapper>
                <LinkS to="movement" smooth={true} duration={1000} spy={true} exact="true"><TopButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>JOIN THE MOVEMENT</TopButton></LinkS>
                <BottomButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>PRODUCTS</BottomButton>
                <BottomButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>ROADMAP</BottomButton>
                </ButtonWrapper>
            </ColumnRight>
            </Wrapper>
            <Empty />
            <ProductsSection />
            <Empty />
            <AppSection />
            <SecondEmpty />
            <ElementsSection />
            <ThirdEmpty />
            <GatewaySection />
            <FourthEmpty />
            <FeaturesSection />
            <FifthEmpty />
            <IdeasSection />
            <FifthEmpty />
            <ShapeSection />
            <FifthEmpty />
            <RoadmapSection />
        </Section>
        <Footer />
        </>
    )
}


export default Roadmap;