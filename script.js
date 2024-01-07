let images = [
    'https://www.google.com/search?q=soft+core+porn&tbm=isch&ved=2ahUKEwigpc-TgsqDAxXihf0HHRZTDdcQ2-cCegQIABAA&oq=soft+core+porn&gs_lcp=CgNpbWcQA1D5AVj5AWCYBmgAcAB4AIABL4gBW5IBATKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=vu-ZZaDOG-KL9u8Plqa1uA0&bih=919&biw=1920&rlz=1C1GCEA_enCZ980CZ980#imgrc=u4-BfgSVY-1ciM',
    'https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png',
    'https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png'
  ];

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

let number = random(0,3)
console.log(number)

let image = document.getElementById('imgs');
image.src = images[random]

let x = 0
let button  = document.getElementById("button")

document.getElementById("edge-bar").style.width = x + "px"
button.addEventListener("click",click)


function checkImgs(){
if(x > 950){
    number = Math.random() * 4
    random = Math.floor(number)
}
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

setInterval(checkImgs,0)
setInterval(check,0)
setInterval(minus,100)