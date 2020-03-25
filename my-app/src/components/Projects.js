import React from "react";

//IMPORTING COMPONENTS
import Nav from "./Nav.js";

//styling
import styled from "styled-components";

const Whole = styled.div`
    display: flex;
`;

const ProWrap = styled.div`
    width: 100%;
`;

const Title = styled.div`
    margin-top: 8%;
    margin-left: 45%;
    
`;

const Projects = () => {
    return (
        <Whole>
            <Nav />
            <ProWrap>
                <Title>
                    <h1>Projects</h1>
                </Title>
            </ProWrap>
        </Whole>
    )
}

export default Projects;