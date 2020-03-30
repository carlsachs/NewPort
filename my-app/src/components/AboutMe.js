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
import Typist from "react-typist"

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
        text-decoration: none;
    }
`;

const MiddleSec = styled.div`
    h2 {
        text-align: center;
        margin-top: 2%;
    }
    p {
        text-align: center;
        padding-right: 3%;
        padding-left: 3%;
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
                <Fade right>
                <a href="https://www.linkedin.com/in/carl-sachs/">Check out my Resume</a>
                </Fade>
                <Picture>
                    <img src={rencen} />
                    <img src={coach} />
                    <img src={rencendark} />
                </Picture>
            </TopSec>
        <MiddleSec>
                <h2>Life Before Lambda</h2>
            <p>I focused most of my life on the service industry.  Not just for the people, but because Downtown Detroit has an energy like no other.  I worked my way up to the infamous Coach Insignia.  Located on the top floor of the GM Renaissance Center, I basically spent my days overlooking Detroit and Canada, and helping create a memorable experience for everyone, that is in addition to overindulging in the exotic food Detroit has to offer.  Eventually, I went to bartend and serve downstairs at Andiamo RiverFront.  It was here I spent 7 days a week for a very long time.  The Ren Cen became my home, and I loved every minute of it.  Eventually, I recognized that I had more potential than I was giving myself credit for, quit Andiamo, and started my journey towards becoming a developer!</p>
        </MiddleSec>
        </div>
    )

}

export default AboutMe;