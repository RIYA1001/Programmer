import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slidepuzzle from "./components/Slidepuzzle";
import Sudoku from "./components/Sudoku";

import Videos from "./pages/Videos";
import Mcq from "./pages/Mcq";
import LiveLectures from "./pages/LiveLectures";
import Notes from "./pages/Notes";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Profile from "./pages/Profile";
import Sign from "./pages/Sign";

import Java from "./components/Mcq/Java";
import C from "./components/Mcq/C";
import Csharp from "./components/Mcq/Csharp";
import Cplusplus from "./components/Mcq/Cplusplus";
import Python from "./components/Mcq/Python";
import JavaScript from "./components/Mcq/JavaScript";
import HTML from "./components/Mcq/HTML";
import CSS from "./components/Mcq/CSS";
import SQL from "./components/Mcq/SQL";
import PHP from "./components/Mcq/PHP";
import Dart from "./components/Mcq/Dart";
import DotNet from "./components/Mcq/DotNet";
import Kotlin from "./components/Mcq/Kotlin";
import Swift from "./components/Mcq/Swift";

import Chat from "./components/SignIn/Chat";
import Login from "./components/SignIn/Login";
import Button from "./components/SignIn/Button";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/liveLectures" element={<LiveLectures />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/mcq" element={<Mcq />} />

          <Route path="/java" element={<Java />} />
          <Route path="/c" element={<C />} />
          <Route path="/csharp" element={<Csharp />} />
          <Route path="/cplusplus" element={<Cplusplus />} />
          <Route path="/python" element={<Python />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/html" element={<HTML />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/sql" element={<SQL />} />
          <Route path="/php" element={<PHP />} />
          <Route path="/dart" element={<Dart />} />
          <Route path="/dotNet" element={<DotNet />} />
          <Route path="/kotlin" element={<Kotlin />} />
          <Route path="/swift" element={<Swift />} />

          <Route path="/slidepuzzle" element={<Slidepuzzle />} />
          <Route path="/sudoku" element={<Sudoku />} />

          <Route path="/chat" element={<Chat />} />
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
