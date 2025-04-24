
document.querySelectorAll('.img-grid img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const zoomImg = document.createElement('img');
    zoomImg.src = img.src;
    overlay.appendChild(zoomImg);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});
