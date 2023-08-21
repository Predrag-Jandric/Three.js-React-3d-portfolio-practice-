import React, { useState } from "react";
import styled from "styled-components";
import AboutDesc from "./about_helper_components/AboutDesc";
import SkillsDesc from "./about_helper_components/SkillsDesc";
import ProjectsDesc from "./about_helper_components/ProjectsDesc";
import { colors } from "../components/theme"


const Section = styled.div`
  /* height: 100vh; */
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
  padding: 5rem 0;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  /* border: 1px solid white; */
`;

const Container = styled.div`
  width: 1350px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */

  @media only screen and (max-width: 1400px) {
    width: 92%;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  /* border: 1px solid green; */

  @media only screen and (max-width: 1024px) {
    justify-content: center;
    text-align: center;
    /* width: 90%; */
    /* border: 1px solid green; */
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
  /* padding: 1rem; */
    /* border: 1px solid green; */

`;

const ListItem = styled.li`
  font-size: 4rem;
  font-weight: 500;
  padding: 1rem;
  cursor: pointer;
  transition: 100ms ease-in;
  color: ${colors.grayscale100};

  &:hover {
    /* margin-left: 2rem; */
    color: ${colors.react};
    transform: translateX(20px) 
  }
`;

const Right = styled.div`
  flex: 1;
`;


const About = () => {

  const [selectedLink, setSelectedLink] = useState("about");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <Section>
      <Container>
        <Left>
          <List>
            <ListItem onClick={() => handleLinkClick("about")}>About</ListItem >
            <ListItem onClick={() => handleLinkClick("skills")}>Skills</ListItem>
            <ListItem onClick={() => handleLinkClick("projects")}>Projects</ListItem>
          </List>
        </Left>
        <Right>
          {selectedLink === "about" && <AboutDesc />}
          {selectedLink === "skills" && <SkillsDesc />}
          {selectedLink === "projects" && <ProjectsDesc />}
        </Right>
      </Container>
    </Section>
  );
};

export default About;


