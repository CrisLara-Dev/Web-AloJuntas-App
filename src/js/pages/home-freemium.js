import slickCarousel from 'slick-carousel';
const d = document, c = console.log;

export class Homefreemium {
    
    constructor(){
        this.init();
    }

    init(){
        window.addEventListener('load', function(){
            new Glider(document.querySelector('.lista2'),{
                slidesToShow:1,
                slidesToScroll:1,
                draggable: true,
                arrows: {
                    prev: '.anterior2',
                    next: '.siguiente2'
                },
                responsive: [
                    {
                      // screens greater than >= 775px
                      breakpoint: 768,
                      settings: {
                        // Set to `auto` and provide item width to adjust to viewport
                        slidesToShow: '2',
                        slidesToScroll: '2',
                        itemWidth: 150,
                        duration: 0.25
                      }
                    },{
                    // screens greater than >= 775px
                    breakpoint: 992,
                    settings: {
                      // Set to `auto` and provide item width to adjust to viewport
                      slidesToShow: '3',
                      slidesToScroll: '3',
                      itemWidth: 150,
                      duration: 0.25
                    }
                    },{
                      // screens greater than >= 1024px
                      breakpoint: 1236,
                      settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        itemWidth: 150,
                        duration: 0.25
                      }
                    }
                  ]
            });
        });
    }
}