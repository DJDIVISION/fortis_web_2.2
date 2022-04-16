import styled from "styled-components";
import {motion} from "framer-motion";

import Gateway from "../../svg/gateway.svg";

const Section = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Column = styled.div`
    width: 40%;
    height: 100%;
`;

const Title = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    img{
        transform: translate(10%, 0) scale(1.2);
    }
`;

const Text = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    h1{
        color: white;
        font-weight: 400;
        font-size: 64px;
        line-height: 80px;

    }
`;

const Description = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    h1{
        font-size: 20px;
        font-weight: 400;
        color: white;
        width: 70%;
        transform: translate(0, 10%);
    }
`;

const GatewaySection = () => {
    return(
        <Section>
            <Column>
                <Title><img src={Gateway} alt="" /></Title>
                <Text><h1>Accept crypto withnin minutes</h1></Text>
                <Description><h1>Businesses are interested in accepting crypto as payment, and shoppers want to pay with their crypto. The Fortis Gateway is the infrastructure that will make this future possible for merchants and consumers around the world.</h1></Description>
            </Column>
            <Column></Column>
        </Section>
    )
}

export default GatewaySection;