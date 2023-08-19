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

function SkillsDesc() {
  return (
    <Container>
      <Title>Skills Component</Title>
      <Desc>Here, a custom layout can be made that will present the skills that the owner of this portfolio has etc. A layout that includes small pictures of the technologies with text might be a good idea instead of text only</Desc>
    </Container>
  )
}

export default SkillsDesc

