import Vibrant from 'node-vibrant';

const FigureBg = () => {
  const Figures = Array.from(document.querySelectorAll('.Figure--slideDown'));
  for (let Figure of Figures) {
    const imgSrc = Figure.querySelector('img').getAttribute('src');
    const FigCaption = Figure.querySelector('figcaption');

    const bgColor = new Vibrant(imgSrc);
    bgColor.getPalette(( err, palette ) => {
      if (err) {
        FigCaption.style.backgroundColor('#ffffff');
      } else {
        const hexColor = palette.Vibrant.rgb.join();
        const bodyColor = palette.Vibrant.getTitleTextColor();
        FigCaption.style.backgroundColor = 'rgba(' + hexColor + ', 1)';
        FigCaption.style.color = bodyColor;
      }
    });
  }
};

export default FigureBg;
