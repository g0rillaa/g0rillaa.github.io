var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() { 
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        var e = document.getElementById(`visits`)
        //e.innerHTML = `Visits: ${xmlHttp.responseText}`
        console.log(xmlHttp.responseText)
    }
}

window.onload = init

function init(){
    var policyStatus = getCookie('policyAccept')
    if(policyStatus==null){
        showPolicyWindow()
    } else if(policyStatus=='false'){
        showPolicyWindow()
    } else if(policyStatus=='true'){
        sendReq('false')
    }
}
//setCookie('policyAccept', 'false', 365)

function sendReq(unique){
    xmlHttp.open("GET", `https://test.gorillaa.net/node/api/visits?u=${unique}`, true);
    xmlHttp.send(null);
}

function declinePolicy(){
    var goodbye = document.getElementById('goodbye')
    console.log(policyWindow)
    goodbye.style.top = '0px'
}
function acceptPolicy(){
    sendReq('true')
    setCookie('policyAccept', 'true', 365)
    closePolicyWindow()
}


function showPolicyWindow(){
    var policyWindow = document.getElementById('policyWindow')
    policyWindow.style.right = '10px'
    policyWindow.style.opacity = '100%'
}

function closePolicyWindow(){
    var policyWindow = document.getElementById('policyWindow')
    policyWindow.style.right = '-400px'
    policyWindow.style.opacity = '0%'
}


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}