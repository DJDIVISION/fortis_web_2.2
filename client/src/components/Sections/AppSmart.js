import styled from "styled-components";
import {motion} from "framer-motion";

import App from "../../svg/app.svg";

const Section = styled.div`
    width: 100vw;
    height: 850px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
`;

const Logo = styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    img{
        transform: scale(1.2) translate(10%, 0);
    }
`;

const Title = styled.div`
    width: 90%;
    height: 150px;
    display: flex;
    align-items: center;
    font-size: 36px;
    line-height: 40px;
    color: white;
    font-weight: 400;
`;

const Desc = styled.div`
    width: 90%;
    height: 225px;
    font-size: 18px;
    color: white;
    font-weight: 200;
    line-height: 30px;
`;

const Empty = styled.div`
    width: 100%;
    height: 425px;
`;

const AppSmart = () => {
    return(
        <Section>
            <Logo><img src={App} alt="" /></Logo>
            <Title>Enabling seamless access to the Fortis ecosystem</Title>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Desc>
            <Empty />
        </Section>
    )
}


export default AppSmart;