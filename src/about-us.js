import { createHtml } from "./general-functions";

const aboutUsPageContent = createHtml(`
    <div id="page-content"></div>
`)

const aboutUsImageSection = createHtml(`
    <div id="about-us-image-section">
        <div id="about-us-image">
            <div id="about-us-banner">
                <div id="about-us-text">About Us</div>
            </div>
        </div>
    </div>
`)

const aboutUsTextSection = createHtml(`
    <div id="about-us-text-section">
        <div id="about-us-text-section-header">Who is La Mesa?</div>
        <div id="about-us-text-section-body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rem iste minima autem, deleniti natus deserunt nihil. 
            Aliquid nihil commodi, nulla aperiam itaque aliquam? 
            Nobis molestiae nam qui tempora suscipit. Reiciendis!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rem iste minima autem, deleniti natus deserunt nihil. 
            Aliquid nihil commodi, nulla aperiam itaque aliquam? 
            Nobis molestiae nam qui tempora suscipit. Reiciendis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rem iste minima autem, deleniti natus deserunt nihil. 
            Aliquid nihil commodi, nulla aperiam itaque aliquam? 
            Nobis molestiae nam qui tempora suscipit. Reiciendis!
        </div>
        <div id="about-us-text-section-body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rem iste minima autem, deleniti natus deserunt nihil. 
            Aliquid nihil commodi, nulla aperiam itaque aliquam? 
            Nobis molestiae nam qui tempora suscipit. Reiciendis!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rem iste minima autem, deleniti natus deserunt nihil. 
            Aliquid nihil commodi, nulla aperiam itaque aliquam? 
            Nobis molestiae nam qui tempora suscipit. Reiciendis!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rem iste minima autem, deleniti natus deserunt nihil. 
            Aliquid nihil commodi, nulla aperiam itaque aliquam? 
            Nobis molestiae nam qui tempora suscipit. Reiciendis!
        </div>
    </div>
`)

const footer = createHtml(`
    <div id="footer-section">
        <div id="footer-text">La Mesa Restaurant Page | Designed by KetherBall</div>
    </div>
`)

aboutUsPageContent.appendChild(aboutUsImageSection)
aboutUsPageContent.appendChild(aboutUsTextSection)
aboutUsPageContent.appendChild(footer)

export { aboutUsPageContent }