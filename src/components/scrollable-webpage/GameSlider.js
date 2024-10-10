import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class GameSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };

        this.game = [
            {
                id: 1,
                image: "./assets/games/game-1.png",
                link: "/game-one"
            },
            {
                id: 2,
                image: "./assets/games/game-2.png",
                link: "/game-two"
            },
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
            index: (prevState.index + 1) % this.game.length,
        }));
    };

    render() {
        const { index } = this.state;
        const currentGame = this.game[index];

        return (
            <div className='relative flex items-center justify-center rounded-[50px] overflow-clip mx-4 w-full lg:w-[95%] lg:mt-48 border-white border-[14px] my-4'>
                <div className='relative'>
                    <Link to={currentGame.link} target="_blank" rel="noopener noreferrer">
                        <img className='bg-cover' src={currentGame.image} alt="game display" />
                        <button className={`flex items-center space-x-1 py-3 px-6 lg:space-x-11 lg:py-9 lg:px-[78px] ${currentGame.id === 1 ? 'bg-[#45d689]' : 'bg-[#843AFC]'} rounded-[100px] shadow-[12px_11px_11.3px_0px_#0000009C] absolute top-[80%] left-1/2 -translate-y-[80%] -translate-x-1/2`}>
                            <span className='font-black text-xl lg:text-[40px] font-montserrat text-white'>Discover</span>
                            <img className='scale-[60%] lg:scale-100' src="./assets/games/game-discover-btn-arrow.png" alt="discover button" />
                        </button>
                    </Link>
                </div>
                <button className='absolute top-1/2 -translate-y-1/2 right-0 lg:right-10' onClick={this.handleNext}>
                    <img className='scale-50 lg:scale-100' src="./assets/games/game-rarrow.png" alt="next icon" />
                </button>
            </div>
        );
    }
}

export default GameSlider;
