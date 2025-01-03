const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let index = 0;

    const updateCarousel = () => {
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
    };

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : images.length - 1;
        updateCarousel();
        resetAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        index = (index < images.length - 1) ? index + 1 : 0;
        updateCarousel();
        resetAutoSlide();
    });

    // Auto slide logic
    let autoSlideInterval = setInterval(() => {
        index = (index < images.length - 1) ? index + 1 : 0;
        updateCarousel();
    }, 3000); // Cambia de imagen cada 3 segundos

    // Reinicia el auto slide cuando el usuario interactúa
    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            index = (index < images.length - 1) ? index + 1 : 0;
            updateCarousel();
        }, 3000);
    };