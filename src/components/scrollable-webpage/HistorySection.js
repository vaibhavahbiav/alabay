import React, { Component } from 'react'

export class HistorySection extends Component {
  render() {
    return (
      <section className='bg-[#FFC700]'>
        <div className='flex flex-col items-center py-4'>
          <div id="bar-element" className='bg-[#FFF6A1] rounded-[30px] w-[100px] h-3 my-4 lg:w-[230px] lg:h-5 lg:my-8'></div>
          <div className="flex flex-col items-center justify-center mx-4 lg:flex-row lg:mr-[100px]">
            <img src="assets/history.png" alt="dog" className='size-[40%] mt-5 lg:size-[996px] lg:mt-40' />
            <div className='flex flex-col space-y-5 w-[300px] lg:w-fit lg:space-y-14'>
              <div className='flex flex-col text-2xl font-black text-right mt-10 lg:mt-14 lg:space-y-2'>
                <h3 className='text-4l lg:text-[100px] text-[#F76902D1] font-montserrat'>History Of</h3>
                <h1 className='text-6xl lg:text-[150px] text-white  font-montserrat'>ALABAY</h1>
              </div>
              <p className='text-lg lg:text-[46px] font-bold text-right font-kumbh'>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HistorySection
