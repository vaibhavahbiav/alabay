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
            <section className='bg-[#FFC700] py-4 pb-20 lg:pb-60 w-full relative z-[1] overflow-clip lg:after:z-[2] lg:after:bg-white lg:after:block lg:after:absolute lg:after:-bottom-[40%] lg:after:-left-[135px] lg:after:w-[150%] lg:after:h-1/2 lg:after:rotate-[14deg]'>
                <div className="flex flex-col lg:pl-20 relative z-[3]">
                    <h2 className='font-black text-6xl items-center justify-center text-center lg:text-[200px] text-white lg:text-left font-montserrat'>TOKENOMICS</h2>
                    <div className='flex flex-col items-center justify-center mt-10 space-y-5 lg:flex-row lg:mr-10 lg:items-center lg:justify-center'>
                        <div className='flex flex-col w-fit space-y-5 lg:space-y-10 lg:mt-[166px]'>
                            {items.map((item, i) => {
                                return (
                                    <div key={i} className='flex flex-col text-left bg-[#353535] max-h-[192px] rounded-[30px] py-5 px-[76px] lg:py-7 lg:px-[76px] lg:space-y-5  shadow-[16.62px_20.12px_35.77px_0px_#A87D29]'>
                                        <span className='text-2xl lg:font-black lg:text-[40px] text-white font-montserrat'>{item.title}</span>
                                        <span className='text-2xl lg:font-black lg:text-[48px] text-[#FFF280] font-montserrat'>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <img className='w-1/2 h-1/3 lg:w-[60%] lg:h-[60%]' src="./assets/tokenomics.png" alt="dog" />
                    </div>
                </div>
            </section>
        )
    }
}

export default Tokennomics
