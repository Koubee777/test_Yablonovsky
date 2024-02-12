    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,

        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
    });
        var swiper = new Swiper(".mySwiper_2", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 30,

        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
var swiper = new Swiper(".mySwiper_3", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0,

        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });

$(document).ready(function function_name(argument) {
  // body...
 $('.mobile_nav').click(function() {
        $('.mobile_nav').toggleClass('active_mobile_nav');
        $('.main_nav').toggleClass('active_main_nav');
        $('.mobile_menu_header').toggleClass('active_mobile_menu_header'); 
        $('.mobile_logo').toggleClass('active_mobile_logo');
        $('.mobole_li_nav').toggleClass('active_mobole_li_nav');
    });
});

    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [44.981864, 38.936365],
            zoom: 15
        }),
       // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        HospitalPoli = new ymaps.Placemark([44.985245, 38.935370], {
            hintContent: '',
            balloonContent: '',
            iconContent: ''
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: './img/mark_4.png',
            iconImageSize: [76, 76],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
        });

        Yablonovsky = new ymaps.Placemark([44.981864, 38.936365], {
            hintContent: '',
            balloonContent: '',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './img/mark_1.png',
            // Размеры метки.
            iconImageSize: [76, 76],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
KinderGarten = new ymaps.Placemark([44.985345, 38.931370], {
            hintContent: '',
            balloonContent: '',
            iconContent: ''
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: './img/mark_2.png',
            iconImageSize: [76, 76],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
        });
        Shop = new ymaps.Placemark([44.976245, 38.935270], {
            hintContent: '',
            balloonContent: '',
            iconContent: ''
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: './img/mark_5.png',
            iconImageSize: [76, 76],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
        });
        Fule = new ymaps.Placemark([44.975345, 38.938770], {
            hintContent: '',
            balloonContent: '',
            iconContent: ''
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: './img/mark_3.png',
            iconImageSize: [76, 76],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(KinderGarten)
        .add(Shop)
        .add(HospitalPoli)
        .add(Fule)
        .add(Yablonovsky);

};  

    



