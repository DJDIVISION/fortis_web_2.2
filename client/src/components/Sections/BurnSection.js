import styled from "styled-components";
import {motion} from "framer-motion";



const Section = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Column = styled.div`
    width: 50%;
    height: 100%;
`;

const Title = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    h1{
        font-size: 72px;
        color: white;
        font-weight: 500;
    }
`;

const Desc = styled.div`
    width: 100%;
    height: 70%;
    h1{
        font-size: 18px;
        color: white;
        font-weight: 400;
        line-height: 30px;
        width: 60%;
        margin-left: 5px;
    }
`;

const BurnSection = () => {
    return(
        <Section>
            <Column></Column>
            <Column>
                <Title><h1>Burn Mechanism</h1></Title>
                <Desc><h1>Every month we will burn FORT and other cryptocurrencies in the pools, with the FORT ’nomics feature. All transactions will be recorded, and will be able to be seen publicly. This will be reallocated back to the active users in the ecosystem.</h1></Desc>
            </Column>
        </Section>
    )
}

export default BurnSection;

