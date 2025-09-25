import { useState } from 'react'
import HomeHero from '../Components/HomeHero'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Experience from '../Components/Experience'
import Contact from '../Components/Contact'
import Cube from '../Components/Cube'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomeHero></HomeHero>
    <Skills></Skills>
    <Projects></Projects>
    <Experience></Experience>
    <Contact></Contact>
    <Cube></Cube>
    </>
  )
}

export default Home
