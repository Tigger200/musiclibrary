import Playlists from './Playlist.js';
import Song from './Song.js';
import Listener from './Listener.js';

let classActPlaylist = new Playlists('Class Act', [], false);

let accordingtoyou = new Song('According to you', 'Oranthani', 'farts', 'poprock', '3:21');
let makeithappen = new Song('Make it happen', 'Mariah', 'Carey', 'pop', '3:22');
let signedsealeddelivered = new Song('Signed sealed delivered', 'Stevie', 'Wonder', 'r&b', '3:33');
let hello = new Song('hello', 'Lionel', 'Richie', 'r&b', '3:21');

classActPlaylist.addSong(accordingtoyou);
classActPlaylist.addSong(makeithappen);
classActPlaylist.addSong(signedsealeddelivered);

let mary = new Listener("Mary Fuller", 'Female', 51, 176121, 30314)

console.log(classActPlaylist);
console.log(delete Song.runtime)
console.log(Song)