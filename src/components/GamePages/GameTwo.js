import React, { Component } from 'react'

const gameData = {
  title: "ALABAY GUARDIAN",
  subText: "SHEPHERD OF THE STEPPES",
  summary: "Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors."
}

const featureOne = [
  'Explore a variety of landscapes, including ', 'mountains, forests, deserts', ' and', '  ancient ruins.'
]

const featureTwo = [
  'Use the Alabay\'s  ', 'abilities ', 'to solve ', 'puzzles ', 'that involve moving objects, activating mechanisms, or finding hidden clues.'
]

const featureThree = [
  'Discover relics that tell the story of the Alabay\'s ancestors, each piece contributing to a larger narrative about the breed\'s role in ancient history.'
]

const featureFour = [
  'Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.'
]

const gameModes = [
  {
    title: 'Time Trials',
    description: 'Compete in special timed challenges where the Alabai must navigate through complex mazes or complete puzzles within a time limit.'
  },
  {
    title: 'Exploration Mastery',
    description: 'A mode that rewards players for fully exploring every nook and cranny of the game\'s world, uncovering all secrets.'
  }
]

const gamePreview = [
  '././././assets/games/gameTwo/preview-1.png',
  '././././assets/games/gameTwo/preview-2.png',
  '././././assets/games/gameTwo/preview-3.png',
]

export class GameTwo extends Component {

  render() {
    return (
      <section className="bg-[url('https://s3-alpha-sig.figma.com/img/17ad/b147/27a80e9f26b1592e8f58588da90159bc?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UFuKumYsUeZsSWFb~Jen5kYxXglroCLa57Ac1lebJwyA8V9wguPeoZsGx-UgQp-XTJk5YBjlt~j-9mOO~adK1EwjN4pIf9Oh4j-2KgpsNkpaUAiPtbMXH~LyY67FL9GSnJDCP31C4gPGrvDjUWC27cgmLncTevMQZrFKobjRzAWGhPsZHCT-yTUH~FhIby8dOONu9u3-dXngof7GrAmD0lfZRnzE6DA2UivoL9wBafQNf8oU7aL~TiYQo72y9jmyfjqhi8ANq0lX~zVh-awjSVfWdp9e9mr4IAXEbGNrvTelrzeIR9YVLqt4uKKOCVEOWCrRT34iIops7e7MpyPgEg__')] bg-cover bg-no-repeat bg-center bg-scroll h-screen overflow-y-scroll font-montserrat relative">
        <div id='main' className='lg:mx-20 lg:pt-[138px] lg:pb-10 '>
          <div className='flex flex-col text-left'>
            <div className='flex flex-col'>
              <h1 className='lg:font-black lg:text-8xl text-white'>{gameData.title}</h1>
              <h3 className='lg:mt-2 lg:font-black lg:text-5xl text-[#A4A8FF]'>{gameData.subText}</h3>

              <div id='summary' className='flex flex-col space-y-8 lg:mt-10'>
                <p className='lg:w-[600px] lg:font-bold lg:text-[22px] text-white'>{gameData.summary}</p>
                <button className='flex items-center space-x-8 py-[10px] pl-4 pr-[73px] bg-[#A4A8FF] rounded-[34px] w-fit hover:bg-white transition-all'>
                  <img src="././././assets/games/game-play.png" alt="play button" />
                  <span className='font-bold text-xl text-[#201E26]'>PLAY</span>
                </button>
                {/* preview */}
                <div className='flex flex-col space-y-5 lg:pt-10'>
                  <span className='lg:text-[32px] lg:font-bold'>
                    <span className='text-[#A4A8FF] '>GAME</span><span className='text-white'>PREVIEW</span>
                  </span>
                  <div className='flex items-center justify-start h-[277px] space-x-4 lg:mr-20'>
                    {gamePreview.map((item, i) => {
                      return (
                        <img className='h-full border-4 border-white rounded-2xl' key={`game preview - ${i}`} src={item} alt={`game preview - ${i}`} />
                      )
                    })}
                  </div>
                </div>
              </div>

              <div id='features' className='flex flex-col text-white font-bold lg:mt-10'>
                <h4 className=' text-[#A4A8FF] lg:text-[32px]'>FEATURES</h4>
                <div className='lg:mt-10 lg:text-[22px] flex flex-col space-y-10 text-white lg:w-[80%]'>
                  <p className=''>
                    {featureOne.map((item, i) => {
                      return (
                        <span key={`feature-one ${i}`} className={`${i % 2 === 0 ? 'text-white' : 'text-[#A4A8FF]'}`}>{item}&nbsp;</span>
                      )
                    })}
                  </p>
                  <p className=''>
                    {featureTwo.map((item, i) => {
                      return (
                        <span key={`feature-two ${i}`} className={`${i % 2 === 0 ? 'text-white' : 'text-[#A4A8FF]'}`}>{item}&nbsp;</span>
                      )
                    })}
                  </p>
                  <p>{featureThree}</p>
                  <p>{featureFour}</p>
                  <div className='flex flex-col'>
                    <h5>Challange Modes</h5>
                    <ul className=''>
                      {gameModes.map((item, i) => {
                        return (
                          <li key={`mode ${i}`}>
                            <p>&nbsp;- <span className='text-[#A4A8FF]'>{item.title}: </span>{item.description}</p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                {/* buttons */}
                <div className='flex space-x-[50px] items-start lg:mt-20'>
                  <button className='flex items-center space-x-8 py-[10px] pl-4 pr-[73px] bg-transparent text-white rounded-[34px] w-fit hover:bg-white transition-colors border-4 border-white hover:text-[#201E26] lg:w-[220px] lg:h-[66px]'>
                    <img src="././././assets/games/game-play.png" alt="play button" />
                    <span className='font-bold text-xl'>PLAY</span>
                  </button>
                  <button className=' bg-transparent text-white rounded-[34px] w-fit hover:bg-white transition-colors border-4 border-white hover:text-[#201E26] text-center lg:w-[220px] lg:h-[66px]'>
                    <span className='font-bold text-xl'>EXIT</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* slider */}
        <div className='fixed top-1/2 -translate-y-1/2 right-[50px] hidden lg:flex lg:items-center flex-col space-y-5 lg:h-[380px]'>
          <button className='lg:size-[34px] rounded-lg bg-white/80 flex items-center justify-center group hover:bg-[#A4A8FF] transition-colors'>
            <img className='group-hover:brightness-[20%] transition-all' src="././././assets/games/up-arrow.png" alt="up arrow" />
          </button>
          <div className='lg:w-[22px] bg-white/80 lg:h-[80%] rounded-2xl lg:relative cursor-pointer'>
            <div className='absolute top-0 left-0 h-1/3 w-full bg-[#A4A8FF] rounded-2xl cursor-pointer'></div>
          </div>
          <button className='lg:size-[34px] rounded-lg bg-white/80 flex items-center justify-center group hover:bg-[#A4A8FF] transition-colors rotate-180'>
            <img className='group-hover:brightness-[20%] transition-all' src="././././assets/games/up-arrow.png" alt="up arrow" />
          </button>
        </div>
      </section>
    )
  }
}

export default GameTwo
