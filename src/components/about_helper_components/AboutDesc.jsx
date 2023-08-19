import React from 'react'
import styled from "styled-components";
import { colors } from "../theme"

const Container = styled.div`
  border: 1px solid white;
  color: ${colors.grayscale100};
`
const Title = styled.h2`
  padding: 1rem;
  font-size: 2rem;
`
const Desc = styled.p`
    padding: 1rem;
    font-size: 1.4rem;
`

function AboutDesc() {
  return (
    <Container>
      <Title>About Component</Title>
      <Desc>Here, a custom layout can be made that will present more information about the owner of this portfolio, like the jouney it took, difficulties, an image of a programmer etc.</Desc>
    </Container>
  )
}

export default AboutDesc
