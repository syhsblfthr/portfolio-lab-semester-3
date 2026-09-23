(() => {
    const transitionObjects = document.getElementsByClassName('transition-opacity');

    console.log(innerHeight);

    let a = 150;
    Array.from(transitionObjects).forEach(element => {
        element.style.transitionDelay = `${a}ms`;
        setTimeout(() => {
            element.style.transitionDelay = '0ms';
            element.classList.replace('duration-750', 'duration-500');
        }, a);
        a += 150;
        element.classList.remove('opacity-0');
    });

    const navs = document.querySelectorAll('[data-nav]');
    const navObjects = document.querySelectorAll('section');

    for (const navElement of navs) {
        navElement.addEventListener('click', () => {
            for (const navObject of navObjects) {
                if (navElement.dataset.nav != navObject.id) {
                    navObject.classList.add('opacity-20');

                    setTimeout(() => {
                        navObject.classList.remove('opacity-20');
                    }, 1000);
                }
                else {
                    navObject.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    }
})();

// Carousel
(() => {
    let index = 0;
    const items = document.getElementsByClassName('carousel-image');
    const navigation = document.getElementsByClassName('carousel-navigation');

    navigation[0].addEventListener('click', () => {
        if (index == 0) {
            return;
        }

        items[index].classList.replace('opacity-100', 'opacity-0');
        
        index -= 1;

        items[index].classList.replace('opacity-0', 'opacity-100');
    });

    navigation[1].addEventListener('click', () => {
        if (index == (items.length - 1)) {
            return;
        }

        items[index].classList.replace('opacity-100', 'opacity-0');
        
        index += 1;

        items[index].classList.replace('opacity-0', 'opacity-100');
    });
})();