import React from 'react';
import { useHistory } from "react-router-dom";

//Importing Meta
import MetaTags from "react-meta-tags"

//IMPORTING OTHER FILES

import Nav from "./Nav.js";

//Styling

import Typist from 'react-typist';
import Particles from "react-particles-js";
import styled from "styled-components";

//STYLED-COMPONENTS

const HomeDiv=styled.div`
  width: 100%;
  position: absolute;
  z-index: -1;
`;

const Title = styled.div`
    display: flex;
    flex-flow: column nowrap;
    position: absolute;
    left: 38%;
    text-align: center;
    width: 20%;
    margin: 0 auto;
    margin-top: 15.5%;
    padding-left: 2%;
    padding-right: 2%;
    background: transparent;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    h1 {
      font-family: "LuloCleanW01-One";
      font-size: 3rem;
      color: #0B1654;
      text-shadow:  0px 2px 3px rgba(0,0,0,0.4),
                    0px 4px 7px rgba(0,0,0,0.1),
                    0px 9px 12px rgba(0,0,0,0.1);
    }
    h2 {
      font-size: 1.4rem;
      color: #0B1654;
    }
    @media all and (max-width: 1280px) {
      margin-top: 25%;
    }
    @media all and (max-width: 800px){
      width: 40%;
      margin-top: 35%;
      left: 28%;
    }
`;

const ButtonWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 45%;
    margin-top:30%;
    z-index: -1;
    @media all and (max-width: 1280px) {
      margin-top: 50%;
    }
    @media all and (max-width: 800px){
      margin-top: 70%;
    }
`;

const Button = styled.button`
  width: 250px;
  height: 100px;
  border: 1px solid #0B1654;
  background: none;
  font-family: LuloCleanW01-One;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(11, 22, 84, 0.2), 0 6px 20px 0 rgba(11, 22, 84, 0.2);
    color: #303D84;
    border-radius: 4%;
    transition: all 0.3s ease;
  }
  @media all and (max-width: 800px){
    width: 125px;
  }
`;

const Button1 = styled.div`
    position: absolute;
    left: 6%;
    top: 65%;
`;

const Button2 = styled.div`
  position: absolute;
  right: 6%;
  top: 65%;
`;

//PARTICLES JS ANIMATION

const Home = () => {

  const particleOpt2 = {"particles":
    {"number":{"value":600,"density":{"enable":true,"value_area":8838.453586281454}},"color":{"value":"#1d3152"},"shape":{"type":"circle","stroke":{"width":0,"color":"#7c90bf"},"polygon":{"nb_sides":11},"image":{"src":"/img/Github.svg","width":100,"height":100}},"opacity":{"value":0.14430708547789706,"random":true,"anim":{"enable":false,"speed":4.51743935813417,"opacity_min":0.25986470793643046,"sync":false}},"size":{"value":10.076771369474265,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":272.58005034713887,"color":"#ffffff","opacity":0.12025590456491421,"width":0.9620472365193136},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":true,"rotateX":1362.9002517356944,"rotateY":1200}}},
  "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
  "bubble":{"distance":300,"size":40,"duration":2,"opacity":8,"speed":6},"repulse":{"distance":200,"duration":1.0},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
  "retina_detect":true};

  //FUNCTIONALITY

  let history = useHistory();

  const toProjects = () => {
    history.push('/projects')
  }

  const toAbout = () => {
    history.push('/about')
  }

  return (
    <HomeDiv>
      <MetaTags>
        <title>Carl's Portfolio</title>
        <meta name="description" content="Portfolio of Carl Sachs" />
        <meta property="og:title" content="Portfolio for Development" />
      </MetaTags>
        <Nav />
    <Particles 
    params={ particleOpt2 }
    style={{
    "zIndex": "-1"
    }}
    />
      <Typist>
        <Title>
          <h1>Carl Sachs</h1>
          <h2>Full-Stack Web Developer</h2>
        </Title>
        </Typist>

    <ButtonWrap>
      <Button1>
        <Button onClick={toProjects}>Projects</Button>
      </Button1>
      <Button2>
        <Button onClick={toAbout}>About Me</Button>
      </Button2>
    </ButtonWrap>
    </HomeDiv>
  );
};

export default Home;