import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import About from "./components/About";

const Container = styled.div`
  height: 100vh;
  /* overflow-y: auto; */
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Intro />
      <About />
      <Contact />
    </Container>
  );
}

export default App;