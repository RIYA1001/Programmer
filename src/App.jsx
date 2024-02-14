import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Test from './components/Test';
import GameLabs from './components/GameLabs';
import Videos from './pages/Videos';
import Games from './pages/Games';
import LiveLectures from './pages/LiveLectures';
import Notes from './pages/Notes';
import Home from './pages/Home';
import Help from './pages/Help';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Sign from './pages/Sign';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home/>} />
                    <Route path='/chat' element={<Chat/>} />
                    <Route path='/help' element={<Help/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/sign' element={<Sign/>} />
                    <Route path='/games' element={<Games/>} />
                    <Route path='/liveLectures' element={<LiveLectures/>} />
                    <Route path='/notes' element={<Notes/>} />
                    <Route path="/videos" element={<Videos/>} />
                    <Route path="/test" element={<Test/>} />
                    <Route path="/gameLabs" element={<GameLabs/>} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
