
 const images = document.querySelectorAll('.image');
  const mainImage = document.getElementById('main-image');

  let currentIndex = 0;
  const intervalTime = 3000; 

  function showImage(index) {

    const selectedImage = images[index];
    mainImage.src = selectedImage.src;

    images.forEach(t => t.classList.remove('selected'));
    selectedImage.classList.add('selected');

    currentIndex = index;
  }

  images.forEach((image, index) => {
    image.addEventListener('click', () => {
      showImage(index);
      resetInterval(); 
    });
  });

  let autoChange = setInterval(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
  }, intervalTime);

  function resetInterval() {
    clearInterval(autoChange);
    autoChange = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      showImage(nextIndex);
    }, intervalTime);
  }