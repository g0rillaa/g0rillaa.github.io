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
        window.location.assign(`https://gorillaa.net/photos/album?a=${albumData.path}`)
        //window.location.assign(`http://localhost/photos/album?a=${albumData.path}`)
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
            src: `${imgUrl}${albumData.path}/${photo}-min.jpg`,
            class: 'showcaseImg'
        }).appendTo(photos);
        img.click(() => {
            window.location.assign(`https://gorillaa.net/photos/album?a=${albumData.path}&i=${photo}`)
            //window.location.assign(`http://localhost/photos/album?a=${albumData.path}&i=${photo}`)
        })
    })
}

