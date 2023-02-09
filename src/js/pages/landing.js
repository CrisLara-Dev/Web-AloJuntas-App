import slickCarousel from 'slick-carousel';
const d = document, c = console.log;

export class Landing {
    
    constructor(){
        this.init();
    }

    init(){
        window.addEventListener('load', function(){
          const lista4 = document.querySelector('.lista4');
          if(lista4){
            new Glider(document.querySelector('.lista4'),{
                slidesToShow: 1,
                slidesToScroll:1,
                draggable: true,
                dots: '.indicadores',
                arrows: {
                    prev: '.anterior4',
                    next: '.siguiente4'
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
                    },
                    {
                      // screens greater than >= 1024px
                        breakpoint: 996,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
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