import React, { Component } from 'react'
import ScrollablePage from '../scrollable-webpage/ScrollablePage'

const subText = [
    {
        text: "Where the"
    },
    {
        text: "legendary Central Asian Shepherd Dog"
    },
    {
        text: "meets a new-age adventure."
    },
    {
        text: "Join us"
    },
    {
        text: "in celebrating the"
    },
    {
        text: "strength, loyalty,"
    },
    {
        text: "and"
    },
    {
        text: "heritage"
    },
    {
        text: "of the Alabay"
    },
    {
        text: "breed."
    },
]

export class LandingPage extends Component {
    render() {
        return (
            <section className="bg-[url('https://s3-alpha-sig.figma.com/img/6648/fff9/2dd3d3ca2ea2c2dede710d01d49c2ad1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~omDuTY6CwvLIWz9KGEleegUYjIDGP6bWsg~-QflM5E1p3q7BWd9~Fwav2-nTZsuaU7JK19ME~WNdZCGix4~Uth71ZjzmQvg6248NRqgLYGkRoAWNec7RUk90-di3Qh4tKtQCqJBEkwcQMZU5qTtgdP12Vl8itNkXIl1bQLYAl8tvvIy9bv84mRqo6Vg1pXYOKbZvaRYeD3rS22lqtPkbxMotIfAx8OhSzjh7NeJqkbX0cLGFuLjFafvF7jw~b82De5Xz0segopI4VDCNKUTkHFxfMK~WwG9RwZojocSLe2-T-4xjYEcfbK7xIoBDSnTLbnUygwGSoowQ3SpHLs~g__')] bg-cover bg-no-repeat bg-center bg-scroll h-screen overflow-y-scroll relative overflow-x-hidden">
                <h1 className='mt-10 text-center text-6xl mx-5 font-black lg:mt-5 lg:mx-14 lg:text-[100px] font-montserrat bg-gradient-to-b from-[#FFF280] to-[#7EFF5E] inline-block text-transparent bg-clip-text uppercase'>welcome to alabay world</h1>
                <div className='bg-[#181C27] w-screen text-center mt-28 py-10 px-[25px] lg:py-10 lg:px-[50px] lg:mt-[400px]'>
                    {subText.map((text, i)=>{
                        return(
                            <span key={`subtext - ${i}`} className={`${i % 2 === 0 ? 'bg-gradient-to-b from-[#FFF280] to-[#FFA800] inline-block text-transparent bg-clip-text':'text-white' } text-lg lg:font-black lg:text-5xl font-montserrat`}>{text.text}&nbsp;</span>
                        )
                    })}
                </div>
                <div className='top-[85%] lg:mx-16 rounded-[40px] z-10 absolute overflow-clip lg:top-[90%]'>
                    <ScrollablePage></ScrollablePage>
                </div>
            </section>

        )
    }
}

export default LandingPage
