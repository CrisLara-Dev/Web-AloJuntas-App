import $ from 'jquery';
window.$ = $;
import { Restriccion} from './pages/restriccion.js';
import { Paises} from './pages/paises.js';
import { Contra } from './pages/contra.js';
import { Landing } from './pages/landing.js';
import { Modal } from './pages/modal.js';
import { Checkbox } from './pages/checkbox.js';
import { Header2 } from './pages/header2.js';
import { Homefreemium } from './pages/home-freemium.js';
import { Guardadospremium } from './pages/guardados-premium.js';

document.addEventListener('DOMContentLoaded',() => {
	new Landing();
	new Paises();
	new Restriccion();
	new Contra();
	new Modal();
	new Checkbox();
	new Header2();
	new Homefreemium();
	new Guardadospremium();
})
