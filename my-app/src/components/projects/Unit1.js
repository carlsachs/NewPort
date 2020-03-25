import React from "react";

// STYLING

import styled from "styled-components";

const Card = styled.div`
    width: 80%;
    height: 20vh;
    background-color: #white;
    display: flex;
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
    `;

    const Right = styled.div``;

    const Left = styled.div``;

const Unit1 = () => {
    return (
        <Card>
            <Title>Unit 1: Web Fundamentals</Title>
            <Focus>
                <Left>
                
                </Left>
                <Right>
                
                </Right>
            </Focus>
        </Card>
    )
}
export default Unit1;