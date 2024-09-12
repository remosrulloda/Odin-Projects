const links = document.querySelector("#links");

let hamburger = document.querySelector('.icon');
hamburger.addEventListener('click', toggle);

function toggle() {
    console.log('button pressed!');
    if (links.classList.contains('hidden')) {
        links.classList.remove('hidden');
        links.classList.add('visible');
    } else {
        links.classList.remove('visible');
        links.classList.add('hidden');
    }
}