import React, { Component } from 'react'
import RoadmapDisplay from './RoadmapDisplay'

export class RoadMap extends Component {
  render() {
    return (
      <section className='bg-[#FFC700] py-4'>
        <div className="justify-center items-center mx-4 lg:ml-20 flex flex-col">
            <h2 className='font-black text-6xl lg:text-[200px] text-white text-left font-montserrat'>ROAD MAP</h2>
            <div className='flex flex-col justify-center items-center text-left mt-5 lg:mt-0 lg:flex-row lg:mr-10 lg:items-center lg:justify-center'>
                <div className='flex flex-col space-y-4 lg:space-y-10 text-center lg:text-left font-kumbh font-bold text-2xl w-[500px] lg:text-5xl lg:w-[685px] lg:ml-9'>
                    <p className='text-[#353535]'>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store. </p>
                    <p className='text-[#FFA800]'>Join us as we grow and achieve new heights.</p>
                </div>
                <img className='w-1/2 lg:w-full' src="./assets/roadmap/roadmap.png" alt="dog" />
            </div>
            <RoadmapDisplay></RoadmapDisplay>
        </div>
      </section>
    )
  }
}

export default RoadMap
