import slickCarousel from 'slick-carousel';
const d = document, c = console.log;

export class Restriccion {

    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', function () {
            const vali = document.getElementsByClassName("vali");
            if (vali) {
                onclick = function () {
                    selecciones()
                };
            
                function selecciones() {
                    $("#chk_op1").on('change', function (ev) {
                        ev.preventDefault();
                        $("#chk_op1").prop("checked", true);
                        $("#chk_op2").prop("checked", false);
                        $("#chk_op3").prop("checked", false);

                    });
                    $("#chk_op2").on('change', function (ev) {
                        ev.preventDefault();
                        $("#chk_op2").prop("checked", true);
                        $("#chk_op1").prop("checked", false);
                        $("#chk_op3").prop("checked", false);

                    });
                    $("#chk_op3").on('change', function (ev) {
                        ev.preventDefault();
                        $("#chk_op3").prop("checked", true);
                        $("#chk_op2").prop("checked", false);
                        $("#chk_op1").prop("checked", false);

                    });
                }
            }
        })
    }
}
