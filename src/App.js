import './styling/index.scss';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';


function App() {
  return (
    <main className="main-container ">
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </main>
  );
}

export default App;
