import React from "react";

//IMPORTING COMPONENTS
import Nav from "./Nav.js";
import Profile from "../images/Profile.png";

//import images
import rencen from "./rencen.jpg";
import rencendark from "./rencendark.jpg";
import coach from "./coach.jpg";

//STYLING
import styled from "styled-components";
import Fade from "react-reveal/Fade";

//STYLED COMPONENTS

const Top = styled.div`
    display: flex;
    width: 100%;
`;

const TopSec = styled.div`
    a {
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
`;

const MiddleSec = styled.div`
    h2 {
        text-align: center;
        margin-top: 2%;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8%;
    font-size: 2rem;
    padding: 1%;
`;

const Picture = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3%;
    img {
        height: 400px;
    }
`;

const AboutMe = () => {
    return (
        <div>
        <Top>
            <Nav />
        </Top>
        <TopSec>
            <Title>About Me</Title>
            <a href="https://www.linkedin.com/in/carl-sachs/">Check out my Resume</a>
            <Picture>
                <img src={rencen} />
                <img src={coach} />
                <img src={rencendark} />
            </Picture>
        </TopSec>
        <MiddleSec>
            <Fade top>
                <h2>Life Before Lambda</h2>
            </Fade>
        </MiddleSec>
        </div>
    )

}

export default AboutMe;