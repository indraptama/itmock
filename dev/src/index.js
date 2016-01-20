import page from 'page';
import fetch from 'whatwg-fetch';
import Tabs from './js/tabs.js';
import Vibrant from 'node-vibrant';
import FigureBg from './js/figure-bg.js';
import imgFill from './js/vendor/imgfill.js';
// import particlesJS from 'particles.js';



function ToggleNav() {
	const navToggle = document.querySelector('.js-navToggle');
	const MobileNav = document.querySelector('.MobileNav');
	const navToggleClose = document.querySelector('.js-navToggleClose');
	
	navToggle.addEventListener('click', function(evt) {
		evt.preventDefault();
		MobileNav.classList.add('is-active');
	}, false);

	navToggleClose.addEventListener('click', function(evt) {
		evt.preventDefault();
		MobileNav.classList.remove('is-active');
	}, false);
}


// Call Function

ToggleNav();
FigureBg();

imgFill('.imgFill', '.imgFillSrc');




// Vanilla
document.addEventListener('DOMContentLoaded', function() {
	particlesJS.load('particles-js', '../asset/js/particlesjs-config1.json', function() {console.log('callback - particles.js config loaded');});
})