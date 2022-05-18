import './App.scss';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Navbar sticky="top"/>
      <Main/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
