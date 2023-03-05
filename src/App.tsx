import React from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar';
import Body from './components/layout/Body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MusicDetail from './components/layout/MusicDetail';
import MusicUpdate from './components/Form/MusicUpdate';

function App() {

  // @ts-ignore
  return (
    <BrowserRouter>
      <NavBar />
      <br/>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/:id" element={<MusicDetail />} />
        <Route path="/:id/update" element={<MusicUpdate />} />
        <Route path="/:id/delete" element={<Body />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
