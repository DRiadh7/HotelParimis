

$('document').ready(function(){
    img = 0;
    function slider() {
        img += 1;
        $('.zone1').attr("src", "../img/" + img + ".jpg"); // Selection NATURELLE
        if (img == 5) {
            img = 0;
            

        };
    }
    var timer = setInterval(slider, 4000);

})