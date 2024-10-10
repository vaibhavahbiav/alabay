import React, { Component } from 'react'
import MerchSlider from './MerchSlider'

export class Merchandise extends Component {
    render() {
        return (
            <section className='py-4 pb-20 lg:pb-60 bg-[#FFC700] w-full lg:relative lg:z-[1] lg:overflow-clip lg:after:absolute lg:after:z-[2] lg:after:block lg:after:bg-white lg:after:w-[150%] lg:after:h-full lg:after:-top-[40%] lg:after:-left-[30%] lg:after:rotate-[-14deg]'>
                <div className="relative z-[3] flex flex-col space-y-5 lg:space-y-[213px] items-center justify-center text-center">
                    <h2 className='font-black text-6xl lg:text-[200px] text-white lg:text-[#FFA800] font-montserrat'>MERCHANDISE</h2>
                    <MerchSlider></MerchSlider>
                </div>

            </section>
        )
    }
}

export default Merchandise
