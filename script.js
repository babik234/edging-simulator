let x = 0
let button  = document.getElementById("button")

document.getElementById("edge-bar").style.width = x + "px"
button.addEventListener("click",click)

function click(){
    x += 50
    document.getElementById("edge-bar").style.width = x + "px"
    if(x > 950){
    document.getElementById("img-over").style.display = "block"
    }else{
        document.getElementById("img-over").style.display = "none"
    }
}

function minus(){
    x -= 5
    document.getElementById("edge-bar").style.width = x + "px"
}
function check(){
    if(x < 950){
        document.getElementById("img-over").style.display = "none"
        }
}
setInterval(check,0)
setInterval(minus,100)