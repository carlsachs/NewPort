import React from "react";

// Import Pictures

import Cars from "./CarSales.png";
import Smurfs from "./Smurfs.png";

// STYLING

import styled from "styled-components";

const Card = styled.div`
    width: 80%;
    background-color: #white;
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    margin-top: 1%;
    margin-bottom: 1%;
    background: rgb(53,149,255);
    background: radial-gradient(circle, rgba(53,149,255,0.15449929971988796) 0%, rgba(240,244,255,0.6587009803921569) 100%);
    box-shadow: 0 14px 28px rgba(11,22,84,0.25), 0 10px 10px rgba(11, 22, 84,0.22);
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
    `;

    const Focus = styled.div`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        width: 100%;
        color: #303D84;
        margin-left: 7%;
        margin-top: 2%;
        @media all and (max-width:1280px){
            margin-left: 3.5%;
        }
    `;

    const FocTitle = styled.div`
        h3 {
            margin-top: 50%;
        }
    `;

    const List = styled.div``;

    const HighlightTitle = styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 1%;
        color: #303D84;
    `;

    const High = styled.div`
        width: 100%;
        color: #303D84;
        display: flex;
        justify-content: space-between;
        @media all and (max-width: 800px){
            flex-flow: column nowrap;
        }
    `;
   
    const Left = styled.div`
        display: flex;
        width: 40%;
        justify-content: space-evenly;
        margin-bottom: 2%;
        margin-left: 5%;
        margin-top: 2%;
        background: rgb(23,69,91);
        background: radial-gradient(circle, rgba(23,69,91,0.5676645658263305) 0%, rgba(8,31,94,0.4920343137254902) 100%);
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        @media all and (max-width: 800px){
            width: 90%;
            height: 125px;
        }
        h3 {
            margin: 0 auto;
            margin-top: 15%;
            margin-bottom: 15%;
            @media all and (max-width: 800px){
                margin-top: 6.5%;
            }
        }
        img {
            height: 150px;
            margin-bottom: 8%;
            @media all and (max-width: 800px){
                display: none;
            }
        }
        a {
            margin: 0 auto;
            margin-bottom: 10%;
            text-decoration: none;
            border: 1px solid #0B1654;
            width: 80%;
            height: 35px;
            text-align: center;
            padding-top: 5%;
            border-radius: 5%;
            :hover {
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }
            @media all and (max-width:1280px){
                padding-top: 4%;
            }
            @media all and (max-width: 800px){
                width: 100%;
                padding-right: 2%;
                padding-left: 2%;
                padding-top: 6.5%;
            }
        }
    `;

    const Right = styled.div`
        display: flex;
        width: 40%;
        justify-content: space-evenly;
        margin-top: 2%;
        margin-right: 5%;
        margin-bottom: 2%;
        padding-bottom: 2%;
        background: rgb(23,69,91);
        background: radial-gradient(circle, rgba(23,69,91,0.5676645658263305) 0%, rgba(8,31,94,0.4920343137254902) 100%);
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        @media all and (max-width: 800px){
            width: 90%;
            height: 125px;
            margin: 0 auto;
            margin-bottom: 2%;
        }
        h3 {
            margin: 0 auto;
            margin-top: 8%;
            margin-bottom: 8%;
            @media all and (max-width:1280px){
                text-align: center;
                margin-top: 10%;
            }
            @media all and (max-width: 800px){
                margin-top: 4%;
                margin-bottom: 7%;
            }
        }
        img {
            height: 150px;
            width: 90%;
            margin-left: 5%;
            @media all and (max-width:1280px){
                width: 80%;
                margin: 0 auto;
            }
            @media all and (max-width: 800px){
                display: none;
            }
        }
        a {
            margin: 0 auto;
            margin-bottom: 8%;
            text-decoration: none;
            border: 1px solid #0B1654;
            width: 40%;
            height: 35px;
            text-align: center;
            padding-top: 2.5%;
            border-radius: 5%;
            :hover {
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }
            @media all and (max-width:1280px){
                width: 60%;
            }
            @media all and (max-width: 800px){
                width: 42%;
                padding-top: 3%;
                padding-bottom: 3%;
            }
        }
    `;

    const Flex = styled.div`
    display: flex;
    flex-flow: column nowrap;
    `;

    const Flex1 = styled.div`
    display: flex;
    flex-flow: column nowrap;
    `;

const Unit8 = () => {
    return (
        <Card>
            <Title>Unit 8: Advanced State Management</Title>
            <Focus>
                <FocTitle>
                    <h3>Focus:</h3>
                </FocTitle>
                <List>
                    <ul>
                        <li>The Reducer Pattern</li>
                        <li>Redux</li>
                        <li>Async Redux</li>
                        <li>Actions/Action Creators</li>
                        <li>Context API</li>
                    </ul>
                </List>
            </Focus>
            <HighlightTitle>
                <h2>Highlight Projects</h2>
            </HighlightTitle>
            <High>
                <Left>
                    <Flex>
                        <h3>Car Sales</h3>
                        <a href='https://github.com/carlsachs/Car-Sales'>Github Repo</a>
                        <img src={Cars} alt="Car sales project"/>
                    </Flex>
                </Left>
                <Right>
                <Flex1>
                    <h3>Sprint Challenge - Smurfs</h3>
                    <a href='https://github.com/carlsachs/Sprint-Challenge-State-Management-Smurfs'>Github Repo</a>
                    <img src={Smurfs} alt="Smurfs sprint challenge"/>
                </Flex1>
            </Right>
            </High>
        </Card>
    )
}
export default Unit8;