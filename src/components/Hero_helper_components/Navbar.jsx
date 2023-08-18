import React from "react";
import styled from "styled-components";
import logo from "../../assets/logoipsum.svg";
import { colors } from "../theme";

const Section = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  height: 10vh;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 85vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-size: 1.3rem;
  transition: 100ms ease-in;
  
  &:hover {
    color: ${colors.primary};
  }
`;

const Button = styled.button`
  padding: 10px 20px;
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

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src={logo} />
          <List>
            <ListItem>link1</ListItem>
            <ListItem>link2</ListItem>
            <ListItem>link3</ListItem>
          </List>
        </Links>
        <Button>Hire Now</Button>
      </Container>
    </Section>
  );
};

export default Navbar;