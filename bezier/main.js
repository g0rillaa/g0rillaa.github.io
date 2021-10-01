var loaded = false
window.onload = init()
function init(){loaded = true}


var time = 0 
var dtime = 0
var fps = 0
max=1001
setInterval(() => {
    fps = Math.floor(1/(time-dtime))
},500)

var points = []
window.requestAnimationFrame(function loop() {
    if(max<1001){
        max=max+2
    }
    if(!loaded){return}
    var canvas = document.getElementById(`canvas`)
    var ctx = canvas.getContext(`2d`)

    ctx.fillStyle = `#1a1a1a`
    ctx.fillRect(0,0,canvas.width,canvas.height)
    dtime = time
    time = Date.now()/1000
    ctx.fillStyle = `#ffffff`
    ctx.font = "20px Arial";
    ctx.fillText(`${fps} fps`, 5, 20);
    ctx.fillText(`${points.length} nodes`, 100, 20);
    ctx.fillText(`click to animate`, 5, 60);
    if(points.length==0){ctx.fillText(`click anywhere to add a node`, 5, canvas.height-30)} else {
        ctx.fillText(`click a node to remove it`, 5, canvas.height-30);
    }
    

    ctx.fillStyle = `#cccccc`
    points.forEach(point => {
        drawCircle(ctx, point.x, point.y, 5, 'black', 'red', 2)
    })


    //was gonna try make an algorithm to do it no matter how many points
    //but idk how to do that
    //so this will have to do
    //might add more points later or u can if u know
    //its not too hard just effort
    for(var t=0; t<max; t++){
        var ax0, ay0;
        var bx0, by0, bx1, by1;
        var cx0, cy0, cx1, cy1;
        var dx0, dy0, dx1, dy1;
        var ex0, ey0, ex1, ey1;
        var fx0, fy0, fx1, fy1;
        var gx0, gy0, gx1, gy1;
        var hx0, hy0, hx1, hy1;
        var ix0, iy0, ix1, iy1;
        if(points.length>1){
            ax0 = lerp(t/1000, points[0].x, points[1].x)
            ay0 = lerp(t/1000, points[0].y, points[1].y)
            ctx.fillRect(ax0,ay0,1,1)
        }
        if(points.length>2){
            bx0 = lerp(t/1000, points[1].x, points[2].x)
            by0 = lerp(t/1000, points[1].y, points[2].y)
            ctx.fillRect(bx0,by0,1,1)
            bx1 = lerp(t/1000, ax0, bx0)
            by1 = lerp(t/1000, ay0, by0)
            if(points.length==3){ctx.fillRect(bx1,by1,1,1)}
        }
        if(points.length>3){
            cx0 = lerp(t/1000, points[2].x, points[3].x)
            cy0 = lerp(t/1000, points[2].y, points[3].y)
            ctx.fillRect(cx0,cy0,1,1)
            cx1 = lerp(t/1000, bx1, cx0)
            cy1 = lerp(t/1000, by1, cy0)
            if(points.length==4){ctx.fillRect(cx1,cy1,1,1)}
        }
        if(points.length>4){
            dx0 = lerp(t/1000, points[3].x, points[4].x)
            dy0 = lerp(t/1000, points[3].y, points[4].y)
            ctx.fillRect(dx0,dy0,1,1)
            dx1 = lerp(t/1000, cx1, dx0)
            dy1 = lerp(t/1000, cy1, dy0)
            if(points.length==5){ctx.fillRect(dx1,dy1,1,1)}
        }
        if(points.length>5){
            ex0 = lerp(t/1000, points[4].x, points[5].x)
            ey0 = lerp(t/1000, points[4].y, points[5].y)
            ctx.fillRect(ex0,ey0,1,1)
            ex1 = lerp(t/1000, dx1, ex0)
            ey1 = lerp(t/1000, dy1, ey0)
            if(points.length==6){ctx.fillRect(ex1,ey1,1,1)}
        }
        if(points.length>6){
            fx0 = lerp(t/1000, points[5].x, points[6].x)
            fy0 = lerp(t/1000, points[5].y, points[6].y)
            ctx.fillRect(fx0,fy0,1,1)
            fx1 = lerp(t/1000, ex1, fx0)
            fy1 = lerp(t/1000, ey1, fy0)
            if(points.length==7){ctx.fillRect(fx1,fy1,1,1)}
        }
        if(points.length>7){
            gx0 = lerp(t/1000, points[6].x, points[7].x)
            gy0 = lerp(t/1000, points[6].y, points[7].y)
            ctx.fillRect(gx0,gy0,1,1)
            gx1 = lerp(t/1000, fx1, gx0)
            gy1 = lerp(t/1000, fy1, gy0)
            if(points.length==8){ctx.fillRect(gx1,gy1,1,1)}
        }
        if(points.length>8){
            hx0 = lerp(t/1000, points[7].x, points[8].x)
            hy0 = lerp(t/1000, points[7].y, points[8].y)
            ctx.fillRect(hx0,hy0,1,1)
            hx1 = lerp(t/1000, gx1, hx0)
            hy1 = lerp(t/1000, gy1, hy0)
            if(points.length==9){ctx.fillRect(hx1,hy1,1,1)}
        }
        if(points.length>9){
            ix0 = lerp(t/1000, points[8].x, points[9].x)
            iy0 = lerp(t/1000, points[8].y, points[9].y)
            ctx.fillRect(ix0,iy0,1,1)
            ix1 = lerp(t/1000, hx1, ix0)
            iy1 = lerp(t/1000, hy1, iy0)
            if(points.length==10){ctx.fillRect(ix1,iy1,1,1)}
        }

        /*if(points.length==2){
            ctx.fillRect(lerp(t/1000, points[0].x, points[1].x),lerp(t/1000, points[0].y, points[1].y),1,1)
        } else if(points.length==3){
            ctx.fillRect(lerp(t/1000, points[0].x, points[1].x),lerp(t/1000, points[0].y, points[1].y),1,1)
            ctx.fillRect(lerp(t/1000, points[1].x, points[2].x),lerp(t/1000, points[1].y, points[2].y),1,1)
            ctx.fillRect(lerp(t/1000, lerp(t/1000, points[0].x, points[1].x), lerp(t/1000, points[1].x, points[2].x)),lerp(t/1000, lerp(t/1000, points[0].y, points[1].y), lerp(t/1000, points[1].y, points[2].y)),1,1)
        } else if(points.length==4){
        }*/
        
        /*for(var i=0; i<points.length; i++){
            ctx.fillRect(lerp(t/1000, points[0].x, points[1].x),lerp(t/1000, points[0].y, points[1].y),1,1)
        }*/
    }
    window.requestAnimationFrame(loop)
})

function lerp(t, p0, p1){
    return ((1-t)*p0) + t*p1
}

function clickAction(cb) {
    var x = cb.clientX
    var y = cb.clientY
    if(y<70 && x<160 && y>40){
        return max=0
    }
    var remove = false
    var i = 0
    points.forEach(point => {
        if(Math.abs(point.x - x) < 12 && Math.abs(point.y - y) < 12){
            points.splice(i, 1)
            remove = true
        }
        i++
    })
    if(!remove){
        points.push({x,y})
    }
}
document.addEventListener("click", clickAction);

var resize = (cb => {
    canvas.width = cb.currentTarget.innerWidth
    canvas.height = cb.currentTarget.innerHeight
})
window.addEventListener('resize', resize);


function drawCircle(ctx, x, y, radius) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    ctx.fill()
}