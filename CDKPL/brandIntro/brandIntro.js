$(".menu-bar ul li").hover(function () {
    $(this).find("ul").stop().fadeToggle(300);
});
const brand = [
    { logo: 'CHANEL_LOGO', img: 'CHANEL_' },
    { logo: 'GUCCI_LOGO', img: 'GUCCI_' },
    { logo: 'HERMES_LOGO', img: 'HERMES_' },
    { logo: 'GIORGIO ARMANI_LOGO', img: 'GIORGI_' }
]

// $('#brand-panel').on( function () { //실행될 코드 })
//     console.log('start');
//     for (let k = 0; k < brand.length; k++) {
//         var data = brand[k];
//         document.write('<div class="brand-title-panel"><img class="brand-title-logo"></div>')
//         for (let p = 0; p < 5; p++) {
//         }
//     }
// })

// $('.body').ready(function () {
//     var $list = $('.list');
//     for (let k = 0; k < brand.length; k++) {
//         var data = brand[k];
//         var item = createBrandTitle(data);
//         $list.append(item); 
//         for (let p = 0; p < 4; p++) {
//             var img = createBrandItemsImg(data, p);
//             $list.append(img);
//         }
//     }
// })
//  //

// var $data = $('#brand-panel').clone().removeAttr('id');
// function createBrandTitle(data) {

//     console.log('./images/' + data.logo + '.jpg');
//     $data.find('.brand-title-logo').attr('src', './images/' + data.logo + '.jpg');
//     return $data;
// }


// function createBrandItemsImg(data, i) {
//         var $item =  $('#brand-img-list').clone();
//         console.log('/images/' + data.img + i + '.jpg');
//         $item.find('#brand-img'+i+'').attr('src', './images/' + data.img + i + '.jpg');
//         return $item;
// }
$('.body').ready(function () {
    var $list = $('.list');

    for (let k = 0; k < brand.length; k++) {

        var $clonelist = $('#cloneList').clone().removeAttr('id');
        var $clone = $('#brand-paneles').clone().removeAttr('id');
        var data = brand[k];
        var $data = $clone.find('.brand-title-logo').attr('src', './images/' + data.logo + '.jpg');
        $clonelist.append($data);
        for (let p = 0; p < 4; p++) {
            var $img = $clone.find('#brand-img' + p + '').attr('src', './images/' + data.img + p + '.jpg');
            $clonelist.append($img);console.log('./images/' + data.img + p + '.jpg');
        }
        $clonelist.show();
        $list.append($clonelist);
    }
})
//




