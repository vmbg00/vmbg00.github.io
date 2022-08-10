import { render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';

import { aboutPage } from './views/aboutPage.js';
import { contactPage } from './views/contactPage.js';
import { homePage } from './views/homePage.js';
import { servicesPage } from './views/servicesPage.js';

let mainContainer = document.getElementById('content')

page('/', decorateContext, homePage);
page('/index.html', '/');
page('/about', decorateContext, aboutPage);
page('/services', decorateContext, servicesPage);
page('/contact-us', decorateContext, contactPage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, mainContainer);

    next();
}