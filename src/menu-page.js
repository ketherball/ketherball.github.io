import { createHtml } from "./general-functions";

const menuPageContent = createHtml(`
    <div id="page-content"></div>
`)

const carousel = createHtml(`
<div id="carousel-container">
    <div id="carousel-slide-2">
        <div id="carousel-text-banner">
            <div id="carousel-text">Our Menu</div>
        </div>
    </div>
</div>
`)

const menuSection = createHtml(`
    <div id="menu-section">
        <div id="menu-burrito">
            <img id="burrito-img" src="../src/images/burrito.jpg" alt="burrito">
            <div id="burrito-text">Burrito</div>
        </div>
        <div id="menu-burrito-bowl">
            <img id="burrito-bowl-img" src="../src/images/burrito-bowl.jpg" alt="burrito bowl">
            <div id="burrito-bowl-text">Burrito Bowl</div>
        </div>
        <div id="menu-tacos">
            <img id="tacos-img" src="../src/images/tacos.jpg" alt="tacos">
            <div id="tacos-text">Traditional Tacos</div>
        </div>
    </div>
`)

const footer = createHtml(`
    <div id="footer-section">
        <div id="footer-text">La Mesa Restaurant Page | Designed by KetherBall</div>
    </div>
`)

menuPageContent.appendChild(carousel)
menuPageContent.appendChild(menuSection)
menuPageContent.appendChild(footer)

//CacheHTML
const burritoImg = menuSection.children[0].children[0]
const burritoText = menuSection.children[0].children[1]
const burritoBowlImg = menuSection.children[1].children[0]
const burritoBowlText = menuSection.children[1].children[1]
const tacosImg = menuSection.children[2].children[0]
const tacosText = menuSection.children[2].children[1]

//Bind Events
burritoImg.addEventListener('click', () => {
    console.log('hit')
})

burritoText.addEventListener('click', () => {
    console.log('hit')
})

burritoBowlImg.addEventListener('click', () => {
    console.log('hit')
})

burritoBowlText.addEventListener('click', () => {
    console.log('hit')
})

tacosImg.addEventListener('click', () => {
    console.log('hit')
})

tacosText.addEventListener('click', () => {
    console.log('hit')
})

export { menuPageContent }
