$(document).ready(function() {
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});






//**Slaider */


$(document).ready(function(){
	$('.sound__slider').slick();
});



//**burger menu */

const buildBtn = document.querySelector(".build__btn");
const buildContent = document.querySelector(".build__content");

if(buildBtn){
    buildBtn.addEventListener("click" , function(e){
        buildBtn.classList.toggle("active");
        buildContent.classList.toggle("active");

    })
}




const iconMenu = document.querySelector(".header__menu__btn");
const menuBody = document.querySelector(".header__nav");

if(iconMenu){
    iconMenu.addEventListener("click" , function(e){
        iconMenu.classList.toggle("active");
        menuBody.classList.toggle("active");
		$('body').toggleClass('lock');
    })
}


const menuLinks = document.querySelectorAll(".header__link[data-goto]");

if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e)  {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__top').offsetHeight;


            if(iconMenu.classList.contains("active")){
                iconMenu.classList.remove("active");
                menuBody.classList.remove("active");
				$('body').removeClass('lock');
        
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });

            e.preventDefault();
        }
    }
}