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
            <section>
                <div className='flex flex-col lg:space-y-11 justify-start items-start mt-28'>
                    <div className='flex items-center font-montserrat lg:font-black lg:text-[64px]'>
                        <span className='text-[#FFA800]'>GAME </span>
                        <span className='text-[#353535]'>PREVIEWS</span>
                    </div>
                    <div className='flex space-x-4 items-center justify-between'>
                        <div className='flex lg:space-x-10'>
                            {displayedImages.map((src, i) => (
                                <img key={i} src={src} alt={`game preview ${start + i + 1}`} />
                            ))}
                        </div>
                        <button onClick={this.handleNext}>
                            <img src="./assets/games/game-rarrow.png" alt="next arrow" />
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default GamePreviewSlider;
