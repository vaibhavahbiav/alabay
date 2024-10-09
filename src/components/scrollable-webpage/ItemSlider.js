import React, { Component } from 'react';

class ItemSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            activeTab: 'images',
        };
        this.slides = {
            images: [
                'assets/history.png',
                'assets/history.png',
                'assets/history.png',
                'assets/history.png',
                'assets/history.png',
                'assets/history.png',
                'assets/history.png',
                'assets/history.png',
            ],
            videos: [
                'https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ],
        };
    }

    componentDidMount() {
        this.autoSlide = setInterval(this.nextSlide, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.autoSlide);
    }

    setActiveTab = (tab) => {
        this.setState({ activeTab: tab, currentIndex: 0 });
    };

    nextSlide = () => {
        const { currentIndex, activeTab } = this.state;
        const totalSlides = this.getTotalSlides(activeTab);
        const newIndex = (currentIndex + 1) % Math.ceil(totalSlides / 3);
        this.setState({ currentIndex: newIndex });
    };

    // prevSlide = () => {
    //     const { currentIndex, activeTab } = this.state;
    //     const totalSlides = this.getTotalSlides(activeTab);
    //     const newIndex = (currentIndex - 1 + Math.ceil(totalSlides / 3)) % Math.ceil(totalSlides / 3);
    //     this.setState({ currentIndex: newIndex });
    // };

    getTotalSlides = (tab) => {
        if (tab === 'all') {
            return this.slides.images.length + this.slides.videos.length;
        }
        return this.slides[tab].length;
    };

    renderSlides = () => {
        const { currentIndex, activeTab } = this.state;
        const activeImages = this.slides.images;
        const activeVideos = this.slides.videos;
        const allSlides = [...activeImages, ...activeVideos];
        const slidesToShow = activeTab === 'all' ? allSlides : this.slides[activeTab];

        return slidesToShow.slice(currentIndex * 3, currentIndex * 3 + 3).map((media, index) => (
            <div key={index} className=" p-2 rounded-3xl w-fit overflow-hidden">
                {media.endsWith('.mp4') ? (
                    <video controls className="rounded-3xl w-[278px] h-[155px] lg:w-[456px] lg:h-[310px]">
                        <source src={media} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={media} alt={`Slide ${index}`} className="rounded-3xl w-[278px] h-[155px] lg:w-[456px] lg:h-[310px] bg-cover" />
                )}
            </div>
        ));
    };

    render() {
        const { activeTab } = this.state;

        return (
            <div className="mx-4 my-6 lg:mx-16 lg:my-10 w-fit">
                <div className="flex justify-center mb-4 space-x-11">
                    <button
                        className={`tab-button ${activeTab === 'all' ? 'text-[#FFA800]' : 'text-[#353535]'} font-black lg:text-[32px] font-montserrat`}
                        onClick={() => this.setActiveTab('all')}
                    >
                        All
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'images' ? 'text-[#FFA800]' : 'text-[#353535]'} font-black lg:text-[32px] font-montserrat`}
                        onClick={() => this.setActiveTab('images')}
                    >
                        Images
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'videos' ? 'text-[#FFA800]' : 'text-[#353535]'} font-black lg:text-[32px] font-montserrat`}
                        onClick={() => this.setActiveTab('videos')}
                    >
                        Videos
                    </button>
                </div>

                <div className="flex items-center justify-center mt-6 lg:mt-14 w-full">
                    {/* <button onClick={this.prevSlide} className="text-6xl rotate-180 py-[57px] px-[25px] rounded-[45px] bg-[#353535] drop-shadow-2xl">
                        <img src="./assets/arrow.png" alt="left arrow" />
                    </button> */}
                    <div className="overflow-hidden lg:w-4/5 mx-4 w-full lg:mx-auto">
                        <div className="slider flex transition-transform duration-1000 space-x-8 lg:space-x-[60px]">
                            {this.renderSlides()}
                        </div>
                    </div>
                    <button onClick={this.nextSlide} className="flex items-center justify-center text-lg py-3 px-2 scale-75 lg:scale-100 lg:text-6xl lg:py-[57px] lg:px-[25px] rounded-[45px] bg-[#353535] drop-shadow-2xl">
                        <img className='scale-[30%] lg:scale-full' src="./assets/arrow.png" alt="right arrow" />
                    </button>
                </div>
            </div>
        );
    }
}

export default ItemSlider;
