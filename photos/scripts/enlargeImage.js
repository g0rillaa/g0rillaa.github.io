function enlargeImage(id){
    $('#enlargedImgBack').css('opacity', '100%')
    $('#enlargedImgBack').css('pointer-events', 'all')
    $('body').css('overflow-y', 'hidden')
    $("#enlargedImg").attr("src",`${imgUrl}default/${id}-min.jpg`);
}

function enlargedImgContainerClose(){
    $('#enlargedImgBack').css('opacity', '0%')
    $('#enlargedImgBack').css('pointer-events', 'none')
    $('body').css('overflow-y', 'scroll')
    $("#enlargedImg").attr("src","");
}