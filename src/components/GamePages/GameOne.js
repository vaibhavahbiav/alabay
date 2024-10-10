import React, { Component } from 'react'

const gameData = {
  title: "ALABAY HERITAGE",
  subText: "THE LOST ADVENTURE",
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
  '././././assets/games/gameOne/preview-1.png',
  '././././assets/games/gameOne/preview-2.png',
  '././././assets/games/gameOne/preview-3.png',
  '././././assets/games/gameOne/preview-4.png',
]

export class GameOne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSection: 1,
    }
    this.scrollRef = React.createRef();
  }

  switchSection = (section) => {
    this.setState({ activeSection: section });
  }

  handleScroll = () => {
    const scrollTop = this.scrollRef.current.scrollTop;
    if (scrollTop > 1) {
      this.setState({ activeSection: 2 })
    } else if (scrollTop < 1) {
      this.setState({ activeSection: 1 });
    }
  }

  render() {
    const { activeSection } = this.state;
    return (
      <section ref={this.scrollRef} onScroll={this.handleScroll} className="bg-[url('https://s3-alpha-sig.figma.com/img/9ea3/c2a5/258e9acc950cdef2a23e058d05c99fd5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h2ZtSZMtq87oU-xDZEgfe~ngWhCOn6K6OyHAjIJudqoYE5CadS0MrgBFiNUjZnFDgGRYZD4frEXa~A88lcBxbXniAnwuIRxwExdQSI1TUQqEOFCNGFG9Z~PEgAfUT52-Ax2qY6-LBj42LtVGMC-SkK2O4Cvi6vcfPn5LtuUIYxKipg~rEYw2OnUmQhODIg5rSd8e8WkK3LeJymeG4aKaaqxA7xNVNlTVAOoS~nnxlnFfXtPnL0CEUzupfA-fcicsNsnxYOaHtsKU2DIHEQWZjokx~4Yina8cgwgBTXuo9tFmj3SfuVMrc0ijXfmlH-FUAxhQGz7JDOxteYP5gSxTCg__')] bg-cover bg-no-repeat bg-center bg-scroll h-screen overflow-y-scroll font-montserrat relative ">
        <div className={` ${activeSection === 1 ? 'pt-[40px] lg:pt-[138px]' : 'pt-[10px] lg:pt-[20px]'} mx-5 pb-4 lg:mx-20 lg:pb-10`} >
          <div className='flex flex-col text-left'>
            <div className='flex flex-col'>
              <h1 className='font-black text-6xl lg:text-8xl text-white'>{gameData.title}</h1>
              <h3 className='mt-1 text-3xl lg:mt-2 font-black lg:text-5xl text-[#90FFAE]'>{gameData.subText}</h3>

              {activeSection === 1 && (
                <div className='flex flex-col space-y-8 lg:mt-10'>
                  <p className='lg:w-[600px] lg:font-bold lg:text-[22px] text-white'>{gameData.summary}</p>
                  <button className='flex items-center space-x-8 py-[10px] pl-4 pr-[73px] bg-[#90FFAE] rounded-[34px] w-fit hover:bg-white transition-all'>
                    <img src="././././assets/games/game-play.png" alt="play button" />
                    <span className='font-bold text-base lg:text-xl text-[#201E26]'>PLAY</span>
                  </button>
                  {/* preview */}
                  <div className='flex flex-col space-y-5 lg:pt-10'>
                    <span className='text-2xl lg:text-[32px] font-bold'>
                      <span className='text-[#90FFAE] '>GAME&nbsp;</span><span className='text-white'>PREVIEW</span>
                    </span>
                    <div className='flex items-center justify-start h-[150px] w-fit space-x-2 overflow-x-auto lg:h-[300px] lg:space-x-4 lg:mr-20'>
                      {gamePreview.map((item, i) => {
                        return (
                          <img className='h-full w-full border-4 border-white rounded-2xl' key={`game preview - ${i}`} src={item} alt={`game preview - ${i}`} />
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 2 && (
                <div className='flex flex-col text-white font-bold mt-5 lg:mt-10'>
                  <h4 className=' text-[#90FFAE] lg:text-[32px]'>FEATURES</h4>
                  <div className='lg:mt-10 lg:text-[22px] flex flex-col space-y-10 text-white lg:w-[80%]'>
                    <p className=''>
                      {featureOne.map((item, i) => {
                        return (
                          <span key={`feature-one ${i}`} className={`${i % 2 === 0 ? 'text-white' : 'text-[#90FFAE]'}`}>{item}&nbsp;</span>
                        )
                      })}
                    </p>
                    <p className=''>
                      {featureTwo.map((item, i) => {
                        return (
                          <span key={`feature-two ${i}`} className={`${i % 2 === 0 ? 'text-white' : 'text-[#90FFAE]'}`}>{item}&nbsp;</span>
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
                              <p>&nbsp;- <span className='text-[#90FFAE]'>{item.title}: </span>{item.description}</p>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                  {/* buttons */}
                  <div className='flex space-x-[50px] items-start mt-5 lg:mt-5'>
                    <button className='flex items-center space-x-8 py-[10px] pl-4 pr-[73px] bg-transparent text-white rounded-[34px]  w-[190px] h-[72px] hover:bg-white transition-colors border-4 border-white hover:text-[#201E26] lg:w-[220px] lg:h-[66px]'>
                      <img src="././././assets/games/game-play.png" alt="play button" />
                      <span className='font-bold text-xl'>PLAY</span>
                    </button>
                    <button className=' bg-transparent text-white rounded-[34px]  w-[190px] h-[72px] hover:bg-white transition-colors border-4 border-white hover:text-[#201E26] text-center lg:w-[220px] lg:h-[66px]'>
                      <span className='font-bold text-xl'>EXIT</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
        {/* slider */}
        <div className='fixed top-1 right-1 lg:top-1/2 lg:-translate-y-1/2 lg:right-[50px]  flex items-center flex-col space-y-5 h-[380px] scale-50 lg:scale-100'>
          <button onClick={() => this.switchSection(1)} className='size-[34px] rounded-lg bg-white/80 flex items-center justify-center group hover:bg-[#90FFAE] transition-colors'>
            <img className='group-hover:brightness-[20%] transition-all' src="././././assets/games/up-arrow.png" alt="up arrow" />
          </button>
          <div className='w-[22px] bg-white/80 h-[80%] rounded-2xl relative cursor-pointer'>
            <div className={`${activeSection === 1 ? 'top-0' : 'bottom-0'} absolute left-0 h-1/3 w-full bg-[#90ffae] rounded-2xl cursor-pointer`}></div>
          </div>
          <button onClick={() => this.switchSection(2)} className='size-[34px] rounded-lg bg-white/80 flex items-center justify-center group hover:bg-[#90FFAE] transition-colors rotate-180'>
            <img className='group-hover:brightness-[20%] transition-all' src="././././assets/games/up-arrow.png" alt="up arrow" />
          </button>
        </div>
      </section>
    )
  }
}

export default GameOne
