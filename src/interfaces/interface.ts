export interface MusicType{
    _id: string|'',
    title: string|'',
    genre: string|'',
    album: string|'',
    artist: string|'',
    image: string|'',
    date: string|'',
    __v: number|0
}

export interface MusicsType{
    music: MusicType[];
}



export interface FilterType{
    title: string|'',
    genre: string|'',
    album: string|''
}