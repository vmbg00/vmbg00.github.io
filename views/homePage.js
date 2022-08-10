import { html } from '../node_modules/lit-html/lit-html.js'

let homeTemplate = () => html`
<section id="home" class="top_section">
    <div class="row">
        <div class="col-lg-12">
            <!-- header -->
            <section>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="full slider_cont_section">
                                <h4>Добре дошли в</h4>
                                <h3 style="color: white;">Автопомощ ИВО</h3>
                                <div class="button_section">
                                    <a href="/about">За нас</a>
                                    <a href="tel:+359878672106">Звъннете</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end header -->
        </div>
    </div>
</section>`

export function homePage(ctx) {
    ctx.render(homeTemplate());
}