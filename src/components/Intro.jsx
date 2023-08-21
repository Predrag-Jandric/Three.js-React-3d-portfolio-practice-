import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { colors } from "./theme"

const Section = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  /* border: 1px solid yellow; */
`;

const Container = styled.div`
  width: 84.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  /* border: 1px solid yellow; */


  @media only screen and (max-width: 64rem) {
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  /* border: 1px solid yellow; */


  &:hover {
    cursor: all-scroll;
  }

  @media only screen and (max-width: 64rem) {
    width: 90%;
    height: 20rem;
  }
`;

const Title = styled.h1`
  font-size: 3.7rem;
`;

const TitleSpan = styled.span`
  color: ${colors.react};
`

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 1.5rem;
  /* border: 1px solid yellow; */


  @media only screen and (max-width: 64rem) {
    text-align: center;
    align-items: center;
    width: 100%;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Subtitle = styled.h2`
  color: ${colors.secondary};
  font-size: 1.3rem;
  font-weight: 400;
`;

const Desc = styled.p`
  font-size: 1.1rem;
  color: ${colors.grayscale200};
  line-height: 1.5;
`;

// const Button = styled.button`
//   padding: 10px 20px;
//   width: 10rem;
//   background-color: ${colors.primary};
//   color: ${colors.grayscale900};
//   border: none;
//   border-radius: 5px;
//   font-size: 0.9rem;
//   font-weight: 500;
//   cursor: pointer;
//   transition: 100ms ease-in;

//   &:hover{
//     background-color: ${colors.primaryHover};
//   }
// `;

const Intro = () => {

  const cubeScale = [4, 4, 4];

  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [4, 4, 4] }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube scale={cubeScale} />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the box with <TitleSpan>React</TitleSpan></Title>
          <WhatWeDo>
            <Subtitle>...and break free from conventional boundaries </Subtitle>
          </WhatWeDo>
          <Desc>
            React isn't just a library; it's the most modern tool for crafting pages that were once deemed impossible. With its dynamic components and reactivity, React empowers developers to bring life amazing websites.
          </Desc>
          {/* <Button>See our works</Button> */}
        </Right>
      </Container>
    </Section>
  );
};

export default Intro;