const startButton = document.getElementById("start-game");
const div = document.getElementById("start-game-div");
const sparkle = new Audio("audios/sparkle02.mp3");
const magic = new Audio("audios/magic02.mp3")
let img = document.getElementById('trash');
let fish = document.getElementById('fish');
let bluePB = document.getElementById('blue-pb');
let scoreText = document.getElementById("score");
let score = 0;

startButton.addEventListener('click', () => {
    div.classList.add("hidden");
    sparkle.play();
    initial();
    document.body.classList.add('background');
});

img.addEventListener('click', disappear);
fish.addEventListener('click', fishDis);
bluePB.addEventListener('click', PBdisappear);

function initial() {
    spW = screen.width - img.width;
    spH = screen.height - img.height;

    spWf = screen.width - fish.width;
    spHf = screen.height - fish.height;

    spWPB = screen.width - bluePB.width;
    spHPB = screen.height - bluePB.height;

    setInterval(move, 1000);
}

function move() {
    img.style.top = Math.round(Math.random() * spH) + 'px';
    img.style.left = Math.round(Math.random() * spW) + 'px';

    fish.style.top = Math.round(Math.random() * spHf) + 'px';
    fish.style.left = Math.round(Math.random() * spWf) + 'px';

    bluePB.style.top = Math.round(Math.random() * spHPB) + 'px';
    bluePB.style.left = Math.round(Math.random() * spWPB) + 'px';
}

function disappear() {
    magic.play();
    score += 1;
    scoreText.textContent = score;
    scoreText.classList.add('point-added');
    setTimeout(removeClass, 300);
}

function PBdisappear() {
    sparkle.play();
    score += 5;
    scoreText.textContent = score;
    scoreText.classList.add('point-added');
    setTimeout(removeClass, 1000);
}

function fishDis() {
    score -= 5;
    scoreText.textContent = score;
    scoreText.classList.add('point-removed');
    setTimeout(removeClassNegative, 200);
}

function removeClassNegative() {
    scoreText.classList.remove('point-removed');
}

function removeClass() {
    scoreText.classList.remove('point-added');
}

