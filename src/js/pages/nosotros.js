import slickCarousel from 'slick-carousel';
const d = document, c = console.log;

export class Nosotros {
    
    constructor(){
        this.init();
    }

    init(){
        const nosotrosPage = d.querySelector('#page-nosotros');
        if (nosotrosPage) {
        $(document).ready(function() {
            console.log('nosotros')
            $('.carousel-items').slick();
        
        });
        }
    }
}