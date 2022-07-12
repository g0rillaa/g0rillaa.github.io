function addAllAlbums(albums){
    albums.forEach(a => {
        addAlbum(a)
    })
}

function addAlbum(albumData){
    var container = $('#albumsContainer')
    var album = $('<div>', {
        class: 'albumContainer',
    }).appendTo(container);
    var header = $('<div>', {
        class: 'albumHeaderContainer',
    }).appendTo(album);
    var title = $('<h2>', {
        class: 'albumTitle',
        html: albumData.title,
    }).appendTo(header);
    title.click(() => {
        window.open(`https://gorillaa.net/photos/album/${albumData.path}`)
    })
    $('<h2>', {
        class: 'albumDate',
        html: albumData.date,
    }).appendTo(header);
    var photos = $('<div>', {
        class: 'albumPhotosContainer',
    }).appendTo(album);
    albumData.photoSrcs.forEach(photo => {
        var img = $('<img>', {
            src: `https://test.gorillaa.net/photolib/${albumData.path}/${photo}-min.jpg`,
            class: 'showcaseImg'
        }).appendTo(photos);
        img.click(() => {
            window.open(`https://gorillaa.net/photos/album/${albumData.path}`)
        })
    })
}

