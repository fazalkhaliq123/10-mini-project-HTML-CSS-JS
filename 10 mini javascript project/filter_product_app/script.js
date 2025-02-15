const imageUpload = document.getElementById('imageUpload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const grayscale = document.getElementById('grayscale');
const sepia = document.getElementById('sepia');
const blur = document.getElementById('blur');
const brightness = document.getElementById('brightness');
const contrast = document.getElementById('contrast');
const invert = document.getElementById('invert');

let img = new Image();

imageUpload.addEventListener('change', function(event) {
  const reader = new FileReader();
  reader.onload = function(e) {
    img.src = e.target.result;
  };
  reader.readAsDataURL(event.target.files[0]);
});

img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
  applyFilters();
};

function applyFilters() {
  const grayscaleValue = grayscale.value;
  const sepiaValue = sepia.value;
  const blurValue = blur.value;
  const brightnessValue = brightness.value;
  const contrastValue = contrast.value;
  const invertValue = invert.value;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.filter = `grayscale(${grayscaleValue}%) 
                sepia(${sepiaValue}%) 
                blur(${blurValue}px) 
                brightness(${brightnessValue}%) 
                contrast(${contrastValue}%) 
                invert(${invertValue}%)`;

  ctx.drawImage(img, 0, 0);
}

grayscale.addEventListener('input', applyFilters);
sepia.addEventListener('input', applyFilters);
blur.addEventListener('input', applyFilters);
brightness.addEventListener('input', applyFilters);
contrast.addEventListener('input', applyFilters);
invert.addEventListener('input', applyFilters);
