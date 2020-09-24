export default (image) => {
  const container = document.createElement('div');

  const btn = document.createElement('button');
  btn.innerText = 'HELLO!';
  btn.style.display = 'block';

  container.appendChild(btn);

  const imageTag = new Image(100);
  imageTag.src = image;

  let loadImage = false;
  btn.onclick = () => {
    if (!loadImage) {
      container.appendChild(imageTag);
    } else {
      container.removeChild(imageTag);
    }
    loadImage = !loadImage;
  };

  return container;
};
