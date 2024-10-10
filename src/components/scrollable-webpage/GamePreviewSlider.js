import React, { Component } from 'react';

class GamePreviewSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };

        this.images = [
            "./assets/games/preview-1.png",
            "./assets/games/preview-2.png",
            "./assets/games/preview-3.png",
            "./assets/games/preview-2.png",
            "./assets/games/preview-3.png",
        ];
        this.interval = null;
    }

    componentDidMount() {
        this.interval = setInterval(this.handleNext, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleNext = () => {
        this.setState((prevState) => ({
            index: (prevState.index + 1) % Math.ceil(this.images.length / 3),
        }));
    };

    render() {
        const { index } = this.state;
        const start = index * 3;
        const displayedImages = this.images.slice(start, start + 3);

        return (
            <section className='py-4'>
                <div className='flex flex-col item space-y-5 items-center justify-center lg:space-y-11 lg:justify-start lg:items-start mt-10 lg:mt-28 mx-4 lg:mx-auto'>
                    <div className='flex items-center font-montserrat font-black text-6xl lg:text-[64px]'>
                        <span className='text-white lg:text-[#FFA800]'>GAME&nbsp;</span>
                        <span className='text-[#353535]'>PREVIEWS</span>
                    </div>
                    <div className='space-x-2 lg:space-x-4 relative lg:min-w-full lg:mx-auto min-w-full'>
                        <div className='flex space-x-4 lg:space-x-10 '>
                            {displayedImages.map((src, i) => (
                                <img className='size-[180px] lg:size-[500px] rounded-[28px] overflow-clip' key={`game preview - ${i}`} src={src} alt={`game preview ${start + i + 1}`} />
                            ))}
                        </div>
                        <button onClick={this.handleNext}>
                            <img className='absolute top-1/2 -translate-y-1/2 right-4 scale-50 lg:scale-100' src="./assets/games/game-rarrow.png" alt="game preview slidernext arrow" />
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default GamePreviewSlider;
