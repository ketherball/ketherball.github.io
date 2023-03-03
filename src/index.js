import './style-sheets/home-page.css'
import './style-sheets/navbar.css'
import './style-sheets/menu-page.css'
import './style-sheets/about-us.css'
import { createHtml } from './general-functions'
import { render } from './general-functions'
import { navbar } from './navbar'
import { homePageContent } from './home-page.js'
import { menuPageContent } from './menu-page'
import { aboutUsPageContent } from './about-us'

render(homePageContent)
