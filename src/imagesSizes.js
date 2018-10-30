const parseSizes = require('@ryuran/parse-sizes');

function ImagesSizes() {
  this.active = false;
  this.div = document.createElement('div');
  document.body.appendChild(this.div);
  this.div.style.position = 'fixed';
  this.resizeHandler = this.checkImages.bind(this);

  this.enable();
}

ImagesSizes.prototype.enable = function enable() {
  this.active = true;
  this.checkImages();
  window.addEventListener('resize', this.resizeHandler);
};

ImagesSizes.prototype.disable = function disable() {
  this.active = false;
  window.removeEventListener('resize', this.resizeHandler);
  const images = document.querySelectorAll('img');
  Array.prototype.forEach.call(images, (img) => {
    img.style.outlineOffset = null;
    img.style.outline = null;
  });
};

ImagesSizes.prototype.toggle = function toggle() {
  if (this.active) {
    this.disable();
    return;
  }
  this.enable();
};

ImagesSizes.prototype.testSizes = function testSizes(el) {
    this.div.style.width = parseSizes(el.getAttribute('sizes'));
    return this.div.getBoundingClientRect().width === el.getBoundingClientRect().width;
};

ImagesSizes.prototype.checkImages = function checkImages(){
  const images = document.querySelectorAll('img');
  Array.prototype.forEach.call(images, (img) => {
    img.style.outlineOffset = '-5px';
    if (!img.hasAttribute('sizes')) {
      img.style.outline = '5px solid yellow';
      return;
    }
    if (this.testSizes(img)) {
      img.style.outline = '5px solid green';
      return;
    }
    img.style.outline = '5px solid red';
  });
};

const imagesSizes = new ImagesSizes();

module.exports = imagesSizes;
