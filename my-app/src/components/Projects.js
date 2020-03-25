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
    margin-bottom: 4.5%;
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
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At elementum eu facilisis sed odio. Adipiscing enim eu turpis egestas. Purus faucibus ornare suspendisse sed. Venenatis tellus in metus vulputate eu scelerisque felis. Varius duis at consectetur lorem donec massa sapien faucibus et. Tempus urna et pharetra pharetra. Quisque id diam vel quam elementum pulvinar etiam non. Massa eget egestas purus viverra accumsan in nisl. Aliquam sem et tortor consequat id porta nibh venenatis. Sit amet tellus cras adipiscing enim eu turpis egestas. Dignissim convallis aenean et tortor at risus viverra adipiscing. Mattis vulputate enim nulla aliquet porttitor. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Orci nulla pellentesque dignissim enim sit amet. A scelerisque purus semper eget duis at tellus at. Arcu non sodales neque sodales ut etiam. Vulputate enim nulla aliquet porttitor lacus luctus. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Nisl vel pretium lectus quam id.

                    Sed id semper risus in. Maecenas volutpat blandit aliquam etiam erat velit. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Vitae et leo duis ut diam. Sagittis orci a scelerisque purus semper eget duis. Ipsum a arcu cursus vitae congue mauris rhoncus. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Nam libero justo laoreet sit amet cursus. Urna et pharetra pharetra massa massa ultricies. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Quis eleifend quam adipiscing vitae proin. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Tincidunt nunc pulvinar sapien et. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce.</h3>
                </Lambda>
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
            </BottomWrap>
        </Whole>
    )
}

export default Projects;