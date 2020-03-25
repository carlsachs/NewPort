import React from "react";

//Import Pictures

import Build1 from "./Build1/png";

//Styling

import styled from "styled-components";

const Card = styled.div`
    width: 80%;
    background-color: #white;
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    margin-top: 3%;
    margin-bottom: 3%;
    box-shadow: 0 14px 28px rgba(11,22,84,0.25), 0 10px 10px rgba(11, 22, 84,0.22);
    `;

const Build1 = () => {
    return (
        <Card>
            <Title>Build 1: Marketing Page</Title>
        </Card>
    )
}

export default Build1;