import React from "react";

//Import Pictures


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
        @media all and (max-width: 800px){
            padding-right: 3%;
            padding-left: 3%;
            width: 74%;
        }
        @media all and (max-width: 500px){
            margin-bottom: 3%;
        }
        @media all and (max-width: 375px){
            padding-bottom: 3%;
        }
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
            @media all and (max-width: 800px){
                width: 25%;
                padding-top: 2%;
            }
            @media all and (max-width: 500px){
                padding-top: 3.5%;
            }
            @media all and (max-width: 375px){
                padding-left: 5%;
                padding-right: 5%;
            }
        }
        h2 {
            margin: 0 auto;
            margin-top: 2%;
            @media all and (max-width: 375px){
                font-size: 1rem;
            }
        }
        h3 {
            margin: 0 auto;
            margin-top: 2%;
            margin-bottom: 2%;
            @media all and (max-width: 800px){
                text-align: center;
            }
            @media all and (max-width: 500px){
                margin-top: 3%;
                margin-bottom: 7%;
            }
            @media all and (max-width: 375px){
                font-size: .75rem;
            }
        }
    `;

    const Title = styled.h1`
        color: #1B286C;
        text-decoration: underline;
        height: 25%;
        margin: 0 auto;
        margin-top: 2%;
        @media all and (max-width: 800px){
            text-align: center;
        }
        @media all and (max-width: 500px){
            margin-top: 3%;
            margin-bottom: 3%;
        }
        @media all and (max-width: 375px){
            font-size: 1.25rem;
        }
    `;


const Build1 = () => {
    return (
        <Card>
            <Title>Build: Marketing Page/UI</Title>
            <h2>Task:</h2>
            <h3>Create a marketing page for the team I was assigned.</h3>
            <a href="https://dev-desk-queue.netlify.com/index.html">DevQ</a>
        </Card>
    )
}

export default Build1;