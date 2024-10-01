import '/assets/styles.css'
import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';


document.addEventListener("DOMContentLoaded", function () {
    loadHome();

    document.querySelector('#homebtn').addEventListener('click', loadHome);
    document.querySelector('#aboutbtn').addEventListener('click', loadAbout);
    document.querySelector('#menubtn').addEventListener('click', loadMenu);
});