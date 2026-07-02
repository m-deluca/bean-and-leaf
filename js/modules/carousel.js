export function carousel() {  

    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');

    const previousButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    let currentSlide = 0;

    function updateDots() {
        dots.forEach(removeActiveClass);
        dots[currentSlide].classList.add('active');
    }

    function removeActiveClass(dot) {
        dot.classList.remove('active');
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        slides[currentSlide].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        });
        updateDots();
    }

    function previousSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        slides[currentSlide].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        });
        updateDots();
    }

    previousButton.addEventListener(
        'click',
        previousSlide
    );

    nextButton.addEventListener(
        'click',
        nextSlide
    );
}