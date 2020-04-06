import React from "react";

//import components
import Nav from "./Nav";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Footer from "./Footer.js";

//import images/icons
import face from "./face.png";
import twit from "./twit.png";
import link from "./link.png";

//styling
import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Cont = styled.div`
    margin: 0 auto;
    margin-top: 3%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    @media all and (max-width: 375px){
        flex-flow: row-reverse wrap;
    }
`;

const Title = styled.h1`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 8%;
    @media all and (max-width: 800px){
        margin-top: 12%;
        margin-bottom: 4%;
    }
    @media all and (max-width: 500px){
        margin-top: 30%;
    }
    @media all and (max-width: 375px){
        font-size: 1.75rem;
        margin-top: 40%;
        margin-bottom: 10%;
    }
`;

const Middle = styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 2%;
    width: 10%;
    @media all and (max-width:1280px){
        margin-left: 43%;
    }
    @media all and (max-width: 800px){
        margin-left: 39%;
    }
    @media all and (max-width: 500px){
        margin-left: 33%;
        margin-top: 8%;
    }
    form {
        display: flex;
        flex-flow: column nowrap;
        margin: 0 auto;
    }
    label {
        display: flex;
        flex-flow: column nowrap;
        text-align: center;
        margin-top: 15%;
        margin-bottom: 10%;
    }
    @media all and (max-width: 375px){
        margin-left: 25%;
        margin-top: 10%;
    }
`;

const Contact = () => {
    return (
        <Wrap>
        <div>
        <MessengerCustomerChat
        pageId="227644161625177"
        appId="101617714837948"
      />
        </div>
            <Nav />   
                <Title>Contact</Title>
            <Cont>
                <a href="https://www.linkedin.com/in/carl-sachs-198780141/"><img src={link} alt="linkedin"/></a>
                <a href="https://www.facebook.com/carl.sachs"><img src={face} alt="facebook"/></a>
                <a href="https://twitter.com/CarlSachs3"><img src={twit} alt="twitter"/></a>
            </Cont>
            <Middle>
                <form action="https://formspree.io/xaydyeaa" method="POST">
                    <label> Name:</label>
                        <input type="text" name="name" required/>
                    <label> Email:</label>
                        <input type="email" name="_replyto" required/>
                    <label>Phone:</label>
                        <input type="tel" name="phone"/>
                        <label></label>
                    <input type="submit" value="Send" />
                </form>
            </Middle>
            <div>
                <Footer />
            </div>
        </Wrap>
    )
}
export default Contact;