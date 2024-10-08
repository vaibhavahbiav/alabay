import React, { Component } from 'react'

export class ProjectVision extends Component {
  render() {
    return (
      <section className='bg-[#FFC700]'>
        <div className="flex flex-col text-center">
            <h2 className='lg:text-[200px] lg:font-black text-[#FFA800] font-montserrat'>PROJECT VISION</h2>
            <img src="./assets/vision.png" alt="dogs" />
            <p className='lg:text-5xl lg:font-bold lg:mt-44 lg:mb-5 lg:mx-28 font-kumbh text-[#353535]'>Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.</p>
        </div>
        
      </section>
    )
  }
}

export default ProjectVision
