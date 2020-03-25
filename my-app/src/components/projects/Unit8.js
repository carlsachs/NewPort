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
    margin-top: 3%;
    margin-bottom: 3%;
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
    `;

    const Focus = styled.div`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 100%;
        color: #303D84;
        margin-top: 3%;
        h3 {
            text-align: center;
            margin-left: 30%;
        }
        ul {
            margin-right: 30%;
        }
    `;

    const HighlightTitle = styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 3%;
        color: #303D84;
    `;

    const High = styled.div`
        width: 100%;
        color: #303D84;
        display: flex;
        justify-content: space-between;
        h2 {
            display: flex;
            justify-content: center;
        }
    `;
   
    const Left = styled.div`
        display: flex;
        width: 40%;
        justify-content: space-evenly;
        margin-bottom: 4%;
        margin-left: 5%;
        margin-top: 2%;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        h3 {
            margin: 0 auto;
            margin-top: 10%;
            margin-bottom: 10%;
        }
        img {
            height: 150px;
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
        }
    `;

    const Right = styled.div`
    display: flex;
    width: 40%;
    justify-content: space-evenly;
    margin-top: 2%;
    margin-right: 5%;
    margin-bottom: 4%;
    padding-bottom: 5%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    h3 {
        margin: 0 auto;
        margin-top: 12%;
        margin-bottom: 12%;
    }
    img {
        height: 150px;
        width: 90%;
        margin-left: 5%;
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
                <h3>Focus:</h3>
                <ul>
                    <li>The Reducer Pattern</li>
                    <li>Redux</li>
                    <li>Async Redux</li>
                    <li>Actions/Action Creators</li>
                    <li>Context API</li>
                </ul>
            </Focus>
            <HighlightTitle>
                <h2>Highlight Projects</h2>
            </HighlightTitle>
            <High>
                <Left>
                    <Flex>
                        <h3>Car Sales</h3>
                        <a href='https://github.com/carlsachs/Car-Sales'>Github Repo</a>
                        <img src={Cars}/>
                    </Flex>
                </Left>
                <Right>
                <Flex1>
                    <h3>Sprint Challenge - Smurfs</h3>
                    <a href='https://github.com/carlsachs/Sprint-Challenge-State-Management-Smurfs'>Github Repo</a>
                    <img src={Smurfs}/>
                </Flex1>
            </Right>
            </High>
        </Card>
    )
}
export default Unit8;