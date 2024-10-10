import React, { Component } from 'react'

export class ProjectVision extends Component {
  render() {
    return (
      <section className='bg-[#FFC700] pt-20 pb-20 lg:pt-40 lg:pb-60 relative z-[1] overflow-clip lg:after:absolute lg:after:block lg:after:w-[150%] lg:after:h-1/2 lg:after:bg-white lg:after:-top-20 lg:after:-right-12 lg:after:z-[2] after:-rotate-[10deg]'>
        <div className="flex flex-col justify-center items-center text-center mx-4 w-[500x] lg:w-fit py-4 relative z-[3]">
            <h2 className='text-6xl lg:text-[180px] font-black text-[#FFA800] font-montserrat'>PROJECT VISION</h2>
            <img className='w-1/2 lg:w-full' src="./assets/vision.png" alt="dogs" />
            <p className='text-3xl mt-10 mb-4 mx-20 w-fit lg:text-5xl font-bold lg:mt-44 lg:mb-5 lg:mx-28 font-kumbh text-[#353535]'>Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.</p>
        </div>
        
      </section>
    )
  }
}

export default ProjectVision
