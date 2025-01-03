const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let index = 0;

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : images.length - 1;
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
    });

    nextButton.addEventListener('click', () => {
        index = (index < images.length - 1) ? index + 1 : 0;
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
    });
