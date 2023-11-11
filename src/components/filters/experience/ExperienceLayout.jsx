import React from 'react'
import ExperienceFilter from './ExperienceFilter'
import Experience2Filter from './Experience2Filter'
import Experience3Filter from './Experience3Filter'

const ExperienceLayout = () => {
  return (
    <>
    <ExperienceFilter title={"Last/current experience"} />
    <Experience2Filter title={"Experience -2"}/>
    <Experience3Filter title={"Experience -3"}/>
    </>
  )
}

export default ExperienceLayout