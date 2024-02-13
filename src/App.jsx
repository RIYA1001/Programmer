import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Videos from './components/Videos';
import Games from './components/Games';
import LiveLectures from './components/LiveLectures';
import Notes from './components/Notes';
import Footer from './components/Footer';
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
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
