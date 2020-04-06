import React from "react";

// Import Pictures

import JS1 from "./JS1.png";
import JS2 from "./JS2.png";
import JSsprint from "./JSsprint.png";

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
        @media all and (max-width: 375px){
            padding-bottom: 3%;
        }
    `;

    const Title = styled.h1`
        color: #1B286C;
        text-decoration: underline;
        height: 25%;
        margin: 0 auto;
        margin-top: 2%;
        @media all and (max-width: 500px){
            text-align: center;
            margin-top: 3%;
        }
        @media all and (max-width: 375px){
            font-size: 1.25rem;
        }
    `;

    const Focus = styled.div`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        width: 100%;
        color: #303D84;
        margin-left: 11%;
        margin-top: 2%;
        @media all and (max-width: 1280px){
            width: 80%;
            margin-left: 15%;
        }
        @media all and (max-width: 500px){
            flex-direction: column;
        }
        @media all and (max-width: 375px){
            font-size: .75rem;
        }
    `;

    const FocTitle = styled.div`
    @media all and (max-width: 500px){
        margin: 0 auto;
        margin-left: 25%;
        margin-top: 5%;
    }
        h3 {
            margin-top: 60%;
            @media all and (max-width: 500px){
                margin-top: 5%;
            }
        }
    `;

    const List = styled.div`
    @media all and (max-width: 375px){
        margin-right: 10%;
    }
    `;

    const HighlightTitle = styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 1%;
        color: #303D84;
        @media all and (max-width: 500px){
            margin-left: 25%;
        }
        @media all and (max-width: 375px){
            font-size: .75rem;
            margin-left: 25%;
        }
    `;

    const High = styled.div`
        width: 100%;
        color: #303D84;
        display: flex;
        justify-content: space-evenly;
        h2 {
            display: flex;
            justify-content: center;
        }
        @media all and (max-width: 800px){
            flex-flow: column nowrap;
        }
        @media all and (max-width: 375px){
            font-size: .75rem;
        }
    `;
    const Left = styled.div`
        display: flex;
        width: 30%;
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
            margin-bottom: .50%;
        }
        @media all and (max-width: 375px){
            height: 90px;
        }
        h3 {
            margin: 0 auto;
            text-align: center;
            margin-top: 10%;
            margin-bottom: 10%;
            @media all and (max-width: 800px){
                margin-top: 6.5%;
                margin-bottom: 4%;
            }
            @media all and (max-width: 500px){
                margin-top: 1.5%;
            }
        }
        img {
            height: 150px;
            @media all and (max-width: 1280px) {
                width: 90%;
                margin: 0 auto;
                margin-top: 5%;
            }
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
            @media all and (max-width: 800px){
                padding-top: 2%;
                padding-bottom: 2%;
                width: 45%;
            }
            @media all and (max-width: 500px){
                width: 48%;
                padding-top: 3%;
                padding-bottom: 3%;
            }
            @media all and (max-width: 375px){
                width: 51%;
                padding-right: 3%;
                padding-left: 3%;
            }
        }
    `;

    const Middle = styled.div`
        display: flex;
        width: 30%;
        justify-content: space-evenly;
        margin-top: 2%;
        margin-right: 5%;
        margin-bottom: 2%;
        padding-bottom: 2%;
        margin-left: 5%;
        background: rgb(23,69,91);
        background: radial-gradient(circle, rgba(23,69,91,0.5676645658263305) 0%, rgba(8,31,94,0.4920343137254902) 100%);
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        @media all and (max-width: 800px){
            width: 90%;
            height: 125px;
        }
        @media all and (max-width: 375px){
            height: 90px;
        }
        h3 {
            margin: 0 auto;
            margin-top: 12%;
            margin-bottom: 12%;
            @media all and (max-width: 1280px){
                margin-top: 9%;
                text-align: center;
            }
            @media all and (max-width: 800px){
                margin-top: 6.5%;
                margin-bottom: 6%;
            }
        }
        img {
            height: 150px;
            @media all and (max-width: 1280px){
                width: 90%;
                margin: 0 auto;
            }
            @media all and (max-width: 800px){
                display: none;
            }
        }
        a {
            margin: 0 auto;
            margin-bottom: 12%;
            text-decoration: none;
            border: 1px solid #0B1654;
            width: 100%;
            height: 35px;
            text-align: center;
            padding-top: 5%;
            border-radius: 5%;
            :hover {
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }
            @media all and (max-width: 1280px) {
                width: 80%;
                margin-bottom: 15%;
            }
            @media all and (max-width: 800px){
                padding-bottom: 4%;
                padding-top: 4%;
                width: 60%;
                margin-top: 5%;
            }
            @media all and (max-width: 375px){
                padding-right: 3%;
                padding-left: 3%;
            }
        }
`;

    const Right = styled.div`
        display: flex;
        width: 30%;
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
        @media all and (max-width: 375px){
            height: 90px;
        }
        h3 {
            margin: 0 auto;
            margin-top: 12%;
            margin-bottom: 12%;
            @media all and (max-width: 1280px) {
                margin-top: 16.5%;
                margin-bottom: 14.25%;
            }
            @media all and (max-width: 800px){
                margin-top: 14%;
                margin-bottom: 13.5%;
            }
        }
        img {
            height: 150px;
            @media all and (max-width: 1280px) {
                width: 90%;
                margin: 0 auto;
                margin-top: 3%;
            }
            @media all and (max-width: 800px){
                display: none;
            }
        }
        a {
            margin: 0 auto;
            margin-bottom: 12%;
            text-decoration: none;
            border: 1px solid #0B1654;
            width: 100%;
            height: 35px;
            text-align: center;
            padding-top: 5%;
            border-radius: 5%;
            :hover {
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }
            @media all and (max-width: 1280px){
                width: 80%;
            }
            @media all and (max-width: 800px){
                width: 100%;
                padding-top: 6%;
                padding-bottom: 6%;
                margin-top: 1%;
            }
            @media all and (max-width: 375px){
                padding-right: 3%;
                padding-left: 3%;
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

    const Flex2 = styled.div`
        display: flex;
        flex-flow: column nowrap;
    `;

const Unit3 = () => {
    return (
        <Card>
            <Title>Unit 3: JavaScript</Title>
            <Focus>
                <FocTitle>
                    <h3>Focus:</h3>
                </FocTitle>
                <List>
                    <ul>
                        <li>Variable, Arrays, Objects, and Functions</li>
                        <li>Callbacks</li>
                        <li>.map( ), .reduce( ), and .filter( ) methods</li>
                        <li>"this" keyword</li>
                        <li>Constructors + Prototypes</li>
                        <li>Class Syntax</li>
                    </ul>
                </List>
            </Focus>
            <HighlightTitle>
                <h2>Highlight Projects</h2>
            </HighlightTitle>
            <High>
                <Left>
                    <Flex>
                        <h3>Functions, Arr, and Obj</h3>
                        <a href='https://github.com/carlsachs/JS-Exercise-Functions-Arrays-Objects'>Github Repo</a>
                        <img src={JS1} alt="Javascript project"/>
                    </Flex>
                </Left>
                <Middle>
                <Flex2>
                    <h3>Sprint Challenge</h3>
                    <a href='https://github.com/carlsachs/Sprint-Challenge--JavaScript'>Github Repo</a>
                    <img src={JSsprint} alt="javascript sprint"/>
                </Flex2>
                </Middle>
                <Right>
                <Flex1>
                    <h3>Classes</h3>
                    <a href='https://github.com/carlsachs/JS-Exercise-Classes'>Github Repo</a>
                    <img src={JS2} alt="javascript highlight project 2"/>
                </Flex1>
            </Right>
            </High>
        </Card>
    )
}
export default Unit3;