
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ScoreContext } from '../Context/ScoreContext';

const Games = () => {
  const { guessingEnabled } = useContext(ScoreContext);
  
  return (
    <div>
      <div className="text-center container mx-auto mt-28 mb-10 p-2">
        <h1 className="text-3xl font-bold mb-4">Welcome to Programmer</h1>
        <p className="text-lg mb-10">An interactive educational platform to enhance your programming skills.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2">

          {/* Test Section */}
          <section className="my-3 mx-5 bg-yellow-400 text-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Test</h2>
            <p className="my-4">Access educational test to aid your learning process.</p><br />
            <Link to="/mcq" className="bg-gray-900 text-yellow-500 px-4 py-2 rounded hover:bg-green-600 hover:text-gray-900 mb-3">Proceed</Link>
          </section>

          {/* Guessing Section */}
          <section className={`my-3 mx-5 bg-yellow-400 text-gray-900 p-6 rounded-lg shadow-md ${guessingEnabled ? '' : 'pointer-events-none'}`}>
            <h2 className="text-xl font-bold">Guessing</h2>
            <p className="my-4">After passing the test, you are allowed to play one game.</p><br />
            <Link to="/guessing" className={`bg-gray-900 text-yellow-500 px-4 py-2 rounded hover:bg-green-600 hover:text-gray-900 mb-3 ${guessingEnabled ? 'enabled' : 'disabled'}`}>Proceed</Link>
          </section>

        </div>

      </div>
    </div>
  );
}

export default Games;

