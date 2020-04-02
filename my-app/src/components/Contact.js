import React from "react";

//import components
import Nav from "./Nav";
import Footer from "./"

//import images/icons
import face from "./face.png";
import drib from "./drib.png";
import twit from "./twit.png";
import link from "./link.png";

//styling
import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    h1 {
    }
`;

const Cont = styled.div`
    margin: 0 auto;
    margin-top: 5%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

const Title = styled.h1`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 8%;
`;

const Middle = styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 5%;
    width: 10%;
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
`;

const Contact = () => {
    return (
        <Wrap>
            <Nav />   
                <Title>Contact</Title>
            <Cont>
                <a href="https://www.linkedin.com/in/carl-sachs-198780141/"><img src={link} /></a>
                <a href="https://www.facebook.com/carl.sachs"><img src={face} /></a>
                <a href="https://twitter.com/CarlSachs3"><img src={twit} /></a>
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
        </Wrap>
    )
}
export default Contact;