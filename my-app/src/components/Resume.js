import React from "react";

//IMPORT COMPONENTS

import Nav from "./Nav.js";

//STYLING

import styled from "styled-components";

const Whole = styled.div`

`;

const NavBar = styled.div`

`;

const Title = styled.div`

`;

const Resume = () => {
    return (
        <Whole>
        <NavBar>
            <Nav />
        </NavBar>
        <Title>
            <h1>This is my resume page</h1>
        </Title>
        </Whole>
    )
}
export default Resume;