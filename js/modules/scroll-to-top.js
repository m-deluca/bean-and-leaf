export function scrollToTop() {  

    const scrollTopButton = document.querySelector('.scroll-top-button');

    function toggleScrollTopButton() {
        if (window.scrollY > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', toggleScrollTopButton);
    scrollTopButton.addEventListener('click', scrollToTop);
}