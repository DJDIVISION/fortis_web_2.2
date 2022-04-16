import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {motion} from "framer-motion";
import FortisLogo from "../../svg/logo.svg";
import TopSphere from "../../images/home/TopSphere.svg";



const Nav = styled.nav`
    width: 1200px;
    height: 56px;
    display: inline-flex;
    align-items: center;
    position: absolute;
    top: 40px;
    left: 80px;
`;

const NavLogo = styled.div`
    height: 100%;
    width: 35%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 50px;
`;

const Logo = styled.div`
    width: 50px;
    height: 50px;
    img{
        width: 100%;
        display: block;
        object-fit: contain;
    }
`;

const Image = styled.div`
    height: 100%;
    width: 20%;
    img{
        transform: translate(10%, -40%);
        z-index: 1;
    }
`;

const Links = styled.div`
    display: inline-flex;
    width: 580px;
    height: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    z-index: 100;
    a{
        text-decoration: none;
    }
`;

const Button = styled(motion.div)`
    font-size: 14px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 100px;
    font-weight: 500;
    color: white;
    padding: 12px;
    margin: 0 5px;
    height: 40px;
    font-weight: 400;
`;

const OrangeButton = styled(motion.div)`
    font-size: 14px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: linear-gradient(97.87deg, #E30647 -28.9%, #FFAA0A 93.4%);
    border-radius: 100px;
    font-weight: 500;
    color: white;
    padding: 12px;
    margin: 0px 8px;
    height: 40px;
    font-weight: 400;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12), inset 0px 1px 2px rgba(255, 255, 255, 0.4);
`;

const Fortis = styled.h1`
    font-size: 26px;
    font-weight: 400;
    color: white;
    margin: 0 10px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;


const NavBar = () => {
    return(
        <Nav>
            <NavLogo>
            <Logo><img src={FortisLogo} alt="" /></Logo>
            <Fortis>FORTIS</Fortis>
            </NavLogo>
            <Image><img src={TopSphere} alt="sphere1" /></Image>
            <Links>
                <LinkR to="/"><Button style={{border: '1px solid whitesmoke'}}>HOME PAGE</Button></LinkR>
                <LinkR to="/about"><Button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>ABOUT</Button></LinkR>
                <LinkR to="/tokenomics"><Button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>TOKENOMICS</Button></LinkR>
                <LinkR to="/roadmap"><Button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>ROADMAP</Button></LinkR>
                <LinkR to="/roadmap"><OrangeButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>FORTIS EARN</OrangeButton></LinkR>
            </Links>
        </Nav>
    )
}

export default NavBar;

