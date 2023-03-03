import { createHtml, render } from "./general-functions"
import { homePageContent } from "./home-page"
import { menuPageContent } from "./menu-page"
import { aboutUsPageContent } from "./about-us"

const navbar = createHtml(`
    <div id="navbar">
        <div id="navbar-menu">
            <div id="navbar-menu-home">Home</div>
            <div id="navbar-menu-menu">Menu</div>
            <div id="navbar-menu-about-us">About Us</div>
        </div>
        <img id="navbar-hamburger-menu" src="../src/icons/menu.svg" alt="menu">
        <div id="navbar-restaurant-name">La Mesa</div>
        <img id="navbar-shopping-bag" src="../src/icons/shopping-bag.svg" alt="bag">
    </div>
`)

const navbarDropdownMenu = createHtml(`
    <div id="navbar-dropdown-menu">
        <div id="navbar-dropdown-menu-home">Home</div>
        <div id="navbar-dropdown-menu-menu">Menu</div>
        <div id="navbar-dropdown-menu-about-us">About Us</div>
    </div>
`)

//CacheHTML
const navbarMenuHome = navbar.children[0].children[0]
const navbarMenuMenu = navbar.children[0].children[1]
const navbarMenuAbout = navbar.children[0].children[2]
const hamburgerMenu = navbar.children[1]
const navbarDropdownMenuHome = navbarDropdownMenu.children[0]
const navbarDropdownMenuMenu = navbarDropdownMenu.children[1]
const navbarDropdownMenuAbout = navbarDropdownMenu.children[2]
const navbarRestaurantName = navbar.children[2]
const navbarShoppingBag = navbar.children[3]

//Bind Events
navbarMenuHome.addEventListener('click', () => {
    render(homePageContent)
})

navbarMenuMenu.addEventListener('click', () => {
    render(menuPageContent)
})

navbarMenuAbout.addEventListener('click', () => {
    render(aboutUsPageContent)
})

hamburgerMenu.addEventListener('click', () => {
    if (hamburgerMenu.id === 'navbar-hamburger-menu') {
        hamburgerMenu.setAttribute('id', 'close-dropdown')
        navbarDropdownMenu.setAttribute('style', 'display: inherit')
        return
    }
    if (hamburgerMenu.id === 'close-dropdown') {
        closeDropdownMenu()
        return
    }
})

navbarDropdownMenuHome.addEventListener('click', () => {
    closeDropdownMenu()
    render(homePageContent)
})

navbarDropdownMenuMenu.addEventListener('click', () => {
    closeDropdownMenu()
    render(menuPageContent)
})

navbarDropdownMenuAbout.addEventListener('click', () => {
    closeDropdownMenu()
    render(aboutUsPageContent)
})

navbarRestaurantName.addEventListener('click', () => {
    closeDropdownMenu()
    render(homePageContent)
})

navbarShoppingBag.addEventListener('click', () => {
    closeDropdownMenu()
    console.log('hit')
})

//Code Utility
function closeDropdownMenu() {
    hamburgerMenu.setAttribute('id', 'navbar-hamburger-menu')
    navbarDropdownMenu.setAttribute('style', 'display: none')
}

export { 
    navbar,
    navbarDropdownMenu,
    closeDropdownMenu
}