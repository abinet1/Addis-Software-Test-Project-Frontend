import { call, put, takeEvery } from 'redux-saga/effects';
import { getMusicsSuccess, getMusicSuccess } from './musicState';
const Base_Url = `http://localhost:8080/api/music`

// @ts-ignore
function* workGetMusicsFeatch(payload){
    const title: string|undefined = payload.payload.title;
    const album: string|undefined = payload.payload.album;
    const genre: string|undefined = payload.payload.genre;
    
    // @ts-ignore
    const musics = yield call(() => fetch(`${Base_Url}?title=${title}&album=${album}&genre=${genre}`));

    // @ts-ignore
    const formattedMusics = yield musics.json();

    yield put(getMusicsSuccess(formattedMusics))
}


// @ts-ignore
function* workGetMusicFeatch(payload){
    const id: string|undefined = payload.payload;
    
    // @ts-ignore
    const music = yield call(() => fetch(`${Base_Url}/${id}`));

    // @ts-ignore
    const formattedMusic = yield music.json();

    yield put(getMusicSuccess(formattedMusic))
}
// @ts-ignore
function* workAddMusic(payload){
    const title: string|undefined = payload.payload.title;
    const album: string|undefined = payload.payload.album;
    const genre: string|undefined = payload.payload.genre;
    const artist: string|undefined = payload.payload.artist;

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

function* musicSaga(){
    yield takeEvery('music/getMusicsFetch', workGetMusicsFeatch);
    yield takeEvery('music/getMusicFetch', workGetMusicFeatch);
    yield takeEvery('music/addMusic', workAddMusic);
    
}

export default musicSaga