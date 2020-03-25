import React from "react";

//Import Pictures

import med from "./med.png";

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
        color: #1B286C;
        box-shadow: 0 14px 28px rgba(11,22,84,0.25), 0 10px 10px rgba(11, 22, 84,0.22);
        a {
            margin: 0 auto;
            margin-bottom: 3%;
            text-decoration: none;
            border: 1px solid #0B1654;
            width: 10%;
            height: 35px;
            text-align: center;
            padding-top: 1%;
            border-radius: 5%;
            :hover {
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }
        }
        h2 {
            margin: 0 auto;
            margin-top: 2%;
        }
        h3 {
            margin: 0 auto;
            margin-top: 2%;
            margin-bottom: 2%;
        }
        img {
            width: 50%;
            margin: 0 auto;
            margin-bottom : 2.75%;
        }
    `;

    const Title = styled.h1`
        color: #1B286C;
        text-decoration: underline;
        height: 25%;
        margin: 0 auto;
        margin-top: 2%;
    `;


const Build2 = () => {
    return (
        <Card>
            <Title>Build 2: React</Title>
            <h2>Task:</h2>
            <h3>Create the front-end for a cannabis consumer application.</h3>
            <img src={med}/>
            <a href="https://github.com/bw-med-cabinet-3/Front-End">Github Repo</a>
            <a href="https://med-cabinet-3.now.sh/">Deployed Site</a>
        </Card>
    )
}

export default Build2;