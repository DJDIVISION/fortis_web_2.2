import styled from "styled-components";
import {motion} from "framer-motion";


const Section = styled.div`
    max-width: 100vw;
    height: 60vh;
    display: flex;
    align-items: center;
`;

const Column = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;

`;

const Title = styled.div`
    width: 70%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 70px;
    h1{
        color: white;
        font-size: 58px;
        font-weight: 400;
        transform: translate(0, -70%);
        
    }
`;

const Description = styled.div`
    width: 65%;
    height: 35%;
    h1{
        color: #666666;
        font-size: 20px;
        line-height: 25px;
        transform: translate(7%, -60%);
    }
`;

const ButtonWrapper = styled.div`
    width: 50%;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translate(-7.5%, -30%);
    
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



const PoweredSection = () => {
    return(
        <Section>
            <Column></Column>
            <Column>
                <Title><h1>Powered by Fort</h1></Title>
                <Description><h1>Fortis is on a mission ipsum dolor sit amet, consectetur adipiscing elit. Amet a volutpat donec nisl, in turpis ridiculus tristique. Sed magna massa, cum scelerisque.</h1></Description>
                <ButtonWrapper>
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><TopButton>JOIN THE MOVEMENT</TopButton></motion.div>
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><BottomButton>LEARN MORE</BottomButton></motion.div>
                </ButtonWrapper>
            </Column>
        </Section>
    )
}

export default PoweredSection;