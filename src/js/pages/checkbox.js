import slickCarousel from 'slick-carousel';
const d = document, c = console.log;

export class Checkbox {
    
    constructor(){
        this.init();
    }

    init(){
        window.addEventListener('load', function(){
            var expanded = false;
            document.getElementById("selectBox").onclick = function() {  
                showCheckboxes()  
            }; 
            function showCheckboxes() {
                var checkboxes = document.getElementById("checkboxes");
                if (!expanded) {
                    checkboxes.style.display = "block";
                    expanded = true;
                } else {
                    checkboxes.style.display = "none";
                    expanded = false;
                }
            }

        })        
    }
}