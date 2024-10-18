import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from "./components/skills/Skills"
import Project from "./components/project/Project"
import Contact from './components/contact/Contact'

function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove}>

      <div
        style={{
          position: 'fixed',
          top: position.y - -5,
          left: position.x - 0,
          width: '0px',
          height: '0px',
          zIndex: 99,
          borderRadius: "10px",
          boxShadow: "0px 0px 50px 30px white",
          backgroundColor: 'none',
          pointerEvents: 'none',

        }}

      />


      <Navbar />
      <Header />
      <main>
        <section id='about'>
          <About />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Project />
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
