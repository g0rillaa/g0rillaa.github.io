function getAllAlbums(){
    //xmlHttp.open("GET", `http://localhost:3922/allalbums`, true);
    xmlHttp.open("GET", `https://test.gorillaa.net/photoapi/allalbums`, true);
    xmlHttp.send(null);
}

var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() { 
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        var r = JSON.parse(xmlHttp.responseText)
        console.log(r)
        if(r.msg=='all-albums'){
            albums = r.data
            addAllAlbums(albums)
        }
    }
}