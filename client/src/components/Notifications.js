import React, {Component} from "react";
import styled from "styled-components";

const Notification = styled.div`
    border-radius: 4px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: .35s;
    //transform: translateY(100%);

    .visible{
        transform: translateY(0);
    }

    .success{
        background-color: green;
    }

    .warning{
        background-color: orange;
    }

    .danger{
        background-color: red;
    }

    img{
        justify-self: center;
        align-items: center;
        width: 40px;
        margin: 10px;
    }

    p{
        color: white;
        font-weight: 500;
        align-self: center;
        padding: 10px;
        width: 45%;
    }

    &:hover{
        border-color: black;
    }
`;



class Notifications extends Component {
    render() {
        return(
            <Notification className = {`notification ${this.props.level} ${this.props.visible ? " visible" : ""}`}>
                <img src={this.props.src} alt={this.props.alt} />
                <p>{this.props.message}</p>
            </Notification>
        )
    }
}

export default Notifications;