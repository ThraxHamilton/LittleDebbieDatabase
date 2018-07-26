console.log('Screw')

let albumList = []

const createAlbumList = (title, artist, year, label) => {
    const album = {
        title: title,
        artist: artist,
        year: year,
        label: label, 
    }
    albumList.push(album)
}
createAlbumList('On Top of the World', '8Ball & MJG', '1995', 'Suave House')
createAlbumList('ATLiens', 'OutKast', '1996', 'LaFace')
createAlbumList('E.1999', 'Bone Thugs-N-Harmony', '1995', 'Ruthless')

function setAlbum () {
    const stringified = JSON.stringify(albumList)
    localStorage.setItem('albums', stringified)
}


console.log(albumList)