import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Mcq from './components/Mcq';
import Slidepuzzle from './components/Slidepuzzle';
import Sudoku from './components/Sudoku';

import Videos from './pages/Videos';
import Games from './pages/Games';
import LiveLectures from './pages/LiveLectures';
import Notes from './pages/Notes';
import Home from './pages/Home';
import Help from './pages/Help';
import Profile from './pages/Profile';
import Sign from './pages/Sign';

import Chat from './components/SignIn/Chat';
import Login from './components/SignIn/Login';
import Button from './components/SignIn/Button';

function App() {
    return (
        <BrowserRouter>
            <div>

                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/chat' element={<Chat />} />
                    <Route path='/help' element={<Help />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/sign' element={<Sign />} />
                    <Route path='/liveLectures' element={<LiveLectures />} />
                    <Route path='/notes' element={<Notes />} />
                    <Route path="/videos" element={<Videos />} />
                    <Route path='/games' element={<Games />} />
                    <Route path="/mcq" element={<Mcq />} />

                    <Route path="/slidepuzzle" element={<Slidepuzzle />} />
                    <Route path="/sudoku" element={<Sudoku />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/button" element={<Button />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Footer />

            </div>
        </BrowserRouter>
    );
}

export default App;
