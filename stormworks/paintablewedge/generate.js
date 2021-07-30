setInterval(() => {
    var size = document.getElementById('slider')
    var txt = document.getElementById('sizeTxt')
    txt.innerHTML = `1x${size.value} Wedge`
},100)

function loadFileAsText(){
    var fileToLoad = document.getElementById("fileToLoad").files[0];
    console.log(fileToLoad)
    if(fileToLoad==undefined){
        return document.getElementById('genState').innerHTML = `Upload a file first`
    }
    console.log(fileToLoad.type)
    if(fileToLoad.type!=='text/xml'){
        return document.getElementById('genState').innerHTML = `File is not XML`
    }

    if(fileToLoad.size>3000){
        return document.getElementById('genState').innerHTML = `File shouldn't be > 3kB`
    }
  
    document.getElementById('genState').innerHTML = `Processing...`
    
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };
  
    fileReader.readAsText(fileToLoad, "UTF-8");
}