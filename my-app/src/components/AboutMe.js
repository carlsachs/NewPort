import React from "react";

//IMPORTING COMPONENTS
import Nav from "./Nav.js";

//STYLING
import styled from "styled-components";
import Fade from "react-reveal";

//STYLED COMPONENTS

const Whole = styled.div`

`;

const Top = styled.div`
    display: flex;
`;

const Title = styled.div`
    display: flex;
    border: 1px solid black;
    justify-content: center;
    margin-top: 5%;
`;

const AboutMe = () => {
    return (
        <Whole>
        <Top>
            <Nav />
        </Top>
        <div>
            <Title>About Me</Title>
        </div>
        </Whole>
    )

}

export default AboutMe;