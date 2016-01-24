import page from 'page';
import fetch from 'whatwg-fetch';
import Tabs from './js/tabs.js';
import Vibrant from 'node-vibrant';
import FigureBg from './js/figure-bg.js';
import imgFill from './js/vendor/imgfill.js';
import Vivus from 'vivus';
import tinySlider from './js/vendor/tiny-slider.js';

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


function SVGLOAD() {
	var BuildEngine = new Vivus('BuildEngine', {type: 'async', duration: 10})
}

// Call Function

ToggleNav();
FigureBg();
imgFill('.imgFill', '.imgFillSrc');
// SVGLOAD()




// // Vanilla
 document.addEventListener('DOMContentLoaded', function() {
	particlesJS.load('particles-js', '../asset/js/particle.json', function() {console.log('callback - particles.js config loaded');});
	var ps = new ParticleSlider({});

	tinySlider({
  		container: document.querySelector('.slider'),
  		items: 1,
  		responsive: {
    		500: 2,
    		800: 3,
  		}
	});

 // ps.$canv.addEventListener("touchstart", function(e){
 // 	e.preventDefault();
 // 	e.clientX = e.changedTouches[0].clientX;
 // 	e.clientY = e.changedTouches[0].clientY;

	// ps.$canv.onmousemove(e);
 // }, false);

 //  ps.$canv.addEventListener("touchend", function(e){
 // 	e.preventDefault();
 // 	e.clientX = 0;
 // 	e.clientY = 0;

	// ps.$canv.onmousemove(e);
	// ps.$canv.onmouseout(e);
 // }, false);

})