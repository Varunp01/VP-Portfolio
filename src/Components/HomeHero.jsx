import { useState } from 'react'
import HomeHeroTemplate from './HomeHeroTemplate'

function HomeHero() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-black h-[95vh] w-full">
      <HomeHeroTemplate></HomeHeroTemplate>
      
    </div>
    </>
  )
}

export default HomeHero
