import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default function Nav () {

    const StyledLink = styled(Link)`
        color: #0C4763;
        width: 25%;
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
        @media all and (max-width: 1280px) {
            width: 17%;
        }
        @media all and (max-width: 800px){
           width: 50%;
        }
        @media all and (max-width: 500px){
            width: 45%;
            padding-bottom: 2%;
        }
        @media all and (max-width: 375px){
            font-size: .75rem;
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
        @media all and (max-width: 500px){
            flex-flow: column nowrap;
            height: 100px;
        }
    `;

    const Left = styled.div`
        display: flex;
        justify-content: space-evenly;
        width: 50%;
        @media all and (max-width: 500px){
            width: 100%;
        }
    `;

    const Right = styled.div`
        display: flex;
        justify-content: space-evenly;
        width: 50%;
        @media all and (max-width: 500px){
            width: 100%;
        }
    `;

    return (
        <header>
            <NavWrap>
                <Left>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/projects">Projects</StyledLink>
                </Left>
                <Right>
                    <StyledLink to="/about">About/Skills</StyledLink>
                    <StyledLink to="/contact">Contact</StyledLink>
                </Right>        
            </NavWrap>
        </header>
    )
}
