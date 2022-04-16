import styled from "styled-components";
import {motion} from "framer-motion";



const Section = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    width: 95%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 38px;
    color: white;
    font-weight: 400;
`;

const Desc = styled.div`
    width: 90%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    font-weight: 200;
`;



const SmartBurn = () => {
    return(
        <Section>
            <Title>Burn Mechanism</Title>
            <Desc>Every month we will burn FORT and other cryptocurrencies in the pools, with the FORT ’nomics feature. All transactions will be recorded, and will be able to be seen publicly. This will be reallocated back to the active users in the ecosystem.</Desc>
        </Section>
    )
}


export default SmartBurn;