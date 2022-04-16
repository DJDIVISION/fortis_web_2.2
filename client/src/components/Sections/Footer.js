import {useState, Component} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import PropTypes from "prop-types";
import Notifications from "../Notifications";

import BG from "../../images/Footer.png";
import Movement from "../../svg/movement.svg";
import xmark from "../../images/x-mark.svg";
import check from "../../images/check-mark.svg";
import exclamation from "../../images/exclamation.svg";


const Section = styled.div`
    width: 100%;
    height: 820px;
    background: url(${BG}), black;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CopyRight = styled.div`
    width: 100%;
    height: 100px;
    background: black;
`;

const Empty = styled.div`
    width: 100%;
    height: 110px;
    border: 1px solid white;
`;

const Logo = styled.div`
    width: 100%;
    height: 50px;
    border: 1px solid white;
    display: flex;
    align-items: center; 
    justify-content: center;
    
    img{
        transform: scale(1.2);
    }
`;

const Title = styled.div`
    width: 60%;
    height: 250px;
    border: 1px solid white;
    display: flex;
    align-items: center; 
    justify-content: center;
    font-size: 42px;
    color: white;
    line-height: 50px;
    font-weight: 500;
    text-align: center;
`;

const Buttons = styled.div`
    width: 80%;
    height: 100px;
    display: flex;
    align-items: center; 
    justify-content: center;
`;

const Form = styled.form`
    width: 400px;
    height: 60px;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12), inset 0px 1px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(22px);
    border-radius: 100px;
    display: inline-flex;
    &:focus{
        border: none;
    }

`;

const InputMail = styled.input`
    width: 70%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 100px 0 0 100px;
    border: none;
    font-size: 20px;
    padding-left: 20px;
    &:focus{
        border: none;
    }
`;

const ButtonContainer = styled.div`
    width: 30%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 0px 100px 100px 0;
`;

const Button = styled.button`
    width: 95%;
    height: 95%;
    border-radius: 100px;
    background: linear-gradient(97.87deg, #E30647 -28.9%, #FFAA0A 93.4%);
    font-size: 18px;
    color: white;
    display: flex;
    align-items: center; 
    justify-content: center;
`;

class MailchimpForm extends Component {

    state = {
        email: ""
    }

    handleSubmit = e => {
        e.preventDefault();

        if(this.state.email) {
            fetch(`/api/memberAdd?email=${this.state.email}`)
            .then(res => res.json())
            .then(json => {
                if(json.status === "subscribed"){
                    this.props.configureNotification("success")
                } else if(json.title === "Member Exists"){
                    this.props.configureNotification("warning") 
                } else {
                    this.props.configureNotification("danger")
                }
                this.props.showNotification();
            })
            .catch(err => {
                console.log("error", err)
            })

            this.setState({ email: "" });
        }
    }

    handleChange = e => {
       this.setState({ email: e.target.value.trim() });
    }

    render() {

        const { placeholder, buttonText } = this.props;

        return(
            <Form onSubmit={this.handleSubmit}>
                <InputMail 
                name="email"
                type="email"
                placeholder={placeholder}
                onChange={this.handleChange}
                value={this.state.email}/>
                <ButtonContainer>
                <Button type="submit">{buttonText}</Button>
                </ButtonContainer>
            </Form>
        )
    }
}


const TextContainer = ({src, alt, message, visible, level}) => {
    return(
        <>
        <Title>Fortis is a project powered by its community and we are constatly expanding our #Fortis Fam</Title>
        <Notifications src={src} alt={alt} message={message} visible={visible} level={level}/>
        </>
    )
}


class Footer extends Component {

    state = {
        subscribe: {
            placeholder: "Enter Email",
            buttonText: "SEND"
        },
        notification: {
           src: "",
           alt: "",
           message: "",
           level: "",
           visible: false,
        }
    }

    configureNotification = level => {
        const notification = { ...this.state.notification };
        notification.level = level;
        if(level === "success"){
            notification.src = check;
            notification.alt = "Check Mark";
            notification.message= "Thank you for subscribing to our mailing list. You will be receiving one email shortly.";
        } else if(level === "warning"){
            notification.src = xmark;
            notification.alt = "Exclamation Point";
            notification.message= "The email you entered is already on our mailing list. Thank you for joining the movement!";
        } else {
            notification.src = xmark;
            notification.alt = "X Mark";
            notification.message= "There was an issue with your email validation. Please check your email and try again";
        }
        this.setState({ notification });
    };


    showNotification = () => {
        const notification = { ...this.state.notification };
        notification.visible = true;
        this.setState({ notification }, () => {
          setTimeout(() => {
            notification.visible = false;
            this.setState({ notification });
          }, 3000);
        });
      };

    render(){

        const { subscribe, notification } = this.state;

        return(
            <>
            <Section>
                <Empty />
                <Logo><img src={Movement} alt="title" /></Logo>
                <TextContainer src={notification.src} alt={notification.alt} message={notification.message} level={notification.level} visible={notification.visible}/>
                <Buttons>
                    <MailchimpForm placeholder={subscribe.placeholder} buttonText={subscribe.buttonText} showNotification={this.showNotification} configureNotification={this.configureNotification}/>
                </Buttons>
            </Section>
            <CopyRight></CopyRight>
            </>
        )
    }
};

/* Footer.propTypes = {
    placeholder: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    configureNotification: PropTypes.func.isRequired,
    showNotification: PropTypes.func.isRequired,
    changeLogoSpeed: PropTypes.func.isRequired
}; */


export default Footer;