import slickCarousel from 'slick-carousel';
const d = document, c = console.log;

export class Contra {
    
    constructor(){
        this.init();
    }

    init(){
        window.addEventListener('load', function(){
            const ojo = document.getElementById("ojo");
            if(ojo){   
                document.getElementById("ojo").onclick = function() {  
                    mostrar()  
                }; 
                function mostrar() {
                    var tipo = document.getElementById("password");
                    if (tipo.type =='password') {
                        tipo.type = 'text';
                    } else {
                        tipo.type ='password';
                    }
                }
            }
        })  
    }
}