

let contactTemplate = () => `
<section id="contact" class="dark_bg_blue layout_padding padding_top_0 margin_top_0">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="full center">
                    <h2 class="heading_main orange_heading">Свържете се с нас</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="full">
                    <div class="contact_form">
                        <form>
                            <fieldset class="row">
                                <div class="col-md-12">
                                    <div class="full field">
                                        <input type="text" placeholder="Вашето име" name="name" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="full field">
                                        <input type="email" placeholder="Имейл адрес" name="email" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="full field">
                                        <input type="text" placeholder="Телефонен номер" name="number" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="full field">
                                        <textarea placeholder="Съобщение"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="full center">
                                        <button class="submit_bt">Изпрати</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 11,
       center: { lat: 40.645037, lng: -73.880224 },
    });

    var image = 'images/location_point.png';
    var beachMarker = new google.maps.Marker({
       position: { lat: 40.645037, lng: -73.880224 },
       map: map,
       icon: image
    });
 }

