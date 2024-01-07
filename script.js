let images = [
    'https://www.lolhentai.net/_data/i/upload/2022/08/11/20220811012414-5ce3a0e0-cu_s9999x450.jpg',
    'https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png',
    'https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png'
  ];

let number = random(0,3)

let timeLeft = 4
let timerId = 0

let image = document.getElementById('imgs');

let x = 0
let button  = document.getElementById("button")


image.src = images[number]

document.getElementById("edge-bar").style.width = x + "px"
button.addEventListener("click",click)


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


function checkImgs(){
    if(x > 950){
        number = random(0,3)
        image.src = images[number]
    }
}

function change(){
    number = random(0,3)
    image.src = images[number]
}

function click(){
    x += 50
    document.getElementById("edge-bar").style.width = x + "px"
    if(x > 950){
    document.getElementById("img-over").style.display = "block"
    document.getElementById("imgs").style.display = "none"
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
        document.getElementById("imgs").style.display = "block"
    }
    if(x < 0){
        x = 0
    }
}

function countdown() {
    if (timeLeft == 0) {
        change()
      timeLeft = 4
      timerId = 0
      countdown()
     
    } else {
      timeLeft--;
    }
  }
timerId =  setInterval(countdown, 1000)

setInterval(checkImgs,0)

setInterval(check,0)

setInterval(minus,100)