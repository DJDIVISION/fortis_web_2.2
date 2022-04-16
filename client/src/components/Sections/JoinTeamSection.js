import styled from "styled-components";
import {motion} from "framer-motion";

import LearnMore from "../../svg/learnMore.svg";

const Section = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
`;

const Title = styled.div`
    width: 50%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 64px;
        color: white;
        font-weight: 500;
    }
`;

const Description = styled.div`
    width: 35%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1{
        font-size: 20px;
        color: white;
        font-weight: 200;
    }
`;

const Row = styled.div`
    width: 45%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InnerRow = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #666666;
    h1{
        color: white;
        font-size: 20px;
        font-weight: 400;
        span{
            color: #666666;
        }
    }
`;






const JoinTeamSection = () => {
    return(
        <>
        <Section>
            <Title><h1>Join the Team</h1></Title>
            <Description><h1>As Fortis grows, we commit to bringing talented new members on board to carry out our vision. Can you help us build the future of finance?</h1></Description>
            <Row>
                <InnerRow><h1>Web Developer <span> - Full Time</span></h1><img src={LearnMore} alt="learn" /></InnerRow>
            </Row>
            <Row>
                <InnerRow><h1>Technical Developer developer<span> - Full Time</span></h1><img src={LearnMore} alt="learn" /></InnerRow>
            </Row>
        </Section>
        </>
    )
}

export default JoinTeamSection;