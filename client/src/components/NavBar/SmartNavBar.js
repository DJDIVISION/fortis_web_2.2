import { useState, useEffect }  from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import Logo from "../../svg/logo.svg";
import MenuIcon from "../../svg/menuIcon.svg";
import CloseIcon from "../../svg/closeIcon.svg";


const Nav = styled.div`
    width: 90vw;
    margin: 0 5vw;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    padding-top: 24px;
    top: ${({ scrollNavDown }) => (scrollNavDown ? "-100px" : "0")};
    z-index: 500;
    transition: 0.8s all ease;
`;

const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    
`;

const SmartLogo = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    img{
        width: 80%;
        display: block;
        object-fit: contain;
    }
`;



const Fortis = styled.h1`
    font-size: 22px;
    font-weight: 400;
    color: white;
    margin: 0 5px;
    z-index: 100;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const DropDown = styled(motion.div)`
    position: absolute;
    height: 80vh;
    width: 100%;
    top: 0;
    background: rgba(24, 27, 36, 0.72);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(22px);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;


const Row = styled.div`
    height: 10vh;
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    //margin-right: 20px;
`;

const Button = styled(motion.div)`
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 54px;
    font-weight: 500;
    color: white;
    padding: 12px;
    font-weight: 400;
`;

const OrangeButton = styled(motion.div)`
    font-size: 20px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: linear-gradient(97.87deg, #E30647 -28.9%, #FFAA0A 93.4%);
    border-radius: 54px;
    font-weight: 500;
    color: white;
    padding: 12px;
    font-weight: 400;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12), inset 0px 1px 2px rgba(255, 255, 255, 0.4);
`;


const SmartNavBar = () => {

    const [scrollNavDown, setScrollNavDown] = useState(false);

    const changeNavDown = () => {
        if(window.scrollY >= 50) {
            setScrollNavDown(true)
        } 
        else {
            setScrollNavDown(false)
        }
    }

    useEffect(() => {
       window.addEventListener('scroll', changeNavDown) 
    }, []);

    const [active, setActive] = useState("menuOne");

    let animate = {};
    if(active === "menuOne") animate = { y: '-70vh', display: 'none' };
    else if (active === "menuTwo") animate = {  y : 0 };

    const transition = {
        type: 'tween',
        duration: 0.2
    }

    const icon = active === "menuOne" ? <img src={MenuIcon} alt="" /> : <img src={CloseIcon} alt="" style={{marginRight: '5px', marginTop: '5px'}} />

    /* const lightbox = document.createElement('div');
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox); */

    const Switch = () => {
        if(active === "menuOne"){
            setActive("menuTwo");
            
        } else if(active === "menuTwo"){
            setActive("menuOne");
            
        }
    }

    return(
        <>
        <Nav scrollNavDown={scrollNavDown}>
            <Wrapper>
                <SmartLogo><img src={Logo} alt="" /></SmartLogo>
                <Fortis>FORTIS</Fortis>
            </Wrapper>
            <div onClick={Switch}>{icon}</div>
        </Nav>
        <DropDown animate={animate} transition={transition}>
            <Row>
               
            </Row>
            <Row>
            <LinkR to="/" style={{textDecoration: 'none'}}><Button style={{border: '1px solid whitesmoke'}}>HOME PAGE</Button></LinkR>
            </Row>
            <Row>
            <LinkR to="/aboutSmart" style={{textDecoration: 'none'}}><Button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>ABOUT</Button></LinkR>
            </Row>
            <Row>
            <Row><LinkR to="/tokenomicsSmart" style={{textDecoration: 'none'}}><Button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>TOKENOMICS</Button></LinkR></Row>
            </Row>
            <Row>
            <LinkR to="/roadmapSmart" style={{textDecoration: 'none'}}><Button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>ROADMAP</Button></LinkR>
            </Row>
            <Row>
            <LinkR to="#" style={{textDecoration: 'none'}}><OrangeButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>FORTIS EARN</OrangeButton></LinkR>
            </Row>
        </DropDown>
        </>
    )
}

export default SmartNavBar;