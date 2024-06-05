document.getElementById('box').addEventListener('click', function() {
    this.classList.add('clicked');
    this.innerHTML = `
        <p id="message"><strong>Happy Birthday My Love! I cant express in words my love for you you are that special one in my life i promised myself that i will gift you flowers on your birthday and i hope i kept my promise!!! From the day i met you, you have captivated me to the fullest no other person comes close to my heart than you. i know i say this a lot but again i love you and a very happy birthday!!!!!!</strong></p>
        <img id="flowerImage" src="flower.jpg" alt="Flowers" class="show">
    `;
    playBackgroundMusic();
    createHearts();
});

function playBackgroundMusic() {
    var music = document.getElementById('backgroundMusic');
    music.play();
}

function createHearts() {
    setInterval(function() {
        var heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(heart);
        setTimeout(function() {
            heart.remove();
        }, 5000);
    }, 300);
}
