import React, { Component } from 'react'

const roadmapItems = [
    {
        text: "Community Building and Initial Launch",
        image: "./assets/roadmap/roadmap-1.png",
        color: "#DBC70C"
    },
    {
        text: "Merchandise Store Launch",
        image: "./assets/roadmap/roadmap-2.png",
        color: "#00D4D4"
    },
    {
        text: "Community Events and contests",
        image: "./assets/roadmap/roadmap-3.png",
        color: "#D427FF"
    },
    {
        text: "Expansion and New Features",
        image: "./assets/roadmap/roadmap-4.png",
        color: "#8F3A3C"
    }
]

export class RoadmapDisplay extends Component {
    render() {
        return (
            <section className='w-full pb-32 lg:pb-60 overflow-clip lg:relative lg:z-[1] lg:after:absolute lg:after:bg-white lg:after:w-[150%] lg:after:h-full lg:after:bottom-12 lg:after:-right-20 lg:after:rotate-[-5deg] lg:after:z-[2]'>
                <div className='flex w-full justify-center items-center '>
                    <div className='flex items-center justify-center overflow-clip space-x-2 rounded-3xl lg:space-x-5 '>
                        {roadmapItems.map((item, i) => {
                            return (
                                <div key={`roadmap item - ${i}`} className={`${`bg-[${item.color}]`} ${i === 0 ? 'bg-[#DBC70C]':'bg-black'} ${i === 1 ? 'bg-[#00D4D4]':'bg-black'} ${i === 0 ? 'bg-[#D427FF]':'bg-black'} ${i === 0 ? 'bg-[#8F3A3C]':'bg-black'} lg:z-[3] flex flex-col justify-between items-center text-center text-white font-montserrat font-black text-base w-[150px] h-[200px] lg:text-[40px] lg:w-[350px] lg:h-[725px] relative z-[10] after:absolute after:block after:w-full after:h-full after:content-[""] after:bg-gradient-to-t after:from-white after:to-transparent after:to-40% after:z-[20]`}>
                                    <span className='mt-2 lg:mt-6 lg:leading-10'>{item.text}</span>
                                    <img className='w-1/2 lg:w-full' src={item.image} alt="roadmap" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default RoadmapDisplay
