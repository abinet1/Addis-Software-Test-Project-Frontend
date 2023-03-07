
export default function stats(music){
    const albumsData=[]
    const artistsData=[]
    const genreData=[]

    for(let i in music ){
        var exist = false;
        for(let j in albumsData){
            if(music[i].album.toLowerCase() === albumsData[j].name.toLowerCase()){
                
                albumsData[j].count = albumsData[j].count+1;
                exist = true;
                break;
            }
        }
        if(!exist){
            albumsData.push({name: music[i].album, count: 1})
            exist=false;
        }

        for(let j in artistsData){
            if(music[i].artist.toLowerCase() === artistsData[j].name.toLowerCase()){
                artistsData[j].count = artistsData[j].count+1;
                exist = true;
                break;
            }
        }
        if(!exist){
            artistsData.push({name: music[i].artist, count: 1})
            exist=false;

        }

        for(let j in genreData){
            if(music[i].genre.toLowerCase() === genreData[j].name.toLowerCase()){
                genreData[j].count = genreData[j].count+1;
                exist = true;
                break;
            }
        }
        if(!exist){
            genreData.push({name: music[i].genre, count: 1})
            exist=false;

        }
    }
    return [albumsData,artistsData, genreData];
}