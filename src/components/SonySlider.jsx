
const SonySlider = () => {
    return (
        <div>
             <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src="https://i.ibb.co/GkV9Nyk/VAIO-DUO-11-sf.webp" className="w-full h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/HGxRSKH/images.jpg" className="w-full h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/rt5jxxr/SDC-Keynote-Sketch-main2.jpg" className="w-full h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SonySlider;