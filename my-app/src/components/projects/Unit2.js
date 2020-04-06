import React from "react";

//import styling
import styled from "styled-components";

//import pictures
import Advanced1 from "./Advanced1.png";
import FunBus from "./FunBus.png";
import Carlos from "./Carlos.png";

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
        @media all and (max-width: 500px){
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
        width: 80%;
        color: #303D84;
        margin: 0 auto;
        margin-top: 2%;
        margin-left: 15%;
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
        margin-left: 25%;
        margin-top: 5%;
    }
        h3 {
            margin-top: 50%;
            @media all and (max-width: 500px){
                margin-top: 5%;
            }
        }
    `;

    const List = styled.div`

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
            margin-left: 25%;
            font-size: .75rem;
        }
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
        @media all and (max-width: 800px){
            flex-direction: column;
        }
        @media all and (max-width: 360px){
            font-size: .75rem;
        }
    `;

    const IMG = styled.div`
        img {
            height: 150px;
            @media all and (max-width: 1280px){
                width: 90%;
                margin-left: 5%;
                margin-top: 2.75%;
            }
        }
        @media all and (max-width: 800px){
            display: none;
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
            margin-bottom: .4%;
            height: 125px;
        }
        @media all and (max-width: 360px){
            height: 90px;
        }
        h3 {
            margin: 0 auto;
            margin-top: 10%;
            margin-bottom: 7%;
            @media all and (max-width: 1280px){
                margin-top: 21%;
            }
            @media all and (max-width: 800px){
                margin-top: 6.5%;
                margin-bottom: 2%;
            }
        }
        a {
            margin: 0 auto;
            margin-bottom: 10%;
            text-decoration: none;
            border: 1px solid #0B1654;
            width: 60%;
            height: 35px;
            text-align: center;
            padding-top: 5%;
            border-radius: 5%;
            :hover {
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }
            @media all and (max-width: 1280px){
                width: 70%;
                margin-top: 5%;
            }
            @media all and (max-width: 800px){
                padding-top: 5%;
                padding-bottom: 5%;
                width: 80%;
            }
        }
    `;

    const IMG2 = styled.div`
    display: flex;
        img {
            margin-left: 16%;
            height: 150px;
            @media all and (max-width: 1280px){
                width: 90%;
                margin-left: 5%;
            }
        }
        @media all and (max-width: 800px){
            display: none;
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
        @media all and (max-width: 360px){
            height: 90px;
        }
        h3 {
            margin: 0 auto;
            margin-top: 12%;
            margin-bottom: 12%;
            @media all and (max-width: 1280px){
                text-align: center;
            }
            @media all and (max-width: 800px){
                margin-top: 6.5%;
                margin-bottom: 8%;
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
            @media all and (max-width:1280px){
                width: 75%;
            }
            @media all and (max-width: 800px){
                padding-top: 5%;
                padding-bottom: 5%;
                width: 80%;
            }
            @media all and (max-width: 500px){
                width: 75%;
            }
        }
    `;

    const IMG3 = styled.div`
        img {
            margin-left: 20%;
            height: 150px;
            @media all and (max-width:1280px){
                width: 90%;
                margin-left: 5%;
            }
        }
        @media all and (max-width: 800px){
            display: none;
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
        @media all and (max-width: 360px){
            height: 90px;
        }
        h3 {
            margin: 0 auto;
            margin-top: 12%;
            margin-bottom: 12%;
            @media all and (max-width: 1280px){
                margin-top: 22%;
            }
            @media all and (max-width: 800px){
                margin-top: 6.5%;
                margin-bottom: 8%;
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
                padding-top: 5%;
                padding-bottom: 5%;
                width: 80%;
                margin-bottom: 5%;
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

const Unit2 = () => {
    return (
        <Card>
            <Title>Unit 2: Advanced CSS</Title>
            <Focus>
                <FocTitle>
                    <h3>Focus:</h3>
                </FocTitle>
                <List>
                    <ul>
                        <li>Responsive Design</li>
                        <li>LESS.css</li>
                        <li>Parametric Mix-Ins/Nesting</li>
                        <li>Incorporating Functions</li>
                        <li>Media Queries</li>
                    </ul>
                </List>
            </Focus>
            <HighlightTitle>
                <h2>Highlight Projects</h2>
            </HighlightTitle>
            <High>
                <Left>
                    <Flex>
                        <h3>Preprocessing I</h3>
                        <a href='https://github.com/carlsachs/Preprocessing-I'>Github Repo</a>
                        <IMG>
                            <img src={Advanced1} alt="advanced CSS project"/>
                        </IMG>
                    </Flex>
                </Left>
                <Middle>
                    <Flex2>
                        <h3>Sprint Challenge</h3>
                        <a href='https://github.com/carlsachs/Sprint-Challenge--Advanced-CSS'>Github Repo</a>
                        <IMG2>
                            <img src={Carlos} alt="Spring challenge css"/>
                        </IMG2>
                    </Flex2>
                </Middle>
                <Right>
                <Flex1>
                    <h3>Preprocessing II</h3>
                    <a href='https://github.com/carlsachs/Preprocessing-II'>Github Repo</a>
                    <IMG3>
                        <img src={FunBus} alt="FunBus Homepage"/>
                    </IMG3>
                </Flex1>
            </Right>
            </High>
        </Card>
    )
}
export default Unit2;