import React from "react";

// Import Pictures

import notes from "./notes.png";
import movies from "./movies.png";
import scoreboard from "./scoreboard.png";

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
        width: 30%;
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

    const Middle = styled.div`
        display: flex;
        width: 30%;
        justify-content: space-evenly;
        margin-top: 2%;
        margin-right: 5%;
        margin-bottom: 4%;
        padding-bottom: 5%;
        margin-left: 5%;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        h3 {
            margin: 0 auto;
            margin-top: 12%;
            margin-bottom: 12%;
        }
        img {
            height: 150px;
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
        }
`;
    
    const Right = styled.div`
        display: flex;
        width: 30%;
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
            margin-bottom: 12%;
            text-decoration: none;
            border: 1px solid #0B1654;
            width: 30%;
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

    const Flex2 = styled.div`
        display: flex;
        flex-flow: column nowrap;
    `;

const Unit6 = () => {
    return (
        <Card>
            <Title>Unit 6: Single Page Web Applications</Title>
            <Focus>
                <h3>Focus:</h3>
                <ul>
                    <li>React Router</li>
                    <li>Link</li>
                    <li>Dynamic Routes</li>
                    <li>useHistory / useParams</li>
                    <li>Forms / Handlers</li>
                    <li>Custom Forms</li>
                    <li>Validation</li>
                    <li>Axios POST</li>
                </ul>
            </Focus>
            <HighlightTitle>
                <h2>Highlight Projects</h2>
            </HighlightTitle>
            <High>
                <Left>
                    <Flex>
                        <h3>Movies</h3>
                        <a href='https://github.com/LambdaSchool/React-Router-Movies'>Github Repo</a>
                        <img src={movies}/>
                    </Flex>
                </Left>
                <Middle>
                    <Flex2>
                        <h3>Sprint Challenge - Scoreboard</h3>
                        <a href='https://github.com/carlsachs/react-american-football-scoreboard'>Github Repo</a>
                        <img src={scoreboard}/>
                    </Flex2>
                </Middle>
                <Right>
                <Flex1>
                    <h3>Add a Member</h3>
                    <a href='https://github.com/carlsachs/team-builder'>Github Repo</a>
                    <img src={notes}/>
                </Flex1>
            </Right>
            </High>
        </Card>
    )
}
export default Unit6;