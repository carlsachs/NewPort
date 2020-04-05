import React from "react";

//IMPORTING COMPONENTS
import Nav from "./Nav.js";
import SkillIcons from "./Skills.js";
import Footer from "./Footer.js";

//import images
import rencen from "./rencen.jpg";
import rencendark from "./rencendark.jpg";
import coach from "./coach4.jpg";

//STYLING
import styled from "styled-components";
import Fade from "react-reveal/Fade";

//STYLED COMPONENTS

const Top = styled.div`
    display: flex;
    width: 100%;
`;

const TopSec = styled.div`
    @media all and (max-width: 500px){
        margin-left: 25%;
        margin-top: 15%;
        text-align: center;
    }
    a {
        display: flex;
        justify-content: center;
        margin-top: 2%;
        text-decoration: none;
        @media all and (max-width: 500px){
            margin-top: 7%;
        }
    }
`;

const MiddleSec = styled.div`
    width: 100%;
    margin-left: 13%;
    h2 {
        text-align: center;
        margin-top: 2%;
        @media all and (max-width:1280px){
            margin-top: 4%;
            margin-bottom: 4%;
        }
        @media all and (max-width: 800px){
            margin-top: 6%;
        }
        @media all and (max-width: 500px){
            margin: 0 auto;
            margin-top: 5%;
        }
    }
    p {
        text-align: center;
        padding-right: 3%;
        padding-left: 3%;
        margin-top: 2%;
        @media all and (max-width:1280px){
            margin-bottom: 4%;
        }
        @media all and (max-width: 800px){
            margin-top: 6%;
            margin-bottom: 6%;
        }
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8%;
    font-size: 2rem;
    padding: 1%;
    @media all and (max-width: 800px){
        margin-top: 12%;
        margin-bottom: 4%;
    }
`;

const Picture = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3%;
    img {
        height: 400px;
    }
    @media all and (max-width:1280px){
        justify-content: space-evenly;
    }
    @media all and (max-width: 800px){
        margin-top: 5%;
    }
`;

const Skills = styled.div`
    @media all and (max-width: 500px){
        margin-left: 13%;
        width: 100%;
    }
    h2 {
        text-align: center;
        margin-top: 2%;
        @media all and (max-width:1280px){
            margin-bottom:4%;
            margin-top: 0%;
        }
        @media all and (max-width: 800px){
            margin-top: 6%;
            margin-bottom: 8%;
        }
        @media all and (max-width: 500px){
            margin: 0 auto;
            margin-top: 5%;
            margin-bottom: 5%;
        }
    }
`;

const PicLeft = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
`;

const PicMiddle = styled.div`
    @media all and (max-width: 800px){
        display: none;
    }
`;

const PicRight = styled.div`
    @media all and (max-width: 1280px){
        display: none;
    }
`;

const AboutMe = () => {
    return (
        <div>
            <Top>
                <Nav />
            </Top>
            <TopSec>
                <Title>About Me/Skills</Title>
                <Fade left>
                    <a href="https://www.linkedin.com/in/carl-sachs/">Check out my Resume</a>
                </Fade>
                <Picture>
                    <PicLeft>
                        <img src={rencen} alt="ren cen night detroit river"/>
                    </PicLeft>
                    <PicMiddle>
                        <img src={coach} alt="coach insignia top floor"/>
                    </PicMiddle>
                    <PicRight>
                        <img src={rencendark} alt="ren cen night detroit"/>
                    </PicRight>
                </Picture>
            </TopSec>
            <MiddleSec>
                    <h2>Life Before Lambda</h2>
                <p>I focused most of my life on the service industry.  Not just for the people, but because Downtown Detroit has an energy like no other.  I worked my way up to the infamous Coach Insignia.  Located on the top floor of the GM Renaissance Center, I basically spent my days overlooking Detroit and Canada, and helping create a memorable experience for everyone, that is in addition to overindulging in the exotic food Detroit has to offer.  Eventually, I went to bartend and serve downstairs at Andiamo RiverFront.  It was here I spent 7 days a week for a very long time.  The Ren Cen became my home, and I loved every minute of it.  Eventually, I recognized that I had more potential than I was giving myself credit for, quit Andiamo, and started my journey towards becoming a developer!</p>
            </MiddleSec>
            <Skills>
                <h2>Skills</h2>
                <SkillIcons />
            </Skills>
            <div>
                <Footer />
            </div>
        </div>
    )

}

export default AboutMe;