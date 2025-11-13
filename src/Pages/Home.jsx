import { useState } from 'react'
import HomeHero from '../Components/HomeHero'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Experience from '../Components/Experience'
import Contact from '../Components/Contact'
import Cube from '../Components/Cube'
import OpacityInOnScroll from '../OpacityInOnScroll'
import FadeInOnScroll from '../FadeInOnScroll'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black" id="Home">
        <OpacityInOnScroll>
          <HomeHero></HomeHero>
        </OpacityInOnScroll>
        <OpacityInOnScroll>
          <Skills></Skills>
        </OpacityInOnScroll>
        <OpacityInOnScroll>
          <Projects></Projects>
        </OpacityInOnScroll>
        <OpacityInOnScroll>
          <Experience></Experience>
        </OpacityInOnScroll>
        <OpacityInOnScroll>
          <Contact></Contact>
        </OpacityInOnScroll>
        <OpacityInOnScroll>
          <Cube></Cube>
        </OpacityInOnScroll>
      </div>
    </>
  )
}

export default Home
