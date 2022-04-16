import styled from "styled-components";
import {motion} from "framer-motion";

import Usage from "../../svg/usage.svg";

const Section = styled.div`
    width: 70%;
    height: 175vh;
    display: flex;
    flex-direction: column;
    margin: 0 15%;
`;

const Title = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    img{
        transform: scale(1.2);
    }
`;

const Text = styled.div`
    width: 70%;
    height: 15%;
    h1{
        color: white;
        font-size: 32px;
        line-height: 120%;
        font-style: normal;
        font-weight: 400;
    }
`;

const FirstRow = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const FirstRowTitle = styled.div`
    width: 100%;
    height: 40%;
    h1{
        width: 50%;
        color: white;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        margin-left: 470px;
        transform: translate(0%, 50%);
    }
`;

const FirstRowDesc = styled.div`
    width: 100%;
    height: 60%;
    h1{
        width: 30%;
        color: white;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        margin-left: 470px;
        transform: translate(0%, -35%);
    }
`;

const SecondRow = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SecondRowFirstTitle = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    h1{
        width: 50%;
        color: white;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        transform: translate(15%, 200%);
    }
`;

const SecondRowFirstDesc = styled.div`
    width: 100%;
    height: 50%;
    h1{
        width: 60%;
        color: white;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        text-align: right;
        transform: translate(-27%, 3%);
    }   
`;

const SecondRowSecTitle = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    h1{
        width: 50%;
        color: white;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        transform: translate(110%, 200%);
    }
`;

const SecondRowSecDesc = styled.div`
    width: 100%;
    height: 50%;
    h1{
        width: 60%;
        color: white;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        transform: translate(92%, 3%);
    }   
`;

const RowColumn = styled.div`
    width: 50%;
    height: 100%;
`;

const ThirdRow = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ThirdRowTitle = styled.div`
    width: 100%;
    height: 10%;
    h1{
        width: 50%;
        color: white;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        margin-left: 465px;
        margin-top: 245px;
        
    }
`;

const ThirdRowDesc = styled.div`
    width: 100%;
    height: 50%;
    h1{
        width: 30%;
        color: white;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        margin-top: 245px;
        margin-left: 465px;
        
    }
`;

const Buttons = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translate(0, 25%);
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


const GraphSection = () => {
    return(
        <Section>
            <Title><img src={Usage} alt="title" /></Title>
            <Text><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1></Text>
            <FirstRow>
                <FirstRowTitle><h1>Admin & Business Development</h1></FirstRowTitle>
                <FirstRowDesc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid.</h1></FirstRowDesc>
            </FirstRow>
            <SecondRow>
                <RowColumn>
                    <SecondRowFirstTitle><h1>Emergency Reserve</h1></SecondRowFirstTitle>
                    <SecondRowFirstDesc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid.</h1></SecondRowFirstDesc>
                </RowColumn>
                <RowColumn>
                    <SecondRowSecTitle><h1>Product development</h1></SecondRowSecTitle>
                    <SecondRowSecDesc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid.</h1></SecondRowSecDesc>
                </RowColumn>
            </SecondRow>
            <ThirdRow>
                <ThirdRowTitle><h1>Marketing & Community Growth</h1></ThirdRowTitle>
                <ThirdRowDesc><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid.</h1></ThirdRowDesc>
            </ThirdRow>
            <Buttons>
                <TopButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>BURN MECHANISM</TopButton>
                <BottomButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>STAKING REWARDS</BottomButton>
            </Buttons>
        </Section>
    )
}


export default GraphSection;