import React from "react";

//IMPORTING COMPONENTS
import Nav from "./Nav.js";
import Unit1 from "./projects/Unit1.js";
import Unit2 from "./projects/Unit2.js";
import Unit3 from "./projects/Unit3.js";
import Build1 from "./projects/Build1.js";
import Unit4 from "./projects/Unit4.js";
import Unit5 from "./projects/Unit5.js";
import Unit6 from "./projects/Unit6.js";
import Build2 from "./projects/Build2.js";
import Unit7 from "./projects/Unit7.js";
import Unit8 from "./projects/Unit8.js";
import Unit9 from "./projects/Unit9.js";
import ModulePNG from "./ProjectSVG.js";

//styling
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Whole = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

const TopWrap = styled.div`
    width: 100%;
`;

const Title = styled.div`
    margin-top: 8%;
    text-align: center;
    color: #1B286C;
    
`;

const Lambda = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #1B286C;
    h3 {
        padding-right: 10%;
        padding-left: 10%;
        font-size: 1rem;
    }
`;

const MiddleWrap = styled.div``;

const BottomWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProTitles = styled.div`
    display: flex;
    padding-right: 15%;
    padding-left: 15%;
    text-align: center;
    color: #1B286C;
`;

const UnitOne = styled.div``;

const UnitTwo = styled.div``;

const UnitThree = styled.div``;

const BuildOne = styled.div``;

const UnitFour = styled.div``;

const UnitFive = styled.div``;

const UnitSix = styled.div``;

const BuildTwo = styled.div``;

const UnitSeven = styled.div``;

const UnitEight = styled.div``;

const UnitNine = styled.div``;

const Desc = styled.div`
    position: absolute;
    top: 46%;
    left: 34%;
    height: 400px;
    width: 38%;
    padding-top: 2.2%;
    padding-left: 2%;
`;

const Projects = () => {
    return (
        <Whole>
            <Nav />
            <TopWrap>
                <Title>
                    <h1>Projects</h1>
                </Title>
                <Lambda>
                    <h2>How does Lambda School Work?</h2>
                    <ModulePNG />
                </Lambda>\
                <Desc>
                    <Fade right>
                    <p>Lambda School teaches via zoom each day.  Each module was filled with 3 units, and a build week, where a team and myself would create a project from scratch in 4 days.  Each unit (one week) was filled with 4 days of learning, including a daily project and smaller group classes, and one day of testing.  The way they teach is very head-on and very intense.  The most important thing im taking away from Lambda School is the ability to learn new concepts quickly, and the ability to implement what I'm learning into my projects.  Such as this very portfolio page.  Most of what this was built with (library-wise) was self-taught.</p>
                    </Fade>
                </Desc>
            </TopWrap>
            <MiddleWrap>

            </MiddleWrap>
            <BottomWrap>
                <ProTitles>
                    <h3>In order from day one (when all I knew how to make was the best Old Fashioned you'll ever drink) cascading to the present day, where I've learned so much I think I've forgotten how to make the Old Fashioned.</h3>
                </ProTitles>
                <UnitOne>
                    <Fade bottom>
                        <Unit1 />
                    </Fade>
                </UnitOne>
                <UnitTwo>
                    <Fade bottom>
                        <Unit2 />
                    </Fade>
                </UnitTwo>
                <UnitThree>
                    <Fade bottom>
                        <Unit3 />
                    </Fade>
                </UnitThree>
                <BuildOne>
                    <Fade bottom>
                        <Build1 />
                    </Fade>
                </BuildOne>
                <UnitFour>
                    <Fade bottom>
                        <Unit4 />
                    </Fade>
                </UnitFour>
                <UnitFive>
                    <Fade bottom>
                        <Unit5 />
                    </Fade>
                </UnitFive>
                <UnitSix>
                    <Fade bottom>
                        <Unit6 />
                    </Fade>
                </UnitSix>
                <BuildTwo>
                    <Fade bottom>
                        <Build2 />
                    </Fade>
                </BuildTwo>
                <UnitSeven>
                    <Fade bottom>
                        <Unit7 />
                    </Fade>
                </UnitSeven>
                <UnitEight>
                    <Fade bottom>
                        <Unit8 />
                    </Fade>
                </UnitEight>
                <UnitNine>
                    <Fade bottom>
                        <Unit9 />
                    </Fade>
                </UnitNine>
            </BottomWrap>
        </Whole>
    )
}

export default Projects;