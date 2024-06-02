function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("artist 1", "title 1"));
console.log(make_album("artist 2", "title 2", 4));
