import slickCarousel from 'slick-carousel';
const d = document, c = console.log;

export class Modal {
    
    constructor(){
        this.init();
    }

    init(){
        
        // .btn-cancel

        // #caja1
        // #caja2

        var expanded = false;
        const caja1 = document.getElementById("caja1");
        const caja2 = document.getElementById("caja2");
        caja2.style.display = "none";
        if(caja1){
            document.querySelector(".btn-cancel-1").onclick = function() {  
                caja1.style.display = "none";
                caja2.style.display = "block";
            }; 
            document.querySelector(".btn-cancel-2").onclick = function() {  
                caja2.style.display = "none";
                caja1.style.display = "block";
            }; 
        }
    }
}