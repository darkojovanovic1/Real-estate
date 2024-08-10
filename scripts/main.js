/*=============== CHANGE BACKGROUND HEADER ===============*/


const scrollHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {


        slidesPerView: 1,
        spaceBetween: 32,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value-accordion-item');
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value-accordion-header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)
        if(openItem && openItem !== item){
            toggleItem(openItem)
        }
    })
})
const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value-accordion-content')
    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open')
    }
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]')
 
    const scrollActive = () =>{
       const scrollDown = window.scrollY

       sections.forEach(current =>{
           const sectionHeight = current.offsetHeight,
                 sectionTop = current.offsetTop - 58,
                 sectionId = current.getAttribute('id'),
                 sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

           if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
               sectionsClass.classList.add('active-link')
           }else{
               sectionsClass.classList.remove('active-link')
           }                                                    
       })
    }
    window.addEventListener('scroll', scrollActive)
});



/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
