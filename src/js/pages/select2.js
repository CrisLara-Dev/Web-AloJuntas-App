import slickCarousel from 'slick-carousel';
const d = document, c = console.log;

export class Select2 {

    constructor() {
        this.init();
    }

    init() {
        
        window.addEventListener('load', function () {
            $(".js-example-tags").select2({
                tags: true
            });
        
        })
    }
}