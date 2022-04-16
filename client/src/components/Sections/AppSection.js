import styled from "styled-components";
import {motion} from "framer-motion";

import App from "../../svg/app.svg";

const Section = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    align-items: center;
`;

const Column = styled.div`
    width: 50%;
    height: 100%;
    float: left;
`;

const Title = styled.div`
    width: 100%;
    height: 15%;
    img{
        transform: scale(1.2) translate(10%, 0);
    }
`;

const Text = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    align-items: center;
    h1{
        font-size: 56px;
        color: white;
        font-weight: 400;
        line-height: 60px;
    }
`;

const Description = styled.div`
    width: 60%;
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(0, 15%);
    h1{
        font-size: 20px;
        color: white;
        font-weight: 400;
        transform: translate(0, 10%);
    }
`;


const AppSection = () => {
    return(
        <Section>
            <Column></Column>
            <Column>
                <Title><img src={App} alt="title" /></Title>
                <Text><h1>Enabling seamless access to the Fortis ecosystem</h1></Text>
                <Description><h1>The first stop in our Fortis mission is developing the Fortis App - your portal to the crypto products and services you need. And it all takes place in a secure and easy-to-use environment.</h1></Description>
            </Column>
        </Section>
    )
}

export default AppSection;