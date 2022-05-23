function addSongToPlaylist(form) {
    let artist = form["artist"].value;
    let song = form["song"].value;
    let album = form["album"].value;

    let template = document.getElementById('playlist-entry-template').content.cloneNode(true);
    template.getElementById('artist-td').innerText = artist;
    template.getElementById('song-td').innerText = song;
    template.getElementById('album-td').innerText = album;

    let searchText = `${artist} ${song} ${album}`.toLowerCase().replace(' ', '+');
    let searchHref = `https://www.google.com/search?q=${searchText}`;

    template.getElementById('search-link').setAttribute('href', searchHref);

    let tbody = document.getElementById('playlist-body');
    tbody.appendChild(template);
}