import React from "react";
import { Link } from "react-router-dom";

//Styling
import styled from "styled-components";

//Styled components
const Wrap = styled.div`
    width: 100%;
    margin-top: 5%;
    background-color: #4784e6;
    height: 52px;
    display: flex;
    flex-flow: row-nowrap;
    justify-content: space-evenly;
    @media all and (max-width:1280px){
        margin-top: 10.5%;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    margin-top: .75%;
    color: white;
    :hover {
        text-shadow: 0px 0px 6px rgba(255,255,255,0.7);
    }
    @media all and (max-width:1280px){
        margin-top: 1.25%;
    }
`;

const Footer = () => {
    return (
        <Wrap>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
            <StyledLink to="/about">About/Skills</StyledLink>
            <StyledLink to="/contact">Contact Me</StyledLink>
        </Wrap>
    )
}
export default Footer;