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
            <div className='flex space-x-2 w-full lg:space-x-5 rounded-2xl overflow-clip self-center items-center'>
                {roadmapItems.map((item, i) => {
                    return(
                    <div key={`roadmap item - ${i}`} className={`bg-[${item.color}] flex flex-col justify-between items-center text-center text-white font-montserrat font-black text-base w-[150px] h-[200px] lg:text-[40px] lg:w-[397px] lg:h-[725px]`}>
                        <span className='mt-2 lg:mt-6'>{item.text}</span>
                        <img className='w-1/2 lg:w-full' src={item.image} alt="roadmap" />
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default RoadmapDisplay
