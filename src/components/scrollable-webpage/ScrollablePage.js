import React, { Component } from 'react'
import HistorySection from './HistorySection'
import ItemSlider from './ItemSlider'
import ProjectVision from './ProjectVision'
import RoadMap from './RoadMap'
import Tokennomics from './Tokennomics'
import Merchandise from './Merchandise'
import GamesSection from './GamesSection'
import Social from './Social'

export class ScrollablePage extends Component {
  render() {
    return (
      <section className='flex flex-col items-center justify-center'>
        <HistorySection></HistorySection>
        <ItemSlider></ItemSlider>
        <ProjectVision></ProjectVision>
        <RoadMap></RoadMap>
        <Tokennomics></Tokennomics>
        <Merchandise></Merchandise>
        <GamesSection></GamesSection>
        <Social></Social>
      </section>
    )
  }
}

export default ScrollablePage
