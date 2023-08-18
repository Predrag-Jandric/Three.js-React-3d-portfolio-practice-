import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import heroImg from "../assets/heroImg.svg"
import { colors } from "./theme"

const Section = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  /* width: 87.5rem; */
  width: 85vw;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  order: 1;

  @media only screen and (max-width: 768px) {
    order: 2;
    align-items: center;
    flex: 0;
    
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  width: 10rem;
  background-color: ${colors.primary};
  color: ${colors.grayscale900};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 100ms ease-in;

  &:hover{
    background-color: ${colors.primaryHover};
  }
`;

const Right = styled.div`
  position: relative;
  width: 50%;
  order: 2;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 70vh;
    order: 1;
    
  }
`;

const Img = styled.img`
  width: 35rem;
  /* height: 600px; */
  /* object-fit: contain; */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 1400px) {
    width: 90%;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {

  const [sphereScale, setSphereScale] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the scale based on the window width
      if (window.innerWidth < 1400) {
        setSphereScale(1.7);
        if (window.innerWidth < 1150) {
          setSphereScale(1.2);
        }
      } else {
        setSphereScale(2); // Set the original scale for larger screens
      }
    };

    // Initial call to adjust scale on component mount
    handleResize();

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Subtitle>• What we Do</Subtitle>
          </WhatWeDo>
          <Desc>
            we enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={sphereScale}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src={heroImg} />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
