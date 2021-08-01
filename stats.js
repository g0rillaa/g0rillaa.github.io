var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() { 
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        console.log(xmlHttp.responseText)
    }
}
xmlHttp.open("GET", 'https://149.28.168.158:19264/visits', true);
xmlHttp.send(null);
