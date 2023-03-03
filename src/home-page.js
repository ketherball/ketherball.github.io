import { aboutUsPageContent } from './about-us'
import { createHtml, render } from './general-functions'
import { closeDropdownMenu } from './navbar'

const homePageContent = createHtml(`
    <div id="page-content"></div>
`)

const carousel = createHtml(`
<div id="carousel-container">
    <div id="carousel-slide-1">
        <div id="carousel-text-banner">
            <div id="carousel-text">COME FIND YOUR SEAT AT THE TABLE</div>
        </div>
    </div>
</div>
`)

const orderNowSection = createHtml(`
    <div id="order-now-section">
        <div id="order-now-text">Want Your Order Prepared Ahead of Time or Delivered to Your Table?</div>
        <button id="order-now-button">Order Now</button>
    </div>
`)

const aboutUsSection = createHtml(`
    <div id="about-us-section">
        <div id="about-us-head">La Mesa</div>
        <div id="about-us-body">Bringing traditional Mexican dishes to the table since 1625.</div>
        <button id="about-us-button">Read More</button>
    </div>
`)

const footer = createHtml(`
    <div id="footer-section">
        <div id="footer-text">La Mesa Restaurant Page | Designed by KetherBall</div>
    </div>
`)

homePageContent.appendChild(carousel)
homePageContent.appendChild(orderNowSection)
homePageContent.appendChild(aboutUsSection)
homePageContent.appendChild(footer)

//CacheHTML
const orderNowButton = orderNowSection.children[1]
const readMoreButton = aboutUsSection.children[2]

//Bind Events
orderNowButton.addEventListener('click', () => {
    closeDropdownMenu()
    console.log('hit')
})

readMoreButton.addEventListener('click', () => {
    closeDropdownMenu()
    render(aboutUsPageContent)
})

export { homePageContent }
