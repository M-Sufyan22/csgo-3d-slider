let start_btn = document.getElementById('start');
let sliderr = document.querySelector('.Carousel');

start_btn.addEventListener('click', function() {
    deg = Math.floor(Math.random() * 1000 + 5000);
    sliderr.style.transition = 'all 10s ease-in-out';
    sliderr.style.transform = 'rotateY(' + deg + 'deg)';
    start_btn.style.pointerEvents = 'none';
    document.querySelector('.line').style.opacity = '0';
});

sliderr.addEventListener('transitionend', function() {
    sliderr.style.transition = 'none';
    start_btn.style.pointerEvents = 'auto';
    actualdeg = deg % 560;
    sliderr.style.transform = 'rotateY(' + actualdeg + 'deg)'
    document.querySelector('.line').style.opacity = '0.9';
});