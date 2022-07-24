var albums = []
var albumNum = 0

$(document).ready(function() {
    getAllAlbums()
});

setInterval(() => {
    var scroll = $(window).scrollTop() + $(window).height();
    var height = $(document).height();
    if(scroll + 200 > height){
        loadNextAlbum()
    }
    console.log(scroll, height)
},250)