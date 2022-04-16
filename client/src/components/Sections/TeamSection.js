import styled from "styled-components";
import {motion} from "framer-motion";

import MeetTeam from "../../svg/team.svg";
import CEO from "../../svg/CEO.svg";
import CTO from "../../svg/CTO.svg";
import COO from "../../svg/COO.svg";
import FounderImg from "../../images/about/founderImg.png";

const Section = styled.div`
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TeamTitle = styled.div`
    width: 60%;
    height: 100px;
    display: flex;
    align-items: center;
    img{
        transform: scale(1.2) translate(25%, 0%);
    }
`;

const Text = styled.div`
    width: 60%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-size: 36px;
        line-height: 45px;
        font-style: normal;
        font-weight: 400;
        transform: translate(2.5%, 0%);
    }
`;

const Grid = styled.div`
    height: 50vh;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 60px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 100%;
`;

const Image = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GridText = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(0, 0%);
    img{
        transform: scale(1.2);
    }
    h1{
        font-size: 20px;
        font-weight: 500;
        color: white;
    }
`;

const ImageHolder = styled.div`
    width: 150px;
    height: 150px;
    background: black;
    border-radius: 50%;
    background-size: cover;
`;



const TeamSection = () =>  {
    return(
        <Section>
            <TeamTitle><img src={MeetTeam} alt="title" /></TeamTitle>
            <Text><h1>We bring the best cryptocurrency developers, entrepreneurs, marketers, and blockchain experts together to make Fortis shine. Our team works around the globe to make Fortis better each and every day.</h1></Text>
            <Grid>
                <Column>
                    <Image><ImageHolder style={{backgroundImage: `url(${FounderImg})`}}></ImageHolder></Image>
                    <GridText><h1>James Gordon</h1></GridText>
                    <GridText><img src={CEO} alt="CEO" /></GridText>
                </Column>
                <Column>
                    <Image><ImageHolder style={{backgroundImage: `url(${FounderImg})`}}></ImageHolder></Image>
                    <GridText><h1>Adam Parker</h1></GridText>
                    <GridText><img src={CTO} alt="CTO" /></GridText>
                </Column>
                <Column>
                    <Image><ImageHolder style={{backgroundImage: `url(${FounderImg})`}}></ImageHolder></Image>
                    <GridText><h1>Cameron Diaz</h1></GridText>
                    <GridText><img src={COO} alt="COO" /></GridText>
                </Column>
            </Grid>
        </Section>
    )
}

export default TeamSection;