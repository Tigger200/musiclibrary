export default class Playlist{
    constructor (artist, songs=[], runtime, heard, unheard){
    this.artist = artist
    this.songs = songs
    this.runtime = runtime
    this.unheard = unheard 
    this.heard = heard
    }

    addSong(song){
        this.songs.push(song)
 
    }
}

