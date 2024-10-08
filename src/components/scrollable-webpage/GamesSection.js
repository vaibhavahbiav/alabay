import React, { Component } from 'react'
import GameSlider from './GameSlider'
import GamePreviewSlider from './GamePreviewSlider'

export class GamesSection extends Component {
    render() {
        return (
            <section className='bg-[#FFC700]'>
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className='lg:font-black lg:text-[200px] text-white font-montserrat'>GAMES</h2>
                    <span className='lg:font-black lg:text-[64px] font-montserrat text-[#353535]'>Stay tuned for upcoming games !</span>
                    <GameSlider></GameSlider>
                    <GamePreviewSlider></GamePreviewSlider>
                </div>
            </section>
        )
    }
}

export default GamesSection
