let images = [
    "https://www.r34anim.com/wp-content/uploads/2023/09/20/Akali-Gets-Ruined-720x340.webp",
    "https://image.staticox.com/?url=https%3A%2F%2Fw640.luscious.net%2Fhinata5%2F431469%2Flol-porn-r34-ahri-6_01FJPE1XYC5X1DDKHJ4JFGNJGK.640x0.jpg",
    "https://comicsporn.site/uploads_images_comix/porn-comics-league-of-legends--ashe--erotic-comic-ashley--she-fucks-/",
    "porn-comics-league-of-legends--ashe--erotic-comic-ashley--she-fucks--96660.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kKLFjCELwQi_CyT2CTs740xZivXBAxtdOg&usqp=CAU",
    "https://lolhentaiporn.com/wp-content/uploads/2020/11/3592570-HuarboDraw-League_of_Legends-Qiyana.jpg",
    "https://cdn5-images.motherlessmedia.com/images/BE4B78F.jpg",
    "https://i1.wp.com/cdn3.nude-pics.org/gwen-kimtoxic-sGGw1OCRNb/gwen-kimtoxic.webp",
    "https://static7.hentai-img.com/upload/20190131/530/542084/2.jpg",
    "https://comicsarmy.com/wp-content/uploads/2023/08/busty-Katarina-creampie-Garen_and_Kat-lol-porn-6No1-7.jpg",
    "https://www.lolhentai.net/_data/i/upload/2022/08/11/20220811012414-5ce3a0e0-cu_s9999x450.jpg",
    "https://www.lolhentai.net/_data/i/upload/2017/05/23/20170523095742-b505776b-me.jpg",
    "https://c74be38bc7.mjedge.net/contents/videos_screenshots/8000/8981/preview.mp4.jpg",
    "https://hentaileague.com/wp-content/uploads/2021/11/103ca4a9ab7ed151095f207c8.jpeg.webp",
    "https://cdn.allporncomic.com/wp-content/uploads/2021/10/001-83.jpg",
    "https://hentaiwikis.com/wp-content/uploads/2022/08/anime-r34-jinx-hentai-anime-porn-anime-sex-anime-xxx-league-of-legends-hentai-2.jpg.webp",
    "https://pbs.twimg.com/media/EvpO06sXcAEUjGg.jpg",
    "https://www.lolhentai.net/_data/i/upload/2017/04/19/20170419024521-f3cc5253-me.jpg",
    "https://xphoto.name/uploads/posts/2021-11/1637888904_1-xphoto-name-p-gwen-lol-porn-1.jpg",
    "https://hentaileague.com/wp-content/uploads/2023/11/0343395b373b1b01.jpeg.webp",
    "https://image.staticox.com/?url=https%3A%2F%2Fw640.luscious.net%2Fhinata5%2F431474%2Flol-porn-r34-katari_01FJPE9PWKDJTAQYMANBFW13F8.640x0.jpg",
    "https://xlecx.one/uploads/posts/2016-07/1469746325_303636.jpg",
    "https://goldencomics.art/wp-content/uploads/2023/01/league-of-legends-porn-comic-picture-2.jpg",
    "https://aiporn.com.es/ejoangix/2023/12/1703850459_606_AI-Porn-ai-generated-hentai-jinx-league-of-legends.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKCyuJydcntsy1esRDtqwhL3iJRlLHhXO5Q&usqp=CAU",
    "https://lolhentaiporn.com/wp-content/uploads/2019/02/2779026-League_of_Legends-Vi-firolian.jpg",
    "https://www.valorantpornhentai.com/wp-content/uploads/115290-league-of-legends-game-porn-cum-open-mouth-text.jpeg",
    "https://hentaiwikis.com/wp-content/uploads/2023/07/anime-hentai-jinx-r34-league-of-legends-porn-game-xxx-sex-2-1.jpg", 
]
let number = random(0,27)

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
        number = random(0,27)
        image.src = images[number]
    }
}

function change(){
    number = random(0,27)
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