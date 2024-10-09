import React, { Component } from 'react'
import MerchSlider from './MerchSlider'

export class Merchandise extends Component {
    render() {
        return (
            <section className='py-4'>
                <div className="flex flex-col space-y-5 lg:space-y-[213px] items-center justify-center text-center">
                    <h2 className='font-black text-6xl lg:text-[200px] text-[#FFA800] font-montserrat'>MERCHANDISE</h2>
                    <MerchSlider></MerchSlider>
                </div>

            </section>
        )
    }
}

export default Merchandise
