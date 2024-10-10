import React, { Component } from 'react'

const socials = [
    {
        image: "./assets/social/social-twitter.png",
        text: "Twitter Link",
        link: "https://x.com/?lang=en",
    },
    {
        image: "./assets/social/social-telegram.png",
        text: "Telegram Link",
        link: "https://x.com/?lang=en",
    }
]

export class Social extends Component {
    render() {
        return (
            <section className='py-4 pt-20 w-full bg-white'>
                <div className="flex flex-col mx-4 lg:ml-[76px]">
                    <h2 className='font-black text-5xl text-center lg:text-[200px] text-[#FFA800] lg:text-left font-montserrat'>SOCIAL MEDIA LINKS</h2>
                    <div className='flex flex-col lg:flex-row items-center justify-center'>
                        <div className='relative scale-75 lg:scale-100'>
                            <img className='' src="./assets/social/social-bubble.png" alt="social bubble" />
                            <div className='absolute flex flex-col space-y-[60px] w-full top-1/2 -translate-y-1/2 left-[70px]'>
                                {socials.map((item, i) => {
                                    return (
                                        <a key={`social link - ${i}`} className='flex items-center space-x-9' href={item.link}>
                                            <img src={item.image} alt={item.text} />
                                            <span className='text-white font-montserrat font-black text-3xl lg:text-[40px]'>{item.text}</span>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                        <img className='scale-1/2 lg:scale-full' src="./assets/social/social.png" alt="dog with phone for social contacts" />
                    </div>
                </div>

            </section>
        )
    }
}

export default Social
