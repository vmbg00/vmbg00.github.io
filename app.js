let index = 0;
let trucks = $('.truck-image').get();

console.log(trucks);

loopImages(index);

function loopImages(index) {
    setTimeout(function () {
        trucks.forEach(truck => {
            $(truck).removeClass('selected');
        })

        console.log(trucks);

        let currentTruck = trucks[index];
        $(currentTruck).addClass('selected');
        index++;
        if (index > 3) {
            index = 0;
            loopImages(index);
        } else {
            loopImages(index);
        }
    }, 3500)
}
