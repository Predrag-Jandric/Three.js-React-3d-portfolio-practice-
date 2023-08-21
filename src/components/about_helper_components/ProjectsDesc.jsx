import React from 'react'
import styled from "styled-components";
import { colors } from "../theme"

const Container = styled.div`
  border: 1px solid gray;
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

function ProjectsDesc() {
  return (
    <Container>
      <Title>Custom Component here</Title>
      <Desc>Here, a custom layout can be made that will present some projects for example, that the owner of this portfolio made etc. A slider might be a good idea </Desc>
    </Container>
  )
}

export default ProjectsDesc
