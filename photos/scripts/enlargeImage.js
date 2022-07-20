function enlargeImage(id){
    $('#enlargedImgBack').css('opacity', '100%')
    $('#enlargedImgBack').css('pointer-events', 'all')
    $('body').css('overflow-y', 'hidden')
    var img = $("#enlargedImg").attr("src",`${imgUrl}${currentAlbum.path}/${id}-min.jpg`);
    resizeEnlargedImage()
    img.onload = resizeEnlargedImage()
}

function enlargedImgContainerClose(){
    $('#enlargedImgBack').css('opacity', '0%')
    $('#enlargedImgBack').css('pointer-events', 'none')
    $('body').css('overflow-y', 'scroll')
    $("#enlargedImg").attr("src","");
}

function resizeEnlargedImage(){
    screenWidth = $(window).width()*0.9
    screenHeight = $(window).height()*0.85
    imgWidth = $("#enlargedImg").width()
    imgHeight = $("#enlargedImg").height()
    if(imgWidth>screenWidth){
        $("#enlargedImg").css('width', `90%`)
        $("#enlargedImg").css('height', 'unset')
    }
    if(imgHeight>screenHeight){
        $("#enlargedImg").css('width', `unset`)
        $("#enlargedImg").css('height', `85%`)
    }
}