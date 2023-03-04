import { call, put, takeEvery } from 'redux-saga/effects';
import { getMusicsSuccess } from './musicState';
import env from "react-dotenv";

// @ts-ignore
function* workGetMusicsFeatch(payload){
    // const title: string = payload.title;
    // const album: string = payload.album;
    // const genre: string = payload.genre; ?title=${title}&album=${album}&genre=${genre}
    
    // @ts-ignore
    const musics = yield call(() => fetch(env.API_URL));
    // @ts-ignore
    const formattedMusics = yield musics.json();
    // const formattedMusicsShortened = formattedMusics.slice(0,10)
    yield put(getMusicsSuccess(formattedMusics))
}

function* musicSaga(){
    yield takeEvery('music/getMusicsFetch', workGetMusicsFeatch);
}

export default musicSaga