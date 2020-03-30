import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default function Nav () {

    const StyledLink = styled(Link)`
        color: #0C4763;
        width: 10%;
        padding-top: 10px;
        text-decoration: none;
        &:focus, &:visited, &:link, &:active {
            text-decoration: none;
        }
        :hover {
            color: #0C4763;
            border-radius: 7%;
            box-shadow: 0 4px 8px 0 rgba(11, 22, 84, 0.2), 0 6px 20px 0 rgba(11, 22, 84, 0.19);
            transition: all 0.3s ease;
        }
    `;
    
    const NavWrap = styled.div`
        display:flex;
        text-align: center;
        justify-content: space-evenly;
        position: absolute;
        width:95%;
        height: 40px;
        margin-top: 2%;
    `;
    return (
        <header>
            <NavWrap>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/projects">Projects</StyledLink>
                    <StyledLink to="/about">About Me</StyledLink>
                    <StyledLink to="/contact">Contact Me</StyledLink>
            </NavWrap>
        </header>
    )
}
