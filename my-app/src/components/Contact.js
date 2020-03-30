import React from "react";

//import components
import Nav from "./Nav";

//styling
import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    width: 100%;
`;

const Title = styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 8%;
`;

const Contact = () => {
    return (
        <Wrap>
            <div>
                <Nav />
            </div>  
            <Title>  
                <h1>Contact</h1>
            </Title>
        </Wrap>
    )
}
export default Contact;