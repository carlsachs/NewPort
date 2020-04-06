import React from "react";

// Import Pictures

import Advanced from "./AdvancedReact.png";
import Todo from "./Todo.png";

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
    @media all and (max-width: 360px){
        padding-bottom: 3%;
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
            margin-top: 3%;
        }
        @media all and (max-width: 360px){
            font-size: 1.25rem;
        }
    `;

    const Focus = styled.div`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        width: 100%;
        color: #303D84;
        margin-left: 5%;
        margin-top: 2%;
        @media all and (max-width:1280px){
            margin-left: 1%;
        }
        @media all and (max-width: 500px){
            flex-direction: column;
        }
        @media all and (max-width: 360px){
            font-size: .75rem;
        }
    `;

    const FocTitle = styled.div`
    @media all and (max-width: 500px){
        margin: 0 auto;
    }
    @media all and (max-width: 360px){
        margin-top: 4%;
    }
        h3 {
            margin-top: 40%;
            @media all and (max-width: 500px){
                margin-top: 5%;
            }
        }
    `;

    const List = styled.div`
        @media all and (max-width: 500px){
            margin-left: 5%;
            padding-left: 3%;
            padding-right: 1%;   
        }
        @media all and (max-width: 360px){
            margin-left: 1%;
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
        @media all and (max-width: 360px){
            font-size: .75rem;
            margin-left: 25%;
        }
    `;

    const High = styled.div`
        width: 100%;
        color: #303D84;
        display: flex;
        justify-content: space-between;
        @media all and (max-width: 800px){
            flex-flow: column nowrap;
        }
        @media all and (max-width: 360px){
            font-size: .75rem;
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
        @media all and (max-width: 360px){
            height: 90px;
        }
        h3 {
            margin: 0 auto;
            margin-top: 10%;
            margin-bottom: 10%;
        }
        img {
            height: 150px;
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
            width: 80%;
            height: 35px;
            text-align: center;
            padding-top: 4%;
            border-radius: 5%;
            :hover {
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }
            @media all and (max-width: 800px){
                width: 100%;
                padding-top: 6%;
            }
            @media all and (max-width: 360px){
                padding-bottom: 6%;
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
        @media all and (max-width: 360px){
            height: 90px;
        }
        h3 {
            margin: 0 auto;
            margin-top: 12%;
            margin-bottom: 12%;
            @media all and (max-width: 800px){
                margin-top: 6.5%;
                margin-bottom: 9%;
            }
            @media all and (max-width: 360px){
                margin-bottom: 8%;
            }
        }
        img {
            height: 150px;
            @media all and (max-width: 800px){
                display: none;
            }
        }
        a {
            margin: 0 auto;
            margin-bottom: 12%;
            margin-top: 1%;
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
            @media all and (max-width: 800px){
                width: 68%;
                padding-bottom: 4%;
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

const Unit7 = () => {
    return (
        <Card>
            <Title>Unit 7: Web Fundamentals</Title>
            <Focus>
                <FocTitle>
                    <h3>Focus:</h3>
                </FocTitle>
                <List>
                    <ul>
                        <li>Class Components</li>
                        <li>The React Lifecycle</li>
                        <li>Events in Forms</li>
                        <li>Testing Web Applications</li>
                    </ul>
                </List>
            </Focus>
            <HighlightTitle>
                <h2>Highlight Projects</h2>
            </HighlightTitle>
            <High>
                <Left>
                    <Flex>
                        <h3>React To-Do</h3>
                        <a href='https://github.com/carlsachs/React-Todo'>Github Repo</a>
                        <img src={Todo} alt="react to-do"/>
                    </Flex>
                </Left>
                <Right>
                <Flex1>
                    <h3>Sprint Challenge</h3>
                    <a href='https://github.com/LambdaSchool/Sprint-Challenge-Advanced-React'>Github Repo</a>
                    <img src={Advanced} alt="advanced react sprint"/>
                </Flex1>
            </Right>
            </High>
        </Card>
    )
}
export default Unit7;