import React from "react";

//IMPORTING COMPONENTS
import Nav from "./Nav.js";
import Profile from "../images/Profile.png";

//STYLING
import styled from "styled-components";
import Fade from "react-reveal";

//STYLED COMPONENTS

const Top = styled.div`
    display: flex;
`;

const Title = styled.div`
    display: flex;
    border: 1px solid black;
    justify-content: center;
    margin-top: 8%;
    font-size: 2rem;
    padding: 1%;
`;

const Description = styled.div`
    display: flex;
    border: 1px solid black;
    justify-content: center;
    margin-top 1%;
    font-size: 1.2rem;
`;

const Picture = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3%;
    img {
        border-radius: 50%;
    }
`;

const AboutMe = () => {
    return (
        <div>
        <Top>
            <Nav />
        </Top>
        <div>
            <Title>About Me</Title>
            <Description>
                Scroll to find out about my journey before Lambda School, and to get a glimpse of what I learned going through Lambda.
            </Description>
            <Picture>
                <img src={Profile} />
            </Picture>
        </div>
        </div>
    )

}

export default AboutMe;