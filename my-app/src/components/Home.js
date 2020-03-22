import React from 'react';
//Styling
import Typist from 'react-typist';
import Particles from "react-particles-js";
import styled from "styled-components";

const HomeDiv=styled.div`
  width: 100%;
  position: absolute;
  z-index: -1;
`;

const Title = styled.div`
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    width: 20%;
    margin: 0 auto;
    margin-top: 10%;
    h1 {
      font-size: 3rem;
      color: #398BB4;
    }
    h2 {
      font-size: 1.4rem;
      color: #398BB4;
    }
`;

const Home = () => {

  const particleOpt2 = {"particles":
    {"number":{"value":374,"density":{"enable":true,"value_area":8838.453586281454}},"color":{"value":"#076199"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":11},"image":{"src":"/img/Github.svg","width":100,"height":100}},"opacity":{"value":0.14430708547789706,"random":true,"anim":{"enable":false,"speed":2.51743935813417,"opacity_min":0.25986470793643046,"sync":false}},"size":{"value":20.076771369474265,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":272.58005034713887,"color":"#ffffff","opacity":0.12025590456491421,"width":0.9620472365193136},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":1362.9002517356944,"rotateY":1200}}},
  "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
  "bubble":{"distance":300,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
  "retina_detect":true};

  return (
    <HomeDiv>
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
    </HomeDiv>
  );
};

export default Home;