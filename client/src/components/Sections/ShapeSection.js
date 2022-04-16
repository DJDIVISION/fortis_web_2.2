import styled from "styled-components";
import {motion} from "framer-motion";



const Section = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Column = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const Text = styled.div`
    width: 60%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1{
        color: white;
        font-weight: 400;
        font-size: 32px;
        line-height: 40px;
    }
`;

const Description = styled.div`
    width: 80%;
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1{
        color: white;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
    }
`;

const Buttons = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
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


const ShapeSection = () => {
    return(
        <Section>
            <Column>
                <Text><h1>Shape the future of the Fortis ecosystem.</h1></Text>
                <Description><h1>The Fortis Labs platform is in the early stages of its development with more details coming soon. In the meantime, register your interest to join this exciting initiative and join our community to stay in the loop on this and other news!</h1></Description>
                <Buttons>
                <TopButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>REGISTER YOUR INTEREST</TopButton>
                <BottomButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>JOIN THE MOVEMENT</BottomButton>
                </Buttons>
            </Column>
        </Section>
    )
}


export default ShapeSection;