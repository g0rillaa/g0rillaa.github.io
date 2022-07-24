function addPageAlbum(album){
    $('#albumTitle').html(album.title)
    if(album.urlLink!==''){
        $('#albumTitle').attr(`href`, album.url)
        $('#albumTitle').attr(`target`, `_blank`)
    }
    $('#albumDate').html(album.date)
    $('#albumLocation').html(album.location)
    var photosContainer = $('#albumPhotosContainer')
    album.photoSrcs.forEach(photo => {
        var img = $('<img>', {
            src: `${imgUrl}${album.path}/${photo}-min.jpg`,
            class: 'image'
        }).appendTo(photosContainer);
        img.click(() => {
            enlargeImage(album.path, `${photo}`)
        })
    })
}

