import slickCarousel from 'slick-carousel';
const d = document, c = console.log;

export class Header2 {
    
    constructor(){
        this.init();
    }

    init(){
        window.addEventListener('DOMContentLoaded', function(){
          const lista = document.querySelector('.lista');
          if(lista){
            new Glider(document.querySelector('.lista'),{
                slidesToShow: 1,
                slidesToScroll:1,
                dots: '.indicadores',
                arrows: {
                    prev: '.anterior',
                    next: '.siguiente'
                },
                responsive: [
                    {
                    // screens greater than >= 775px
                    breakpoint: 400,
                    settings: {
                      // Set to `auto` and provide item width to adjust to viewport
                      slidesToShow: '2',
                      slidesToScroll: '2',
                      itemWidth: 10,
                      duration: 0.25
                    }
                    },
                    {
                      // screens greater than >= 775px
                      breakpoint: 768,
                      settings: {
                        // Set to `auto` and provide item width to adjust to viewport
                        slidesToShow: '3',
                        slidesToScroll: '3',
                        itemWidth: 150,
                        duration: 0.25
                      }
                    },
                    {
                      // screens greater than >= 775px
                      breakpoint: 992,
                      settings: {
                        // Set to `auto` and provide item width to adjust to viewport
                        slidesToShow: '4',
                        slidesToScroll: '4',
                        itemWidth: 150,
                        duration: 0.25
                      }
                    },
                    {
                      // screens greater than >= 1024px
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: '6',
                        slidesToScroll: '6',
                        itemWidth: 150,
                        duration: 0.25
                      }
                    }
                  ]
            });
          }

        });
    }
}