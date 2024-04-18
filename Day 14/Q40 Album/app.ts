//  Album: Create objects for music albums.

function make_album(artist: string, title: string, tracks?: number) {
    let album: { artist: string; title: string; tracks?: number } = { artist, title };
    if (tracks != undefined) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_album(`Artist One`, `The First Album`));
console.log(make_album(`Artist Two`, `The Second Album`, 12));
console.log(make_album(`Artist Three`, `The Third Album`));
