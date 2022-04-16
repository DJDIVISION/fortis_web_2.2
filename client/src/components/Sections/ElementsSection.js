import styled from "styled-components";
import {motion} from "framer-motion";

import Icon1 from "../../images/roadmap/01.png";
import Demo from "../../svg/demo.svg";

const Section = styled.div`
    width: 90vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

const Title = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 38px;
        color: white;
        font-weight: 400;
        width: 35%;
        text-align: center;
        transform: translate(0, -25%);
    }
`;

const Grid = styled.div`
    display: flex;
    height: 75%;
    width: 100%;
    justify-content: space-between;
    transform: translate(0, 10%);
`;

const Box = styled.div`
    width: 19.5%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12), inset 0px 1px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(22px);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: filter 300ms;
    &:hover{
        filter: brightness(1.2);
        background: #484a4d;
    }
    
`;

const BoxIcon = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    img{
        align-items: center;
    }
`;

const BoxTitle = styled.div`
    width: 80%;
    height: 12.5%;
    display: flex;
    align-items: center;
    h1{
        font-size: 20px;
        color: white;
        font-weight: 400;
    }
`;

const BoxDemo = styled.div`
    width: 80%;
    height: 12.5%;
    display: flex;
    align-items: center;
    cursor: pointer;
    h1{
        font-size: 20px;
        color: white;
        font-weight: 400;
    }
`;

const BoxDescription = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    align-items: center;
    h1{
        font-size: 14px;
        color: whitesmoke;
        font-weight: 400;
        line-height: 20px;
    }
`;



const ElementsSection = () => {
    return(
        <Section>
            <Title><h1>Five key elements make up the Fortis App</h1></Title>
            <Grid> 
                <Box>
                    <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                    <BoxTitle><h1>Fiat On-Ramp</h1></BoxTitle>
                    <BoxDescription><h1>Convert your fiat currency to cryptocurrency with the tap of a button with the Fiat On-Ramp. Use your debit and credit cards, as well as local bank transfers and mobile payment systems to modernise your money.</h1></BoxDescription>
                    <BoxDemo><img src={Demo} alt="demo" /></BoxDemo>
                </Box>
                <Box>
                    <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                    <BoxTitle><h1>Fort'nomics</h1></BoxTitle>
                    <BoxDescription><h1>The Fortis App is powered by Fort’nomics, our unique algorithm that is fine-tuned to reward FORT holders. By redistributing fees to active holders, we create a stronger Fortis community and incentivize crypto adoption.</h1></BoxDescription>
                    <BoxDemo><img src={Demo} alt="demo" /></BoxDemo>
                </Box>
                <Box>
                    <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                    <BoxTitle><h1>Debit Cards</h1></BoxTitle>
                    <BoxDescription><h1>Once you’ve converted your Fiat to crypto, use the Fortis Card to spend it wherever you need. Feel the power of instant transactions without paying annual fees. And you’ll even get rewarded for being loyal to your Fortis Card.</h1></BoxDescription>
                    <BoxDemo><img src={Demo} alt="demo" /></BoxDemo>
                </Box>
                <Box>
                    <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                    <BoxTitle><h1>Lending Platform</h1></BoxTitle>
                    <BoxDescription><h1>The world’s bankless population can be better served by cryptocurrency-based lending. Fortis Lend will give the world a secure platform to pledge their crypto as collateral when you need it most.</h1></BoxDescription>
                    <BoxDemo><img src={Demo} alt="demo" /></BoxDemo>
                </Box>
                <Box>
                    <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                    <BoxTitle><h1>App Explorer</h1></BoxTitle>
                    <BoxDescription><h1>Use these financial tools and decentralised applications through one secure platform - the Fortis Explorer. We’re working to ensure that nobody can control or restrict access to your finances with Fortis.</h1></BoxDescription>
                    <BoxDemo><img src={Demo} alt="demo" /></BoxDemo>
                </Box>
            </Grid>
        </Section>
    )
}

export default ElementsSection;