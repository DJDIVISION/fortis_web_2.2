import styled from "styled-components";
import {motion} from "framer-motion";

import Icon1 from "../../images/roadmap/01.png";
import Demo from "../../svg/demo.svg";

const Section = styled.div`
    width: 75vw;
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
        width: 80%;
        text-align: center;
        transform: translate(0, -50%);
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
    width: 24.5%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12), inset 0px 1px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(22px);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
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



const FeaturesSection = () => {
    return(
        <Section>
            <Title><h1>Fortis gateway features</h1></Title>
            <Grid>
                <Box>
                    <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                    <BoxTitle><h1>Customised Checkouts</h1></BoxTitle>
                    <BoxDescription><h1>Running an online boutique? Check. Managing a local restaurant? Fortis Gateway has you covered. Design your cryptocurrency checkout to fit your needs and your brand - and bring your customers closer to the future of finance.</h1></BoxDescription>
                    <BoxDemo><img src={Demo} alt="demo" /></BoxDemo>
                </Box>
                <Box>
                    <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                    <BoxTitle><h1>Invoices</h1></BoxTitle>
                    <BoxDescription><h1>Use Fortis Gateway to take care of all the receipts and paperwork to invoice your customers. All you have to worry about is serving your customers - we’ll handle the rest.</h1></BoxDescription>
                    <BoxDemo><img src={Demo} alt="demo" /></BoxDemo>
                </Box>
                <Box>
                    <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                    <BoxTitle><h1>Live API's</h1></BoxTitle>
                    <BoxDescription><h1>Create custom workflows and experiences with our live APIs. These APIs will let you exchange on the spot to stablecoins, Bitcoin, and many other cryptocurrencies when you receive payment.</h1></BoxDescription>
                    <BoxDemo><img src={Demo} alt="demo" /></BoxDemo>
                </Box>
                <Box>
                    <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                    <BoxTitle><h1>Business Reports</h1></BoxTitle>
                    <BoxDescription><h1>Built-in reporting makes Fortis Gateway a breeze to use. Put your data back in your own hands and learn how your customers have used cryptocurrency at your store.</h1></BoxDescription>
                    <BoxDemo><img src={Demo} alt="demo" /></BoxDemo>
                </Box>
            </Grid>
        </Section>
    )
}

export default FeaturesSection;