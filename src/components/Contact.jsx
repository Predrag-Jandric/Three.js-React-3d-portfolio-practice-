import React from "react";
import styled from "styled-components";
import Map from "./Map";
import { colors } from "./theme"

const Section = styled.div`
  height: 100vh;

  @media only screen and (max-width: 48rem) {
    height: max-content;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3.1rem;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);

  @media only screen and (max-width: 48rem) {
    padding: 1rem 0 4rem 0;

  }
`;



const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 64rem) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media only screen and (max-width: 64rem) {
    width: 80%;
  }

  @media only screen and (max-width: 48rem) {
    width: 400px;
  }

  @media only screen and (max-width: 30rem) {
    width: 90%;
  }
`;

const Input = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${colors.grayscale100};
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${colors.grayscale100};
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

  &:hover {
    background-color: ${colors.primaryHover};
  }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 48rem) {
    display: none;
  }
`;

const Contact = () => {

  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button onClick={(e) => { e.preventDefault(); alert("FORM NOT OPERATIONAL") }} type="submit">Send</Button>

          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;