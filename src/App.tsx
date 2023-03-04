import React from 'react';
import './App.css';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMusicsFetch } from './state/musicState';
import NavBar from './components/navigation/NavBar';
import Body from './components/layout/Body';

function App() {

  // @ts-ignore
  const musics = useSelector(state => state.music.music);

  const dispatch = useDispatch();
  const filter = {title:"",album:"",genre:""}

  const initApp = useCallback(async () => {
    await dispatch(getMusicsFetch(filter));
  }, [dispatch]);

  useEffect(()=> {
    initApp();
  }, []);

  return (
    <div>
      <NavBar />
      <br/>
      {/* @ts-ignore */}
      <Body musics={musics}/>
    </div>
  );
}

export default App;
