const IntelSlider = () => {
    return (
        <div>
             <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src="https://i.ibb.co/NSkTMmQ/download.jpg" className="w-full h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/qRJMVb6/gsmarena-005.jpg" className="w-full h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/z8p1SFy/19553521-14207119935613-0.png" className="w-full h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IntelSlider;