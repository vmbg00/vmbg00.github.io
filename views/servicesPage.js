import { html } from '../node_modules/lit-html/lit-html.js'

let servicesTemplate = () => html`
<section id="why_choose_us" class="dark_bg_blue layout_padding">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="full center">
                    <h2 class="heading_main orange_heading">Услуги</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="full">
                    <div class="choose_blog text_align_center">
                        <h4>Услуга 1</h4>
                        <p>Превоз на нерeгистрирани автомобили до КАТ-Варна, Шумен, Добрич, Силистра, Разград,
                            Търговище, Бургас, Ямбол, Сливен, Велико Търново, Стара Загора</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="full">
                    <div class="choose_blog text_align_center">
                        <h4>Услуга 2</h4>
                        <p>Превоз на земеделска и строителна техника</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="full">
                    <div class="choose_blog text_align_center">
                        <h4>Услуга 3</h4>
                        <p>Превоз на рали автомобили за участия в Офроуд и Рали шампионати на България</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="full">
                    <div class="choose_blog text_align_center">
                        <h4>Услуга 4</h4>
                        <p>Превоз на ретро автомобили</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="full">
                    <div class="choose_blog text_align_center">
                        <h4>Услуга 5</h4>
                        <p>Съдействие при регистрация на МПС в КАТ-Варна</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="full">
                    <div class="choose_blog text_align_center">
                        <h4>Услуга 6</h4>
                        <p>Смяна на спукана гума за гр. Варна: цена 1 лв/км</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="full">
                    <div class="choose_blog text_align_center">
                        <h4>Услуга 7</h4>
                        <p>Подаване на ток на акумулатора за гр. Варна: цена 1 лв/км</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="full">
                    <div class="choose_blog text_align_center">
                        <h4>Услуга 8</h4>
                        <p>Доставка на гориво за гр. Варна: цена 1 лв/км</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="full">
                    <div class="choose_blog text_align_center">
                        <h4>Услуга 9</h4>
                        <p>Пътна помощ на закъсали автомобили в кал, сняг, пясък, канавки, шахти и др.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="full">
                    <div class="choose_blog text_align_center">
                        <h4>Услуга 10</h4>
                        <p>Съдействие за автосервиз</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="full">
                    <div class="choose_blog text_align_center">
                        <h4>Услуга 11</h4>
                        <p>Съдействие за : автосервиз, автотенекеджия, автобояджия, автоморга, коли за скрап </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="full">
                    <div class="choose_blog text_align_center">
                        <h4>Услуга 12</h4>
                        <p>Всички цени са с 30% по-високи в диапазона от 21:00 до 7:00 часа и официални празници.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`

export function servicesPage(ctx) {
    ctx.render(servicesTemplate());
}