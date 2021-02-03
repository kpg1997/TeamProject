
const brand = [
    { logo: 'CHANEL_LOGO', img: 'CHANEL_' },
    { logo: 'GUCCI_LOGO', img: 'GUCCI_' },
    { logo: 'HERMES_LOGO', img: 'HERMES_' },
    { logo: 'GIORGIO ARMANI_LOGO', img: 'GIORGI_' },
    { logo: 'PATEK_LOGO', img: 'PATEK_' }
]

$('.body').ready(function () {
    var $list = $('.list');

    for (let k = 0; k < brand.length; k++) {

        var $clonelist = $('#cloneList').clone().removeAttr('id');
        var $clone = $('#brand-paneles').clone().removeAttr('id');
        var data = brand[k];
        var $data = $clone.find('.brand-title-logo').attr('src', './images/' + data.logo + '.jpg');
        $clonelist.append($data);
        for (let p = 0; p < 5; p++) {
            var $img = $clone.find('#brand-img' + p + '').attr('src', './images/' + data.img + p + '.jpg');
            $clonelist.append($img);console.log('./images/' + data.img + p + '.jpg');
        }
        $clonelist.show();
        $list.append($clonelist);
    }
})
//

$(document).ready(function(){
    $("#total-header").load("../total/totalheader.html")
});




