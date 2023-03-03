import { navbar, navbarDropdownMenu } from "./navbar"
import { homePageContent } from "./home-page"
import { menuPageContent } from "./menu-page"

export function createHtml(html) {
    const template = document.createElement('template')
    template.innerHTML = html.trim()
    return template.content.firstElementChild
}

//Render
export function render(page) {
    const body = document.querySelector('body')
    while (body.hasChildNodes() === true) {
        body.removeChild(body.lastChild)
    }
    body.appendChild(navbar)
    body.appendChild(navbarDropdownMenu)
    body.appendChild(page)
}
