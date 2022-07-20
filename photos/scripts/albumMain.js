var currentAlbum = {}
var loadIntoImg = true

$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    var albID = urlParams.get('a')
    var imgID = urlParams.get('i')
    if(imgID==null || imgID==''){
        loadIntoImg = false
    }
    getAlbum(albID)
    if(loadIntoImg){
        enlargeImage(albID, imgID)
    }
    setTimeout(() => {
        resizeEnlargedImage()
        setTimeout(() => {
            resizeEnlargedImage()
        },200)
    },200)
});

function showAlbumNotFound(){
    $('#albumNotFoundContainer').css('visibility', 'visible')
    enlargedImgContainerClose()
}


$(window).resize(function() {
    resizeEnlargedImage()
});