import styled from "styled-components";
import {motion} from "framer-motion";
import {TopButtonSmart, BottomButtonSmart} from "./Elements";

import Cards from "../../images/home/Cards.png";
import Whatis from "../../svg/whatis.svg";

const Section = styled.div`
    max-width: 100vw;
    height: 540px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Top = styled.div`
    width: 85%;
    height: 50px;
    display: flex;
    align-items: center;
    img{
        transform: scale(1.2) translate(10%, 0);
    }
`;

const Desc = styled.div`
    width: 85%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 26px;
    line-height: 40px;
    font-weight: 400;
    
`;


const Buttons = styled.div`
    width: 90%;
    height: 200px;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-left: 10px;
`;


const MissionSmart = () => {
    return(
        <Section>
            <Top><img src={Whatis} alt="title" /></Top>
            <Desc>Fortis is on a mission ipsum dolor sit amet, consectetur adipiscing elit. Amet a volutpat donec nisl, in turpis ridiculus tristique. Sed magna massa, cum scelerisque.</Desc>
            <Buttons>
                <TopButtonSmart>WHITEPAPER</TopButtonSmart>
                <BottomButtonSmart>ECOSYSTEM</BottomButtonSmart>
            </Buttons>
        </Section>
    )
}

export default MissionSmart;