// =======================================================
// LOADING
// =======================================================

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    setTimeout(() => {

        loading.style.opacity = "0";

        loading.style.visibility = "hidden";

    },1800);

});

// =======================================================
// ELEMENT
// =======================================================

const music=document.getElementById("bgm");

const musicBtn=document.getElementById("musicBtn");

const startBtn=document.getElementById("startBtn");

let playing=false;

// =======================================================
// START BUTTON
// =======================================================

startBtn.addEventListener("click",()=>{

    music.play();

    playing=true;

    musicBtn.innerHTML="🔊";

    window.scrollTo({

        top:window.innerHeight,

        behavior:"smooth"

    });

});

// =======================================================
// MUSIC
// =======================================================

musicBtn.addEventListener("click",()=>{

    if(playing){

        music.pause();

        musicBtn.innerHTML="🔈";

        playing=false;

    }

    else{

        music.play();

        musicBtn.innerHTML="🔊";

        playing=true;

    }

});

// =======================================================
// REVEAL
// =======================================================

const fade=document.querySelectorAll(".fade");

function reveal(){

    fade.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

// =======================================================
// HERO PARALLAX
// =======================================================

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    hero.style.backgroundPositionY=

    window.scrollY*0.45+"px";

});

// =======================================================
// COUNTDOWN
// =======================================================

function updateCountdown(){

    const now = new Date();

    let target = new Date(now.getFullYear(),6,5);

    if(now > target){

        target = new Date(now.getFullYear()+1,6,5);

    }

    const diff = target - now;

    const days = Math.floor(diff/1000/60/60/24);

    const hours = Math.floor(diff/1000/60/60)%24;

    const minutes = Math.floor(diff/1000/60)%60;

    const seconds = Math.floor(diff/1000)%60;

    document.getElementById("day").textContent=days;

    document.getElementById("hour").textContent=hours;

    document.getElementById("minute").textContent=minutes;

    document.getElementById("second").textContent=seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);


// =======================================================
// FLOATING HEARTS
// =======================================================

const hearts=document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-50px";

    heart.style.fontSize=(18+Math.random()*22)+"px";

    heart.style.opacity=Math.random();

    heart.style.color="#ff4f87";

    heart.style.pointerEvents="none";

    heart.style.zIndex="99";

    heart.style.transition="all 8s linear";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=
        `translateY(-120vh)
        rotate(${Math.random()*360}deg)`;

        heart.style.opacity="0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,450);


// =======================================================
// CONFETTI BUTTON
// =======================================================

const confettiBtn=document.getElementById("confettiBtn");

confettiBtn.addEventListener("click",()=>{

    confetti({

        particleCount:220,

        spread:120,

        origin:{y:.6}

    });

});


// =======================================================
// AUTO CONFETTI
// =======================================================

let celebrate=false;

window.addEventListener("scroll",()=>{

    const ending=document.querySelector(".ending");

    const rect=ending.getBoundingClientRect();

    if(rect.top<window.innerHeight-120 && !celebrate){

        celebrate=true;

        confetti({

            particleCount:300,

            spread:150,

            origin:{y:.6}

        });

    }

});


// =======================================================
// IMAGE HOVER REVEAL
// =======================================================

const images=document.querySelectorAll("img");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

images.forEach(img=>{

    img.style.opacity="0";

    img.style.transform="translateY(50px)";

    img.style.transition=".9s";

    observer.observe(img);

});


// =======================================================
// LIGHTBOX
// =======================================================

const lightbox=document.createElement("div");

lightbox.style.position="fixed";

lightbox.style.inset="0";

lightbox.style.background="rgba(0,0,0,.95)";

lightbox.style.display="none";

lightbox.style.justifyContent="center";

lightbox.style.alignItems="center";

lightbox.style.zIndex="999999";

document.body.appendChild(lightbox);

const lightboxImg=document.createElement("img");

lightboxImg.style.maxWidth="90%";

lightboxImg.style.maxHeight="90%";

lightboxImg.style.borderRadius="20px";

lightboxImg.style.boxShadow="0 0 40px rgba(255,255,255,.15)";

lightbox.appendChild(lightboxImg);

images.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=img.src;

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});


// =======================================================
// BUTTON ANIMATION
// =======================================================

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});


// =======================================================
// RANDOM DOCUMENT TITLE
// =======================================================

const titles=[

"Happy Birthday ❤️",

"Have A Wonderful Day",

"You Deserve Happiness ❤️",

"Made With Love"

];

let titleIndex=0;

setInterval(()=>{

    titleIndex++;

    if(titleIndex>=titles.length){

        titleIndex=0;

    }

    document.title=titles[titleIndex];

},4000);

// =======================================================
// SCROLL PROGRESS BAR
// =======================================================

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.background = "#ff4f87";
progressBar.style.zIndex = "999999";
progressBar.style.transition = "width .15s";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

    const scroll =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const percent =
    (scroll/height)*100;

    progressBar.style.width =
    percent+"%";

});


// =======================================================
// HERO TYPING EFFECT
// =======================================================

const heroText =
document.querySelector(".hero-content p");

if(heroText){

    const original =
    heroText.innerHTML;

    heroText.innerHTML="";

    let index=0;

    function typing(){

        if(index<original.length){

            heroText.innerHTML+=
            original.charAt(index);

            index++;

            setTimeout(typing,35);

        }

    }

    setTimeout(typing,2200);

}


// =======================================================
// CURSOR GLOW
// =======================================================

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.background="#ff4f87";
glow.style.pointerEvents="none";
glow.style.zIndex="999999";
glow.style.filter="blur(10px)";
glow.style.opacity=".8";
glow.style.transition=
"transform .05s linear";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-9+"px";

    glow.style.top=e.clientY-9+"px";

});


// =======================================================
// HERO FADE
// =======================================================

window.addEventListener("scroll",()=>{

    const hero=
    document.querySelector(".hero");

    const opacity=
    1-window.scrollY/700;

    hero.style.opacity=
    opacity;

});


// =======================================================
// PARALLAX IMAGES
// =======================================================

window.addEventListener("scroll",()=>{

    const photos=
    document.querySelectorAll(".photo img");

    photos.forEach(photo=>{

        const speed=.08;

        photo.style.transform=

        `translateY(${window.scrollY*speed}px)`;

    });

});


// =======================================================
// CELEBRATE MODE
// =======================================================

confettiBtn.addEventListener("click",()=>{

    const duration=5000;

    const animationEnd=
    Date.now()+duration;

    const interval=
    setInterval(()=>{

        if(Date.now()>animationEnd){

            clearInterval(interval);

            return;

        }

        confetti({

            particleCount:12,

            startVelocity:30,

            spread:360,

            ticks:80,

            origin:{

                x:Math.random(),

                y:Math.random()-0.2

            }

        });

    },180);

});


// =======================================================
// DOUBLE CLICK HEART
// =======================================================

document.body.addEventListener("dblclick",(e)=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.fontSize="35px";

    heart.style.pointerEvents="none";

    heart.style.transition="all 1.2s";

    heart.style.zIndex="999999";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=

        "translateY(-120px) scale(2)";

        heart.style.opacity="0";

    },20);

    setTimeout(()=>{

        heart.remove();

    },1200);

});


// =======================================================
// KEYBOARD SHORTCUT
// =======================================================

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        e.preventDefault();

        if(playing){

            music.pause();

            playing=false;

            musicBtn.innerHTML="🔈";

        }

        else{

            music.play();

            playing=true;

            musicBtn.innerHTML="🔊";

        }

    }

});


// =======================================================
// ESC CLOSE LIGHTBOX
// =======================================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.style.display="none";

    }

});


// =======================================================
// RANDOM HEART BURST
// =======================================================

setInterval(()=>{

    if(Math.random()<0.35){

        confetti({

            particleCount:8,

            angle:90,

            spread:35,

            scalar:.7,

            shapes:["circle"],

            colors:[

                "#ff4f87",

                "#ffc0cb",

                "#ffffff"

            ],

            origin:{

                x:Math.random(),

                y:Math.random()

            }

        });

    }

},3500);


// =======================================================
// AUTO SCROLL HINT
// =======================================================

const hint=document.createElement("div");

hint.innerHTML="⬇ Scroll";

hint.style.position="fixed";

hint.style.bottom="25px";

hint.style.left="50%";

hint.style.transform="translateX(-50%)";

hint.style.color="#fff";

hint.style.opacity=".7";

hint.style.fontSize="14px";

hint.style.letterSpacing="2px";

hint.style.zIndex="999";

hint.style.transition=".5s";

document.body.appendChild(hint);

window.addEventListener("scroll",()=>{

    if(window.scrollY>150){

        hint.style.opacity="0";

    }

});


// =======================================================
// CONSOLE MESSAGE
// =======================================================

console.log(

"%c❤️ Happy Birthday ❤️",

"font-size:28px;color:#ff4f87;font-weight:bold;"

);

console.log(

"%cWebsite dibuat dengan penuh niat 😄",

"font-size:15px;color:white;"

);
