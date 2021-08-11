var speed = '10Mbps'
var size = '1Gb'

window.onload = init
function init(){
    var speedCookie = getCookie('speed')
    var sizeCookie = getCookie('size')
    if(speedCookie!==null){speed = speedCookie}
    if(sizeCookie!==null){size = sizeCookie}
    document.getElementById(`sizeTxt`).innerHTML = `${toString(size)} >`
    document.getElementById(`speedTxt`).innerHTML = `${toString(speed)} >`
    document.getElementById(`sizeInput`).value = toNumber(size)
    document.getElementById(`speedInput`).value = toNumber(speed)
}

setInterval(() => {
    speed = `${document.getElementById(`speedInput`).value}${toString(speed)}`
    size = `${document.getElementById(`sizeInput`).value}${toString(size)}`
    setCookie('speed', speed, 30)
    setCookie('size', size, 30)
    
    var speedType = toString(speed)
    var speedNumber = toNumber(speed)
    var sizeType = toString(size)
    var sizeNumber = toNumber(size)
    var resultTxt = document.getElementById(`result`)
    if(sizeNumber<0.0001 || speedNumber<0.0001 || Number.isNaN(sizeNumber) || Number.isNaN(speedNumber)){
        resultTxt.innerHTML = `n/a`
    } else {
        if(sizeType=='Kb'){sizeNumber = sizeNumber/1000}
        if(sizeType=='Gb'){sizeNumber = sizeNumber*1000}
        if(sizeType=='Tb'){sizeNumber = sizeNumber*1000000}
        if(speedType=='Kbps'){speedNumber = speedNumber/8000}
        if(speedType=='Mbps'){speedNumber = speedNumber/8}
        if(speedType=='Gbps'){speedNumber = speedNumber*125}
        if(speedType=='Kb/s'){speedNumber = speedNumber/1000}
        if(speedType=='Gb/s'){speedNumber = speedNumber*1000}
        var timeSeconds = sizeNumber/speedNumber
        if(timeSeconds<1){
            resultTxt.innerHTML = 'Instant'
        } else {
            resultTxt.innerHTML = `${formatTime(timeSeconds)}`
        }
        
    }
},200)


function setSpeedType(type){
    var n = toNumber(speed)
    speed = `${n}${type}`
    document.getElementById(`speedTxt`).innerHTML = `${type} >`
}
function setSizeType(type){
    var n = toNumber(size)
    size = `${n}${type}`
    document.getElementById(`sizeTxt`).innerHTML = `${type} >`
}


function formatTime(s, mode){
    var output = 0
    let day = `${Math.floor(s / (24*3600))}:`
    s = s % (24*3600)
    let hour = `${Math.floor(s / 3600)}:`
    s = s % 3600
    let minute = `${Math.floor(s / 60)}:`
    s = s % 60
    let second = Math.floor(s)
    if(mode==true){
        output = `${day} Days, ${hour} Hours, ${minute} Minutes, ${second} Seconds`
    } else {
        if(day=='0:'){day=''}
        if(hour=='0:'){
            hour=''
        } else {
            if(hour.toString().length==2){
                hour = `0${hour}`
            }
        }
        if(minute=='0:'){
            minute=''
        } else {
            if(minute.toString().length==2){
                minute = `0${minute}`
            }
        }
        if(second=='0:'){
            second=''
        } else {
            if(second.toString().length==1 && second>9){
                second = `0${second}`
            }
        }
        if(day=='' && hour=='' && minute==''){
            output = `${second} seconds`
        } else {
            output = `${day}${hour}${minute}${second}`
        }
        
    }
    return output
}

//function toNumber(s){return Number(s.match(/\d/g).join(""))}
function toNumber(s){return parseFloat(s)}
function toString(s){return s.replace(/[0-9.]/g, '')}

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


var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

