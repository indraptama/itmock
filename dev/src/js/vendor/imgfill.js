'use strict';

// usage:
// imgFill(target, imgSrc)
// require es6



const setCSS = (element) => {
  let CSS = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };
  // create multiple CSS Property
  for (let i in CSS) {
    element.style[i] = CSS[i];
  }
};

const imgFill = (target, srcClass) => {
  let imgConts = Array.from(document.querySelectorAll(target));
  for (let img of imgConts) {

    // define image source class
    let imgSrc = img.querySelector(srcClass);

    // Get image source url
    let imgSrcURL = imgSrc.getAttribute('src');

    // hide source images
    imgSrc.style.display = 'none';
    // Set Multiple CSS Property
    img.style.backgroundImage = 'url(' + imgSrcURL + ')';
    setCSS(img);
  }
};

export default imgFill;