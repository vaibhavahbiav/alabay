import React, { Component } from 'react'
import GameSlider from './GameSlider'
import GamePreviewSlider from './GamePreviewSlider'

export class GamesSection extends Component {
    render() {
        return (
            <section className='bg-[#FFC700] py-4 pb-20 lg:pb-60 lg:relative lg:z-[1] lg:overflow-clip lg:after:absolute lg:after:z-[2] lg:after:block lg:after:bg-white lg:after:w-[150%] lg:after:h-full lg:after:-bottom-[40%] lg:after:-left-[30%] lg:after:rotate-[14deg]'>
                <div className="flex flex-col items-center justify-center text-center mx-4 lg:relative lg:z-[3]">
                    <h2 className='font-black text-6xl lg:text-[200px] text-white font-montserrat'>GAMES</h2>
                    <span className='mt-4  font-black text-3xl lg:text-[64px] font-montserrat text-[#353535]'>Stay tuned for upcoming games !</span>
                    <GameSlider></GameSlider>
                    <GamePreviewSlider></GamePreviewSlider>
                </div>
            </section>
        )
    }
}

export default GamesSection
