import { call, put, takeEvery } from 'redux-saga/effects';
import { getMusicsFailure, getMusicsSuccess, getMusicSuccess } from './musicState';
import env from "react-dotenv";

// base url .....
const Base_Url = env.API_URL;

console.log(Base_Url);

// @ts-ignore
function* workGetMusicsFeatch(payload){
    const title = payload.payload.title;
    const album = payload.payload.album;
    const genre = payload.payload.genre;
    
    // @ts-ignore
    const musics = yield call(() => fetch(`${Base_Url}?title=${title}&album=${album}&genre=${genre}`));

    // @ts-ignore
    const formattedMusics = yield musics.json();

    yield put(getMusicsSuccess(formattedMusics))
}

// @ts-ignore
function* workGetMusicFeatch(payload){
    const id = payload.payload;
    try{
      // @ts-ignore
      const music = yield call(() => fetch(`${Base_Url}/${id}`));
    
      // @ts-ignore
      const formattedMusic = yield music.json();
    
      yield put(getMusicSuccess(formattedMusic))
    }catch(error){
      yield put(getMusicsFailure())
    }
}

// @ts-ignore
function* workAddMusic(payload){
  const title = payload.payload.title;
  const album = payload.payload.album;
  const genre = payload.payload.genre;
  const artist = payload.payload.artist;

  // @ts-ignore
  const music = yield call(() => fetch(`${Base_Url}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title:title, 
        album: album,
        genre:genre,
        artist: artist
      }),
    })
  );

  // @ts-ignore
  const formattedMusic = yield music.json();

  yield put(getMusicsSuccess(formattedMusic))
}

// @ts-ignore
function* workUpdateMusic(payload){
  const id = payload.payload.id;
  const title = payload.payload.title;
  const album = payload.payload.album;
  const genre = payload.payload.genre;
  const artist = payload.payload.artist;

  // @ts-ignore
  const music = yield call(() => fetch(`${Base_Url}/${id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title:title, 
        album: album,
        genre:genre,
        artist: artist
      }),
    })
  );

  // @ts-ignore
  const formattedMusic = yield music.json();

  yield put(getMusicSuccess(formattedMusic))
}

// @ts-ignore
function* workDeleteMusic(payload){
  const id: string|undefined = payload.payload;

  // @ts-ignore
  const music = yield call(() => fetch(`${Base_Url}/${id}/delete`, {
      method: "DELETE"
    })
  );

  // @ts-ignore
  const formattedMusic = yield music.json();

  yield put(getMusicsSuccess(formattedMusic))
}

function* musicSaga(){
    yield takeEvery('music/getMusicsFetch', workGetMusicsFeatch);
    yield takeEvery('music/getMusicFetch', workGetMusicFeatch);
    yield takeEvery('music/addMusic', workAddMusic);
    yield takeEvery('music/updateMusic', workUpdateMusic);
    yield takeEvery('music/deleteMusic', workDeleteMusic);
    
}

export default musicSaga;