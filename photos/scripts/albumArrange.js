function addPageAlbum(album){
    $('#albumTitle').html(album.title)
    $('#albumTitle').attr(`href`, 'https://instagram.com')
    $('#albumDate').html(album.date)
    $('#albumLocation').html(album.location)
    var photosContainer = $('#albumPhotosContainer')
    album.photoSrcs.forEach(photo => {
        var img = $('<img>', {
            src: `${imgUrl}default/${photo}-min.jpg`,
            class: 'image'
        }).appendTo(photosContainer);
        img.click(() => {
            enlargeImage(`${photo}`)
        })
    })
}