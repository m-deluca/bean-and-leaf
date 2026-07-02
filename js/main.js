import { themeToggle } from './modules/theme-toggle.js';
import { scrollToTop } from './modules/scroll-to-top.js';

//Call themeToggle as it is used on all pages
themeToggle();
scrollToTop();

if (document.body.dataset.page === 'carousel') {
  import('./modules/carousel.js').then(({ carousel }) => carousel());
} 