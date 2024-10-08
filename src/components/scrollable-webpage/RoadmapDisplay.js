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
            <div className='flex space-x-5 rounded-2xl overflow-clip self-center items-center'>
                {roadmapItems.map((item, i) => {
                    // console.log(item, i);
                    return(
                    <div key={i} id={i} className='flex flex-col justify-between text-center text-white font-montserrat font-black text-[40px] w-[397px] h-[725px]'>
                        <span className='mt-6'>{item.text}</span>
                        <img src={item.image} alt="roadmap" />
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default RoadmapDisplay
