'use strict';

const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const filterSelect = document.getElementById('filter');
const thresholdSlider = document.getElementById('threshold');
const sliderContainer = document.getElementById('slider-container');
const snapshotButton = document.getElementById('snapshot');

canvas.width = 480;
canvas.height = 360;

// Start webcam
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error('getUserMedia error:', err);
  });

// Change CSS filter on live video
filterSelect.onchange = () => {
  const value = filterSelect.value;
  video.className = value === 'threshold' ? '' : value;
  sliderContainer.style.display = value === 'threshold' ? 'block' : 'none';
};

// Apply snapshot with filter
snapshotButton.onclick = () => {
  const filter = filterSelect.value;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  if (filter === 'threshold') {
    const threshold = parseInt(thresholdSlider.value);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      const gray = 0.3 * r + 0.59 * g + 0.11 * b;
      const value = gray >= threshold ? 255 : 0;
      data[i] = data[i + 1] = data[i + 2] = value;
    }

    ctx.putImageData(imageData, 0, 0);
  } else {
    canvas.className = filter;
  }
};
