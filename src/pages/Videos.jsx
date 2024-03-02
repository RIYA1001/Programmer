import { useState } from 'react';

const Videos = () => {
    const [selectedCategory, setSelectedCategory] = useState('front-end');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleFullScreen = (event) => {
        const elem = event.target;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    };

    return (
        <div className="text-center container mx-auto my-28 p-2">
            <div className="grid grid-cols-4">
                <div className="col-span-1">
                    <h2 className="text-2xl font-bold mb-4">Videos</h2>
                </div>
                <div className="col-span-3 flex bg-gray-300 rounded-3xl">
                    <button
                        className={`text-xs lg:text-sm font-bold py-2 px-4 rounded-3xl ${selectedCategory === 'front-end' ? 'bg-yellow-400 text-gray-900' : ''}`}
                        onClick={() => handleCategoryChange('front-end')}
                    >
                        Front-end Developer
                    </button>
                    <button
                        className={`text-xs lg:text-sm font-bold py-2 px-4 rounded-3xl ${selectedCategory === 'ui-designing' ? 'bg-yellow-400 text-gray-900' : ''}`}
                        onClick={() => handleCategoryChange('ui-designing')}
                    >
                        UI Designing
                    </button>
                    <button
                        className={`text-xs lg:text-sm font-bold py-2 px-4 rounded-3xl ${selectedCategory === 'Java' ? 'bg-yellow-400 text-gray-900' : ''}`}
                        onClick={() => handleCategoryChange('Java')}
                    >
                        Java Developer
                    </button>
                    <button
                        className={`text-xs lg:text-sm font-bold py-2 px-4 rounded-3xl ${selectedCategory === 'full-stack-development' ? 'bg-yellow-400 text-gray-900' : ''}`}
                        onClick={() => handleCategoryChange('full-stack-development')}
                    >
                        Full Stack Development
                    </button>
                </div>
            </div>
            <br />
            <br />

            <div className="center mx-auto">

                {selectedCategory === 'front-end' && (
                    <div className="center mx-auto grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/InvSEpJUXu4"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/Yvz_axxWG4Y"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/-FldHnejaA4"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/ANzPM5-lwXc"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/dgKSqz3it50"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/wOnv-BMPv-w"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/avKl2ykXCp4"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/--XrIa-iey0"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/iuqQEk6mx6w"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/nGhKIC_7Mkk"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/CrSC1ZA9j0M"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/rXuHGLzSmSE"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>



                    </div>
                )}
                {selectedCategory === 'ui-designing' && (
                    <div className="center mx-auto grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/lYAk5ebCg3g"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/1pW_sk-2y40"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/slentvTk3gY"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/c1EW8Ucj6sQ"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/Q9GUbJcszfk"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/aqYTRkuEgVs"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/1h73MOcH3xA"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/JGLfyTDgfDc"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/1gBqXHCS4l8"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/M0JRk9LPOq4"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/S6T6hrc8cQo"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/jwCmIBJ8Jtc"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>


                    </div>
                )}
                {selectedCategory === 'Java' && (
                    <div className="center mx-auto grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/7pv3dSXSHIc"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/UmnCZ7-9yDY"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/eIrMbAQSU34"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/2ZLl8GAk1X4"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/xk4_1vDrzzo"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/rV_3Lewxx6o"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/bSrm9RXwBaI"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/7nq_o2RE4V8"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/CFD9EFcNZTQ"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/walNht-t2DE"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/GoXwIVyNvX0"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/4EP8YzcN0hQ"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>


                    </div>
                )}
                {selectedCategory === 'full-stack-development' && (
                    <div className="center mx-auto grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/ANzPM5-lwXc"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/dgKSqz3it50"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/wOnv-BMPv-w"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/avKl2ykXCp4"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/--XrIa-iey0"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/iuqQEk6mx6w"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/nGhKIC_7Mkk"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/CrSC1ZA9j0M"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/rXuHGLzSmSE"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/InvSEpJUXu4"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>

                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/Yvz_axxWG4Y"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>
                        <iframe
                            width="350"
                            height="200"
                            src="https://www.youtube.com/embed/-FldHnejaA4"
                            title="YouTube Video"
                            allowFullScreen
                            onClick={handleFullScreen}
                            className='place-self-center'
                        ></iframe>


                    </div>
                )}
            </div>
        </div>
    )
}

export default Videos;
