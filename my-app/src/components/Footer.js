import React from "react";

//Styling
import styled from "styled-components";

//Styled components
const Wrap = styled.div`
    width: 100%;
    margin-top: 10%;
    background-color: lightblue;
    height: 50px;
`;

const Footer = () => {
    return (
        <Wrap>
            <h2>This is the footer</h2>
        </Wrap>
    )
}
export default Footer;