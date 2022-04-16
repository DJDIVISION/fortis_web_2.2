import styled from "styled-components";
import {motion} from "framer-motion";

import Labs from "../../svg/labs.svg";

const Section = styled.div`
    width: 100%;
    height: 65vh;
    display: flex;
`;

const Wrapper = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;

`;

const EmptyColumn = styled.div`
    width: 25%;
    height: 100%;
`;

const Column = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    width: 100%;
    height: 10%;
    img{
        transform: scale(1.2) translate(25%, 60%);
    }
`;

const Text = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-weight: 400;
        font-size: 62px;
        line-height: 70px;
    }
`;

const Description = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
    }
`;




const IdeasSection = () => {
    return(
        <Section>
            <Wrapper>
                <EmptyColumn />
                <Column>
                    <Title><img src={Labs} alt="title" /></Title>
                    <Text><h1>A new home for great ideas</h1></Text>
                    <Description><h1>Crypto moves fast. But our community innovates faster, together. Fortis Labs is our incubator - and it will let us revolutionise the future of finance. Built-in governance allows the most groundbreaking technologies to rise to the top and receive funding.</h1></Description>
                </Column>
            </Wrapper>
        </Section>
    )
}


export default IdeasSection;