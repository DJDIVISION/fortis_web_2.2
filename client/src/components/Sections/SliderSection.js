import styled from "styled-components";
import {motion} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import Powered from "../../svg/powered.svg";
import arrowLeft from "../../images/tokenomics/arrowLeft.png";
import arrowRight from "../../images/tokenomics/arrowRight.png";
import Box1 from "../../images/roadmap/box1.png";
import Box2 from "../../images/roadmap/box2.png";
import Box3 from "../../images/roadmap/box3.png";
import IconUtility from "../../images/roadmap/IconUtility.png";
import IconUsage from "../../images/roadmap/IconUsage.png";
import IconBurn from "../../images/roadmap/IconBurn.png";
import IconStaking from "../../images/roadmap/IconStaking.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Section = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TopRow = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    
`;

const Slider = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .swiper {
        width: 80%;
        height: 90%;
        @media screen and (max-width: 768px){
            width: 98%;
            height: 100vh;
        }
    }

    .swiper-slide {
        
        background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        flex-direction: column;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .swiper-pagination-bullets {
        transform: translate(0, 50%);
        position: absolute;
    }

    .swiper-button-next{
        transform: translate(-175%, 0);
        width: 50px;
        height: 50px;
        background: whitesmoke;
        border-radius: 50%;
        background-image: url(${arrowRight});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 25px auto;

        &:after{
            display: none;
        }

    }

    .swiper-button-prev{
        transform: translate(175%, 0);
        width: 50px;
        height: 50px;
        background: whitesmoke;
        border-radius: 50%;
        background-image: url(${arrowLeft});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 25px auto;

        &:after{
            display: none;
        }
    }
`;

const RowColumn = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    height: 40%;
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        transform: scale(1.2) translate(20%, 0);
    }
`;

const Text = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(10%, 0);
    h1{
        color: white;
        font-size: 38px;
        font-weight: 400;
        width: 70%;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 75px;
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

const Empty = styled.div`
    width: 100%;
    height: 50%;
    img{
        display: block;
        width: 25%;
       margin-left: auto; 
       margin-right: auto;
       margin-top: 80px;
    }
`;



const GridTitle = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-weight: 500;
        font-size: 20px;
    }
`;

const GridDesc = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1{
        color: white;
        font-weight: 200;
        font-size: 14px;
        transform: translate(0, -10%);
    }
`;


const SliderSection = () => {
    return(
        <Section>
            <TopRow>
                <RowColumn>
                    <Title><img src={Powered} alt="title" /></Title>
                    <Text><h1>Find out where Fort comes from & what it’s for!</h1></Text>
                </RowColumn>
                <RowColumn>
                <ButtonWrapper>
                <TopButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>ACQUIRE FORT</TopButton>
                <BottomButton whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>JOIN THE MOVEMENT</BottomButton>
                </ButtonWrapper>
                </RowColumn>
            </TopRow>
            <Slider>
            <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{backgroundImage: `url(${Box2})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
                            <Empty><img src={IconUtility} alt="icon1" /></Empty>
                            <GridTitle><h1>Utility</h1></GridTitle>
                            <GridDesc><h1>Use your FORT within the Fortis App, Fortis Gateway, and Fortis Labs.</h1></GridDesc>
                        </SwiperSlide>
                        <SwiperSlide style={{backgroundImage: `url(${Box1})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
                            <Empty><img src={IconUsage} alt="icon1" /></Empty>
                            <GridTitle><h1>Allocation & Usage</h1></GridTitle>
                            <GridDesc><h1>FORT has a strict limit of 1 billion tokens.</h1></GridDesc>
                        </SwiperSlide>
                        <SwiperSlide style={{backgroundImage: `url(${Box3})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
                            <Empty><img src={IconBurn} alt="icon1" /></Empty>
                            <GridTitle><h1>Burn Mechanism</h1></GridTitle>
                            <GridDesc><h1>A monthly burn of FORT means that active users and holders are rewarded. Subject to conditions.</h1></GridDesc>
                        </SwiperSlide>
                        <SwiperSlide style={{backgroundImage: `url(${Box3})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
                            <Empty><img src={IconStaking} alt="icon1" /></Empty>
                            <GridTitle><h1>Staking & Rewards</h1></GridTitle>
                            <GridDesc><h1>Fortis allows you to earn passive income by rewarding holders through smart contract technology.</h1></GridDesc>
                        </SwiperSlide>
                </Swiper>
            </Slider>
        </Section>
    )
}

export default SliderSection;