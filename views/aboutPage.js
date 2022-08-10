import { html } from '../node_modules/lit-html/lit-html.js'

let aboutPageTemplate = () => html`
<div id="about" class="dark_bg_blue section layout_padding">
    <div class="container">

        <div class="row">
            <div class="col-lg-4 margin_top_30">
                <div class="full margin_top_30">
                    <h3 class="main_heading _left_side margin_top_30" style="color: white;">За нас</h3>
                    <p class="large" style="color: white;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..</p>
                </div>
            </div>

            <div class="col-lg-8">
                <div class="full margin_top_50_rs">
                    <img class="img-responsive" src="./images/truck2.jpg" alt="#" />
                </div>
            </div>

        </div>

    </div>
</div>`

export function aboutPage(ctx) {
    ctx.render(aboutPageTemplate());
}