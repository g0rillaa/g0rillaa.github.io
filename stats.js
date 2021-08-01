var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() { 
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        console.log(xmlHttp.responseText)
    }
}
xmlHttp.open("GET", 'https://test.gorillaa.net/node/api/visits', true);
xmlHttp.send(null);
