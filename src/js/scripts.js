import $ from 'jquery';
window.$ = $;
import { Modal } from './pages/modal.js';
import { Header2 } from './pages/header2.js';
import { Homefreemium } from './pages/home-freemium.js';
import { Guardadospremium } from './pages/guardados-premium.js';

document.addEventListener('DOMContentLoaded',() => {
	new Modal();
	new Header2();
	new Homefreemium();
	new Guardadospremium();
})
