import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="text-center container mx-auto mt-28 mb-10">
                <h1 className="text-3xl font-bold mb-4">Welcome to Programmer</h1>
                <p className="text-lg mb-10">An interactive educational platform to enhance your programming skills.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

                    {/* Live Lectures Section */}
                    <section className="my-3 mx-5 bg-yellow-400 text-gray-900 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold">Live Lectures</h2>
                        <p className="my-4">Join live programming lectures conducted by experts in the field.</p>
                        <Link to="/liveLectures" className="hover:text-gray-900 text-blue-600">Learn More</Link> <br /><br />
                        <Link to="/liveLectures" className="bg-gray-900 text-yellow-500 px-4 py-2 rounded hover:bg-green-600 hover:text-gray-900 mb-3">Proceed</Link>
                    </section>

                    {/* Videos Section */}
                    <section className="my-3 mx-5 bg-yellow-400 text-gray-900 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold">Videos</h2>
                        <p className="my-4">Watch educational videos covering various programming topics.</p>
                        <Link to="/videos" className="hover:text-gray-900 text-blue-600">Learn More</Link> <br /><br />
                        <Link to="/videos" className="bg-gray-900 text-yellow-500 px-4 py-2 rounded hover:bg-green-600 hover:text-gray-900 mb-3">Proceed</Link>
                    </section>

                    {/* Games Section */}
                    <section className="my-3 mx-5 bg-yellow-400 text-gray-900 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold">Games</h2>
                        <p className="my-4">Play interactive and educational games to reinforce programming concepts.</p>
                        <Link to="/games" className="hover:text-gray-900 text-blue-600">Learn More</Link> <br /><br />
                        <Link to="/games" className="bg-gray-900 text-yellow-500 px-4 py-2 rounded hover:bg-green-600 hover:text-gray-900 mb-3">Proceed</Link>
                    </section>

                    {/* Notes Section */}
                    <section className="my-3 mx-5 bg-yellow-400 text-gray-900 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold">Notes</h2>
                        <p className="my-4">Access educational notes to aid your learning process.</p>
                        <Link to="/notes" className="hover:text-gray-900 text-blue-600">Learn More</Link> <br /><br />
                        <Link to="/notes" className="bg-gray-900 text-yellow-500 px-4 py-2 rounded hover:bg-green-600 hover:text-gray-900 mb-3">Proceed</Link>
                    </section>

                </div>

            </div>
        </div>
    );
}

export default Home;


