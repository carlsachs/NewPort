import React from "react";

//Import Pictures

import med from "./med.png";
import star from "./star.png"

//Styling

import styled from "styled-components";

    const Card = styled.div`
        width: 80%;
        background-color: #white;
        display: flex;
        flex-flow: column nowrap;
        margin: 0 auto;
        margin-top: 1%;
        margin-bottom: 1%;
        color: #1B286C;
        background: rgb(53,149,255);
        background: radial-gradient(circle, rgba(53,149,255,0.15449929971988796) 0%, rgba(240,244,255,0.6587009803921569) 100%);
        box-shadow: 0 14px 28px rgba(11,22,84,0.25), 0 10px 10px rgba(11, 22, 84,0.22);
        a {
            margin: 0 auto;
            margin-bottom: 3%;
            text-decoration: none;
            border: 1px solid #0B1654;
            width: 15%;
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

    const StarDiv = styled.div`
        width: 40%;
        display: flex;
        flex-flow: row: nowrap;
        margin-top: 3%;
        margin-left: 21%;
        img {
            margin-right: 30%;
        }
    `;


const Build2 = () => {
    return (
        <Card>
            <StarDiv>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
            </StarDiv>
            <Title>Build: React</Title>
            <h2>Task:</h2>
            <h3>Create the front-end for a cannabis consumer application.</h3>
            <img src={med}/>
            <a href="https://github.com/bw-med-cabinet-3/Front-End">Github Repo</a>
            <a href="https://med-cabinet-3.now.sh/">Deployed Site</a>
        </Card>
    )
}

export default Build2;