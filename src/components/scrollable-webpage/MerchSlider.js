import React, { Component } from 'react'

export class MerchSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };

        this.merch = [
            {
                background: "./assets/merch/black-hoodie-bg.png",
                item: "./assets/merch/black-hoodie.png"
            },
            {
                background: "./assets/merch/blue-cap-bg.png",
                item: "./assets/merch/blue-cap.png"
            },
            {
                background: "./assets/merch/pink-tee-bg.png",
                item: "./assets/merch/pink-tee.png"
            },
            {
                background: "./assets/merch/yellow-tee-bg.png",
                item: "./assets/merch/yellow-tee.png"
            }
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
            index: prevState.index === this.merch.length - 1 ? 0 : prevState.index + 1
        }));
    };

    handlePrevious = () => {
        this.setState((prevState) => ({
            index: prevState.index === 0 ? this.merch.length - 1 : prevState.index - 1
        }));
    };

    render() {
        const { index } = this.state;
        const currentMerch = this.merch[index];

        return (
            <div className='relative flex items-center justify-center rounded-[50px] overflow-clip'>
                <div className='relative '>
                    <img className='w-full h-full bg-cover' src={currentMerch.background} alt="merch background" />
                    <img className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' src={currentMerch.item} alt="merch item" />
                </div>
                <button className='absolute top-1/2 -translate-y-1/2 left-10 cursor-pointer' onClick={this.handlePrevious}>
                    <img src="./assets/merch/merch-rarrow.png" alt="previous icon" className='rotate-180' />
                </button>
                <button className='absolute top-1/2 -translate-y-1/2 right-10 cursor-pointer' onClick={this.handleNext}>
                    <img src="./assets/merch/merch-rarrow.png" alt="next icon" />
                </button>
                <span className='absolute top-52 right-40 font-montserrat text-[#2A2027] lg:font-black lg:text-4xl'>Coming Soon...</span>
            </div>
        );
    }
}

export default MerchSlider
