export default class Playlists{
    constructor (Playlist, songs=[], heard){
    this.Playlist = Playlist
    this.songs = songs
    this.heard = heard
    }

    addSong(hello){
        this.songs.push(hello)
 
    }
}

