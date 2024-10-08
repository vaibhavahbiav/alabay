import React, { Component } from 'react'
import MerchSlider from './MerchSlider'

export class Merchandise extends Component {
    render() {
        return (
            <section>
                <div className="flex flex-col space-y-[213px] items-center justify-center text-center">
                    <h2 className='lg:font-black lg:text-[200px] text-[#FFA800] font-montserrat'>MERCHANDISE</h2>
                    <MerchSlider></MerchSlider>
                </div>

            </section>
        )
    }
}

export default Merchandise
