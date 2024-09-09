
document.addEventListener("keydown", function (e) {
    if (e.code == 'Space'){
        let text = document.getElementById('text')
        text.textContent = 'Have Fun!Click Here To Start The Game.'
        text.style.color = 'pink'
        text.style.textShadow = '0px 0px 10px white'
        text.style.textDecoration ='none'
        text.href = 'gamePage/game.html'
    }
});