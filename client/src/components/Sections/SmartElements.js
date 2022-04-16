import {useEffect, useState, useRef} from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";

import Icon1 from "../../images/roadmap/01.png";
import Demo from "../../svg/demo.svg";

const Section = styled.div`
    width: 100vw;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
`;

const Text = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 32px;
    line-height: 40px;
    color: white;
    font-weight: 500;
`;

const Grid = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Carousel = styled(motion.div)`
    cursor: grab;
    height: 350px;
    width: 95vw;
    overflow: hidden;
`;

const InnerCarousel = styled(motion.div)`
    display: flex;
    height: 350px;
    width: 95vw;
`;

const Item = styled.div`
    min-width: 300px;
    min-height: 350px;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12), inset 0px 1px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(22px);
    border-radius: 3px;
    display: flex;
    margin: 0 10px;
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


const SmartElements = () => {

    const [width, setWidth] = useState(0);
    const carroussel = useRef();

    useEffect(() => {
        //console.log(carroussel.current.scrollWidth, carroussel.current.offsetWidth);
        setWidth(carroussel.current.scrollWidth - carroussel.current.offsetWidth);
    }, [])

    return(
        <Section>
            <Text>Five key elements make up the Fortis App</Text>
            <Grid>
                <Carousel ref={carroussel}>
                    <InnerCarousel drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: 'grabbing'}}>
                            <Item>
                            <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                            <BoxTitle><h1>Fiat On-Ramp</h1></BoxTitle>
                            <BoxDescription><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></BoxDescription>
                            <BoxDemo><img src={Demo} alt="demo" /></BoxDemo>
                            </Item>
                            <Item>
                            <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                            <BoxTitle><h1>Fort'nomics</h1></BoxTitle>
                            <BoxDescription><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></BoxDescription>
                            <BoxDemo><img src={Demo} alt="demo" /></BoxDemo>
                            </Item>
                            <Item>
                            <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                            <BoxTitle><h1>Debit Cards</h1></BoxTitle>
                            <BoxDescription><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></BoxDescription>
                            <BoxDemo><img src={Demo} alt="demo" /></BoxDemo>
                            </Item>
                            <Item>
                            <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                            <BoxTitle><h1>Lending Platform</h1></BoxTitle>
                            <BoxDescription><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></BoxDescription>
                            <BoxDemo><img src={Demo} alt="demo" /></BoxDemo>
                            </Item>
                            <Item>
                            <BoxIcon><img src={Icon1} alt="icon1" /></BoxIcon>
                            <BoxTitle><h1>App Explorer</h1></BoxTitle>
                            <BoxDescription><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1></BoxDescription>
                            <BoxDemo><img src={Demo} alt="demo" /></BoxDemo>
                            </Item>
                    </InnerCarousel>
                </Carousel>
            </Grid>
        </Section>
    )
}

export default SmartElements;