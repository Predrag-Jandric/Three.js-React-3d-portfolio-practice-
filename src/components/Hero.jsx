import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import heroImg from "../assets/heroImg.svg"
import { colors } from "./theme"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);

  @media only screen and (max-width: 1024px) {
    height: 60vh;
  }
`;

const Container = styled.div`
  height: 90%;
  width: 1350px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1400px) {
    width: 90%;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1400px) {
    flex: 4;
    width: 100%;
  }

  @media only screen and (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 3.7rem;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;


const Subtitle = styled.h2`
  color: ${colors.secondary};
  font-size: 1.3rem;
`;

const Desc = styled.p`
  font-size: 1.1rem;
  color: lightgray;
`;

const Button = styled.button`
padding: 10px 20px;
  width: 10rem;
  background-color: ${colors.primary};
  color: ${colors.grayscale900};
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: 100ms ease-in;

  &:hover{
    background-color: ${colors.primaryHover};
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 1400px){
    width: 20rem;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(1.2rem);
    }
  }
`;

const Hero = () => {

  const [sphereScale, setSphereScale] = useState(1.4);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the scale based on the window width
      if (window.innerWidth < 1400) {
        setSphereScale(1);
      } else {
        setSphereScale(1.4); // Set the original scale for larger screens
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
