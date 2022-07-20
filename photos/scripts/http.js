var apiUrl = 'https://test.gorillaa.net/photoapi/'
//var apiUrl = 'http://localhost:3922//'
var imgUrl = 'https://test.gorillaa.net/photolib/'

function getAllAlbums(){
    xmlHttp.open("GET", `${apiUrl}allalbums`, true);
    xmlHttp.send(null);
}
function getAlbum(id){
    xmlHttp.open("GET", `${apiUrl}getalbum?a=${id}`, true);
    xmlHttp.send(null);
}

var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() { 
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        var r = JSON.parse(xmlHttp.responseText)
        if(r.msg=='all-albums'){
            albums = r.data
            albums.sort((a, b) => {
                return b.order - a.order;
            });
            addAllAlbums(albums)
        }
        if(r.msg=='get-album'){
            currentAlbum = r.data
            addPageAlbum(currentAlbum)
        }
        if(r.msg=='error'){
            if(r.errmsg=='album not found'){
                showAlbumNotFound()
            }
        }
    }
}