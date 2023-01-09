import $ from 'jquery';
window.$ = $;
import { Nosotros } from './pages/nosotros.js';
import { Nav } from './components/nav.js';


document.addEventListener('DOMContentLoaded',() => {
	new Nosotros();
})
