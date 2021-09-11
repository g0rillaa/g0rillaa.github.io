const httpPrefix = 'https://test.gorillaa.net/colourise/'
//const httpPrefix = 'http://localhost:8063//'

var token = ''
var reg = false
var loggedIn = false
var gotServers = false
var serverSelected = `choose`
var serverSelectedID = ``
var channels = []
var selectedChannel = ``
var channelSelectorHeight = 0

window.onload = init
function init(){
    token = getCookie('authToken')
    if(token==null){
        reg = true
        reqCode()
        loginBox(true)
    } else {
        login()
    }

    document.getElementById(`accountInfo`).addEventListener("mouseover", e => {
        document.getElementById(`logoutTxt`).style.opacity = '100%'
    }, false);
    document.getElementById(`accountInfo`).addEventListener("mouseleave", e => {
        document.getElementById(`logoutTxt`).style.opacity = '0%'
    }, false);

}

setInterval(() => {if(reg){login()}},2000)
var deltaValues = {
    serverSelected: 'choose',
    serverSelectedID: '',
}
setInterval(() => {
    if(deltaValues.serverSelected !== serverSelected){
        if(serverSelected==`choose`){return}
        channels = []
        clearChannels()
        getChannels()
        document.getElementById(`channelSelector`).innerHTML = `Select Channel`
    }
    deltaValues.serverSelected = serverSelected
    deltaValues.serverSelectedID = serverSelectedID
},300)



function runChannelAction(){

}

function hideChannelList(){
    document.getElementById(`channelSelectorItems`).style.opacity = '0%'
    document.getElementById(`channelSelectorItems`).style.pointerEvents = 'none'
    document.getElementById(`channelSelectorItems`).style.height = '0px'
}
function toggleChannelList(){
    if(document.getElementById(`channelSelectorItems`).style.opacity == '1'){
        document.getElementById(`channelSelectorItems`).style.opacity = '0%'
        document.getElementById(`channelSelectorItems`).style.pointerEvents = 'none'
        document.getElementById(`channelSelectorItems`).style.height = '0px'
    } else {
        document.getElementById(`channelSelectorItems`).style.opacity = '100%'
        document.getElementById(`channelSelectorItems`).style.pointerEvents = 'all'
        document.getElementById(`channelSelectorItems`).style.height = `${channelSelectorHeight}px`
        
    }
}

function clearChannels(){
    let list = document.querySelectorAll(`.reactionMsgSection`);
    list.forEach(e => {e.remove()})
}

function getChannels(){
    const Http4 = new XMLHttpRequest();
    Http4.open("GET", `${httpPrefix}getChannels?${serverSelectedID}?${token}`);
    Http4.send();
    Http4.onreadystatechange = (e) => {
        if(Http4.readyState=='1'){return}
        if(Http4.readyState=='2'){return}
        if(Http4.readyState=='3'){return}
        if(Http4.responseText == 'No' || Http4.responseText == ''){return}
        var d = JSON.parse(Http4.responseText)
        d.forEach(c => {
            c.channelName = `#${c.channelName}`
            if(c.channelName.length>23){c.channelName = `${c.channelName.slice(0,23)}...`}
            let obj = {name: c.channelName, id: c.channelID}
            channels.push(obj)
            var txt = document.createElement("p")
            txt.innerHTML = `${c.channelName}`
            txt.setAttribute("id", `channel_${c.channelName}${c.channelID}`)
            txt.classList = 'reactionMsgSection'
            txt.addEventListener(`click`, e => {
                channelSelectedID = c.id
                channelSelected = c.channelName
                document.getElementById(`channelSelector`).innerHTML = c.channelName
                toggleChannelList(false)
            })
            document.getElementById(`channelSelectorItems`).appendChild(txt)
        })
        document.getElementById(`channelSelectorItems`).style.height = `${channels.length*38}px`
        channelSelectorHeight = channels.length*38
    }
}

function getServers(){
    if(gotServers){return}
    gotServers=true
    const Http1 = new XMLHttpRequest();
    Http1.open("GET", `${httpPrefix}getServers?${token}`);
    Http1.send();
    Http1.onreadystatechange = (e) => {
        if(Http1.readyState=='1'){return}
        if(Http1.readyState=='2'){return}
        if(Http1.readyState=='3'){return}
        if(Http1.responseText == 'No' || Http1.responseText == ''){return}
        var d = JSON.parse(Http1.responseText)
        d.push({guildName: `Click For More Info`, guildIcon: `./img/dotdotdot.png`})
        var h = -11
        d.forEach(g => {
            var rand = Math.floor(Math.random() * 90000)+10000;
            var div = document.createElement("div")
            var img = document.createElement("img")
            img.setAttribute("src", g.guildIcon)
            img.setAttribute("width", "60px")
            img.setAttribute("height", "60px")
            img.setAttribute("id", `img_${g.guildName}${rand}`)
            img.classList = 'serverIcon'
            div.appendChild(img)
            var txt = document.createElement("p")
            txt.innerHTML = `< ${g.guildName}`
            txt.style.top = `${h}px`
            txt.setAttribute("id", `txt_${g.guildName}${rand}`)
            txt.classList = 'serverIconTxt'
            div.appendChild(txt)
            document.getElementById('serverList').appendChild(div);
            img.addEventListener("mouseover", e => {
                document.getElementById(`txt_${g.guildName}${rand}`).style.opacity = '100%'
                document.getElementById(`darkScreen`).style.opacity = '100%'
            }, false);
            img.addEventListener("mouseleave", e => {
                document.getElementById(`txt_${g.guildName}${rand}`).style.opacity = '0%'
                document.getElementById(`darkScreen`).style.opacity = '0%'
            }, false);
            img.addEventListener(`click`, e => {
                if(g.guildIcon == `./img/dotdotdot.png`){
                    document.getElementById(`serverInfoScreen`).style.top = `50%`
                } else {
                    serverSelectedID = g.guildID
                    serverSelected = g.guildName
                    document.getElementById(`whichServer`).innerHTML = g.guildName
                }
            })
            h=h+69.3
        })
    }
}

function login(){
    if(loggedIn){return}
    const Http2 = new XMLHttpRequest();
    Http2.open("GET", `${httpPrefix}login?${token}`);
    Http2.send();
    Http2.onreadystatechange = (e) => {
        if(Http2.readyState=='1'){return}
        if(Http2.readyState=='2'){return}
        if(Http2.readyState=='3'){return}
        if(Http2.responseText == 'No' || Http2.responseText == ''){return}
        var d = JSON.parse(Http2.responseText)
        document.getElementById(`userTxt`).innerHTML = d.username
        document.getElementById("userImg").src = d.icon
        reg = false
        loggedIn = true
        setCookie('authToken',token,30)
        loginBox(false)
        getServers()
    }
}

function logout(){
    eraseCookie(`authToken`)
    location.reload()
}

function copyCode() {
    var e = document.getElementById(`loginCode`)
    var t = document.getElementById(`clickToCopy`)
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(e).text()).select();
    document.execCommand("copy");
    $temp.remove();
    t.innerHTML = 'Copied!'
}

function reqCode(){
    const Http3 = new XMLHttpRequest();
    Http3.open("GET", `${httpPrefix}register/new`);
    Http3.send();
    Http3.onreadystatechange = (e) => {
        if(Http3.readyState=='1'){return}
        if(Http3.readyState=='2'){return}
        if(Http3.readyState=='3'){return}
        let s = Http3.responseText.split(`|||`)
        document.getElementById("loginCode").innerHTML = s[0]
        token = s[1]
    }
}

function toNumber(s){return parseFloat(s)}
function toString(s){return s.replace(/[0-9.]/g, '')}

function loginBox(state){
    let b = document.getElementById(`loginScreen`)
    if(state){
        b.style.top = `50%`
    } else {
        b.style.top = `-3000px`
    }
}
function closeServerInfoWindow(){
    document.getElementById(`serverInfoScreen`).style.top = `-10000px`
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