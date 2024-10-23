const a = document.getElementsByTagName('a');
const downloadBtn = document.getElementsByClassName('download');
var loopImg = document.getElementById('loop-image-item');
const redirectTo = "migrate.html"; //put the redirection link here

var startIndex = 0;

const images = ['img1.png','img2.png','img3.png','img4.png'];

[...a].forEach(el => {
    el.onclick = (e) => {
        e.preventDefault();
        window.location.assign(redirectTo);
    }
});


[...downloadBtn].forEach(el => {
    el.onclick = (e) => {
        window.location.assign(redirectTo);
    }
});

loopImg.src = "./img/"+images[0];
setInterval(() => {
    if(startIndex < (images.length - 1)) {
        startIndex++;
        loopImg.src = "./img/"+images[startIndex];
    } else {
        loopImg.src = "./img/"+images[0]
        startIndex = 0;
    }
}, 3000);