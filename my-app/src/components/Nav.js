import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default function Nav () {

    const StyledLink = styled(Link)`
        color: #0C4763;
        width: 10%;
        padding-top: 10px;
        text-decoration:none;
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
        width: 100%;
        height: 50px;
        margin: 0 auto;
        margin-top: 2%;
    `;
    return (
        <header>
            <NavWrap>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/projects">Projects</StyledLink>
                    <StyledLink to="/about">About Me</StyledLink>
                    <StyledLink to="https://www.linkedin.com/in/carl-sachs-198780141">LinkedIn</StyledLink>
            </NavWrap>
        </header>
    )
}
