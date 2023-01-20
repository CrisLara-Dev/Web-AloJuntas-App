import $ from 'jquery';
window.$ = $;
import { Nosotros } from './pages/nosotros.js';
import { Nav } from './components/nav.js';
import { Header2 } from './pages/header2.js';
import { Homefreemium } from './pages/home-freemium.js';
import { Guardadospremium } from './pages/guardados-premium.js';

document.addEventListener('DOMContentLoaded',() => {
	new Nosotros();
	new Header2();
	new Homefreemium();
	new Guardadospremium();
})
