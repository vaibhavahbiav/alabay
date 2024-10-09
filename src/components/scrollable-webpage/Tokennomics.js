import React, { Component } from 'react'

const items = [
    {
        title: "LIQUIDITY",
        text: "LOCKED"
    },
    {
        title: "CONTRACT",
        text: "RENOUNCED"
    },
    {
        title: "TAXES",
        text: "0%"
    }
]

export class Tokennomics extends Component {
    render() {
        return (
            <section className='bg-[#FFC700] py-4'>
                <div className="mx-4 lg:ml-20 flex flex-col">
                    <h2 className='font-black text-6xl items-center justify-center lg:text-[200px] text-white lg:text-left font-montserrat'>TOKENOMICS</h2>
                    <div className='flex flex-col mx-auto items-center justify-center mt-5 space-y-52 lg:flex-row lg:mr-10 lg:items-stretch lg:justify-center'>
                        <div className='flex flex-col w-fit space-y-5 lg:space-y-10 lg:w-[682px] h-[192px] lg:mt-[166px]'>
                            {items.map((item, i) => {
                                return (
                                    <div key={i} className='flex flex-col text-left bg-[#353535]  rounded-[30px] py-5 px-[76px] lg:py-7 lg:px-[76px] shadow-[16.62px_20.12px_35.77px_0px_#A87D29]'>
                                        <span className='text-2xl lg:font-black lg:text-[40px] text-white font-montserrat'>{item.title}</span>
                                        <span className='text-2xl lg:font-black lg:text-[72px] text-[#FFF280] font-montserrat'>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <img className='w-1/2 lg:w-full' src="./assets/tokenomics.png" alt="dog" />
                    </div>
                </div>
            </section>
        )
    }
}

export default Tokennomics
