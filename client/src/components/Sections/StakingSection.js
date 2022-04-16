import styled from "styled-components";
import {motion} from "framer-motion";




const Section = styled.div`
    width: 70%;
    height: 150vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 15%;
`;

const Title = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 52px;
        color: white;
        font-weight: 400;
    }
`;

const Desc = styled.div`
    width: 60%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1{
        font-size: 18px;
        color: white;
        font-weight: 400;
    }
`;

const Grid = styled.div`
    width: 75%;
    height: 60%;
    display: flex;
    flex-direction: column;
`;

const FirstRow = styled.div`
    width: 100%;
    height: 14.285%;
    display: flex;
    h1{
        font-size: 18px;
        color: white;
        font-weight: 400;
        padding-left: 20px;
    }
`;

const ColumnLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: left;
`;

const ColumnRight = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    h1{
        margin-left: auto;
        margin-right: 20px;
    }
    h2{
        margin-left: auto;
        margin-right: 60px;
    }
`;

const Row = styled.div`
    width: 100%;
    height: 14.285%;
    display: flex;
    h1{
        font-size: 28px;
        color: white;
        font-weight: 400;
        padding-left: 30px;
    }
    h2{
        font-size: 28px;
        color: white;
        font-weight: 400;
        padding-left: 30px;
    }
`;

const Buttons = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translate(0, 35%);
`;

const TopButton = styled(motion.div)`
    width: 225px;
    height: 55px;
    font-size: 14px;
    font-weight: 500;
    background: white;
    background: linear-gradient(97.87deg, #E30647 -28.9%, #FFAA0A 93.4%);
    margin: 10px 0;
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-shadow: black -1px 2px, black -2px 2px;
`;

const BottomButton = styled(motion.div)`
     width: 225px;
    height: 55px;
    font-size: 14px;
    font-weight: 500;
    background: white;
    background: rgba(0, 0, 0, 0.16);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(22px);
    border-radius: 100px;
    margin: 10px 0;
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-shadow: black -1px 2px, black -2px 2px;
`;

const StakingSection = () => {
    return(
        <Section>
            <Title><h1>Staking Rewards</h1></Title>
            <Desc><h1>The FORT Staking feature will increase the current circulating supply by using an inflationary smart contract. This method is used to reward users that are staking FORT to support the project. The table below will give a better understanding of the Staking per year.</h1></Desc>
            <Grid>
                <FirstRow>
                    <ColumnLeft><h1>Year</h1></ColumnLeft>
                    <ColumnRight><h1>Min/Max Inflation *</h1></ColumnRight>
                </FirstRow>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <ColumnLeft><h1>2021</h1></ColumnLeft>
                    <ColumnRight><h2>~12%</h2></ColumnRight>
                </Row>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <ColumnLeft><h1>2022</h1></ColumnLeft>
                    <ColumnRight><h2>~10%</h2></ColumnRight>
                </Row>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <ColumnLeft><h1>2023</h1></ColumnLeft>
                    <ColumnRight><h2>~8%</h2></ColumnRight>
                </Row>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <ColumnLeft><h1>2024</h1></ColumnLeft>
                    <ColumnRight><h2>~6%</h2></ColumnRight>
                </Row>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <ColumnLeft><h1>2025</h1></ColumnLeft>
                    <ColumnRight><h2>~4%</h2></ColumnRight>
                </Row>
                <Row style={{borderBottom: '1px solid #666666'}}>
                    <ColumnLeft><h1>2026</h1></ColumnLeft>
                    <ColumnRight><h2>~2%</h2></ColumnRight>
                </Row>
            </Grid>
            <Buttons>
                <TopButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>ACQUIRE FORT</TopButton>
                <BottomButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>JOIN THE MOVEMENT</BottomButton>
            </Buttons>
        </Section>
    )
}


export default StakingSection;
