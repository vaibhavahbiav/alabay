import React, { Component } from 'react'
import RoadmapDisplay from './RoadmapDisplay'

export class RoadMap extends Component {
  render() {
    return (
      <section className='bg-[#FFC700] py-4 w-full relative z-[1] overflow-clip lg:after:absolute lg:after:block lg:after:w-[150%] lg:after:h-1/2 lg:after:bg-white lg:after:bottom-[30%] lg:after:-right-20 lg:after:z-[2] lg:after:rotate-[14deg]'>
        <div className="justify-center items-center mx-0 lg:mx-0 flex flex-col relative z-[3]">
            <h2 className='font-black text-6xl lg:text-[200px] text-white text-left font-montserrat z-[13]'>ROAD MAP</h2>
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
