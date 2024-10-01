// about.js
import CityMap from '/assets/gotham-city-map.png';

export default function loadAbout() {
    const content = document.querySelector('#content');

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('toggled');
    });

    const btn = document.querySelector('#aboutbtn');
    btn.classList.add('toggled');

    content.innerHTML = '';

    const pageContent = document.querySelector('div');
    pageContent.classList.add('about');

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('inner-div');

    const image = new Image();
    image.src = CityMap;
    image.height = 700;
    innerDiv.appendChild(image);

    const subtitle = document.createElement('div');
    subtitle.innerHTML = `
    <h2>Our Story</h2>
    <p>Founded in the heart of Gotham City, Gotham Café was born from a love of rich, flavorful coffee and the unique charm of our beloved city. Our founders, lifelong Gothamites, envisioned a place where the community could gather, relax, and escape the city's ever-present shadows. With this dream in mind, Gotham Café opened its doors, offering a sanctuary where the city's dark allure meets the warmth and comfort of a neighborhood café.</p>

    <br> 
    <h2>Our Coffee</h2>
    <p>Our commitment to quality begins with our coffee. We source our beans from the finest coffee-growing regions around the world, ensuring that every cup is rich, aromatic, and full of flavor. Our expert baristas are passionate about their craft, meticulously preparing each drink to highlight the unique characteristics of our beans. Whether you're a coffee connoisseur or just discovering the joy of a perfectly brewed cup, you'll find something to love at Gotham Café.</p>
    <br>
    <h2>Our Mission</h2>
    <p>At Gotham Café, our mission is simple: to provide a welcoming space where quality coffee, exceptional service, and the vibrant spirit of Gotham come together. We believe that a great cup of coffee can brighten even the darkest day, and we're dedicated to crafting the perfect brew for every customer.</p>
    `;
    subtitle.classList.add('text');

    innerDiv.appendChild(subtitle);

    pageContent.appendChild(innerDiv);
    
    content.appendChild(pageContent);
    
    return content;
}
