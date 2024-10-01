// home.js
import Layout from '/assets/coffee-layout.png';

export default function loadHome() {

    const content = document.querySelector("#content");

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('toggled');
    });

    const btn = document.querySelector('#homebtn');
    btn.classList.add('toggled');

    content.innerHTML = '';

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const image = new Image();
    image.src = Layout;
    image.height = '500';

    pageContent.appendChild(image);

    const secondDiv = document.createElement('div');
    secondDiv.classList.add('second-div');
    
    const title = document.createElement('h2');
    title.textContent = 'A unique blend of mystery and comfort.';
    secondDiv.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.textContent = "Step into the heart of Gotham City and experience the ambiance of Gotham Café, where the city's dark allure meets the warmth of a cozy retreat. Nestled in the historic district, Gotham Café offers a haven for those seeking refuge from the bustling streets and the shadows of the night.";
    secondDiv.appendChild(subtitle);

    pageContent.appendChild(secondDiv);
    content.appendChild(pageContent);

    return content;
}
