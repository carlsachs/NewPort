import React from "react";

//import components
import Nav from "./Nav";

//styling
import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 100%;
    h1 {
    }
`;

const Cont = styled.div`
    margin: 0 auto;
    margin-top: 20%;
    border: 1px solid black;
`;

const Title = styled.h1`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 8%;
    border: 1px solid blue;
`;

const Contact = () => {
    return (
        <Wrap>
            <Nav />   
                <Title>Contact</Title>
            <Cont>
                <form>
                    <input 
                    name="name"
                    placeholder="name"
                    />
                </form>
            </Cont>
        </Wrap>
    )
}
export default Contact;