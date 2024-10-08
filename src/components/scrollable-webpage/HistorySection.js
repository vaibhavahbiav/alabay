import React, { Component } from 'react'

export class HistorySection extends Component {
  render() {
    return (
      <section className='bg-[#FFC700]'>
        <div className=''>
          <div className='flex lg:flex-col lg:items-center'>
            <div id="bar-element" className='bg-[#FFF6A1] rounded-[30px] lg:w-[230px] lg:h-5 lg:my-8'></div>
            <div className="flex lg:flex-row lg:mr-[100px]">
              <img src="assets/history.png" alt="dog" className='lg:size-[996px] lg:mt-40' />
              <div className='flex flex-col space-y-14 '>
                <div className='flex flex-col text-right lg:mt-14 lg:space-y-2'>
                  <h3 className='lg:text-[100px] lg:font-black text-[#F76902D1] font-montserrat'>History Of</h3>
                  <h1 className='lg:text-[150px] lg:font-black text-white  font-montserrat'>ALABAY</h1>
                </div>
                <p className='lg:text-[46px] lg:font-bold text-right font-kumbh'>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HistorySection
