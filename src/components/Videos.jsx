
const Videos = () => {
    return (
        <div className="text-center container mx-auto mt-40 mb-10">
            <h2 className="text-2xl font-bold mb-4">Videos</h2>
            <p className="text-lg text-gray-700 mb-4">Watch educational videos covering various programming topics.</p>

            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/rhgwIhB58PA" // Use embed URL here
                title="YouTube Video" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

        </div>
    )
}

export default Videos;
