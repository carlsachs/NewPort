import React from "react";

// Import Pictures

import Flexbox from "./Flexbox.png";

// STYLING

import styled from "styled-components";

const Card = styled.div`
    width: 80%;
    background-color: #white;
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    margin-top: 3%;
    margin-bottom: 5%;
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
        h3 {
            text-align: center;
            margin-left: 30%;
        }
        ul {
            margin-right: 30%;
        }
    `;

    const High = styled.div`
        width: 100%;
        border: 1px solid blue;
        color: #303D84;
        h2 {
            display: flex;
            justify-content: center;
        }
    `;
    const Left = styled.div`
        display: flex;
        border: 1px solid green;
        width: 40%;
        justify-content: space-evenly;
        h3 {
            margin: 0 auto;
            margin-top: 10%;
            margin-bottom: 10%;
        }
        img {
            height: 150px;
            :hover {
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }
        }
        a {
            margin: 0 auto;
            margin-bottom: 10%;
            text-decoration: none;
            border: 1px solid blue;
            width: 70%;
            height: 35px;
            text-align: center;
            padding-top: 5%;
            border-radius: 5%;
        }
    `;

    const Flex = styled.div`
        display: flex;
        flex-flow: column nowrap;
    `;

const Unit1 = () => {
    return (
        <Card>
            <Title>Unit 1: Web Fundamentals</Title>
            <Focus>
                <h3>Focus:</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>GitFlow</li>
                </ul>
            </Focus>
            <High>
                <h2>Highlight Projects</h2>
                <Left>
                    <Flex>
                        <h3>FlexBox</h3>
                        <a href='https://github.com/carlsachs/UI-III-Flexbox'>Github Repo</a>
                        <img src={Flexbox}/>
                    </Flex>
                </Left>
            </High>
        </Card>
    )
}
export default Unit1;