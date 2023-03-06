import React from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar';
import Body from './components/layout/Body';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import MusicDetail from './components/layout/MusicDetail';
import MusicUpdate from './components/Form/MusicUpdate';
import AddMusic from './components/Form/AddMusic';
import FOF from './FOF';

function App() {

  // @ts-ignore
  return (
    <BrowserRouter>
      <NavBar />
      <br/>
      <Routes>        
        <Route path="/*" element={<FOF msg=" 404 page dasen't exist"/>} />
        <Route path="/" element={<Body />} />
        <Route path="/add" element={<AddMusic />} />
        <Route path="/:id" element={<MusicDetail />} />
        <Route path="/update/:id" element={<MusicUpdate />} />
        <Route path="/delete/:id" element={<Body />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
