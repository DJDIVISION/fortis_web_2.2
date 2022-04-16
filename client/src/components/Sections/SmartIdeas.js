import styled from "styled-components";
import {motion} from "framer-motion";

import Labs from "../../svg/labs.svg";

const Section = styled.div`
    width: 100%;
    height: 780px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    border: 1px solid white;
`;
const Empty = styled.div`
    width: 100%;
    height: 50px;
`;

const Logo = styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    border: 1px solid white;
    img{
        transform: scale(1.2) translate(10%, 0);   
    }
`;

const Title = styled.div`
    width: 90%;
    height: 125px;
    display: flex;
    align-items: center;
    font-size: 42px;
    color: white;
    font-weight: 500;
    border: 1px solid white;
`;

const Desc = styled.div`
    width: 90%;
    height: 175px;
    font-size: 18px;
    color: white;
    display: flex;
    align-items: center;
    font-weight: 200;
    line-height: 25px;
    border: 1px solid white;
`;


const SmartIdeas = () => {
    return(
        <Section>
            <Empty />
            <Logo><img src={Labs} alt="" /></Logo>
            <Title>A new home for great ideas</Title>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Desc>
        </Section>
    )
}


export default SmartIdeas;