import React from "react";
import { Link } from "react-router-dom";

//Styling
import styled from "styled-components";

//Styled components
const Wrap = styled.div`
    width: 100%;
    margin-top: 5%;
    background-color: #4784e6;
    height: 50px;
    display: flex;
    flex-flow: row-nowrap;
    justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    margin-top: .75%;
    color: white;
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