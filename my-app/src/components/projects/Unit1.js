import React from "react";

// STYLING

import styled from "styled-components";

const Card = styled.div`
    width: 80%;
    background-color: #white;
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    margin-top: 3%;
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
        h3 {
            text-align: center;
            margin-left: 30%;
        }
        ul {
            margin-right: 30%;
        }
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
            
        </Card>
    )
}
export default Unit1;