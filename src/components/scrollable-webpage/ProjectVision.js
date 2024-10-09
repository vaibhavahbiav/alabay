import React, { Component } from 'react'

export class ProjectVision extends Component {
  render() {
    return (
      <section className='bg-[#FFC700]'>
        <div className="flex flex-col justify-center items-center text-center mx-4 w-[500x] lg:w-fit py-4">
            <h2 className='text-6xl lg:text-[200px] font-black text-[#FFA800] font-montserrat'>PROJECT VISION</h2>
            <img className='w-1/2 lg:w-full' src="./assets/vision.png" alt="dogs" />
            <p className='text-3xl mt-10 mb-4 mx-20 w-fit lg:text-5xl font-bold lg:mt-44 lg:mb-5 lg:mx-28 font-kumbh text-[#353535]'>Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.</p>
        </div>
        
      </section>
    )
  }
}

export default ProjectVision
