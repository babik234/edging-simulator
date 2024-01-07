let images = [
    'https://cdn.pixabay.com/photo/2018/03/22/02/37/background-3249063_960_720.png',
    'https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png',
    'https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png'
  ];
let image = document.getElementById('');

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