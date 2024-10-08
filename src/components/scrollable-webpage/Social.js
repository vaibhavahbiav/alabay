import React, { Component } from 'react'

const socials = [
    {
        image: "./assets/social/social-twitter.png",
        text: "Twitter Link",
        link: "",
    },
    {
        image: "./assets/social/social-telegram.png",
        text: "Telegram Link",
        link: "",
    }
]

export class Social extends Component {
    render() {
        return (
            <section>
                <div className="flex flex-col lg:ml-[76px]">
                    <h2 className='lg:font-black lg:text-[200px] text-[#FFA800] text-left font-montserrat'>SOCIAL MEDIA LINKS</h2>
                    <div className='flex items-center justify-center'>
                        <div className='relative'>
                            <img src="./assets/social/social-bubble.png" alt="social bubble" />
                            <div className='absolute flex flex-col space-y-[60px] w-full top-1/2 -translate-y-1/2 left-[70px]'>
                                {socials.map((item, i) => {
                                    return (
                                        <a key={i} className='flex items-center space-x-9' href={item.link}>
                                            <img src={item.image} alt={item.text} />
                                            <span className='text-white font-montserrat lg:font-black lg:text-[40px]'>{item.text}</span>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                        <img src="./assets/social/social.png" alt="dog" />
                    </div>
                </div>

            </section>
        )
    }
}

export default Social
