/*Слайдер*/
const storiesSwiper = new Swiper('.stories_swiper-container', {
  // Optional parameters
  loop: true,
    spaceBetween: 13,
    setWrapperSize: true,
    slidesPerView:1,
    watchOverflow: true,
    grabCursor: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
      clickable: true,
  },

  // Navigation arrows


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',

  },
   slideToClickedSlide: true,
   keyboard:{
       enabld: true,
       onlyInViewport:true,
       pageUpDown: true,
   },
    breakpoints: {

        696: {
            slidesPerView: 4,
        },
        497: {
            slidesPerView: 3,
        },
        335: {
            slidesPerView: 2,
        }
    },

});

const storiesModalSwiper = new Swiper('.stories-modal__swiper', {
  // Optional parameters
  loop: true,
    spaceBetween: 13,
    setWrapperSize: true,
    slidesPerView:1,
    watchOverflow: true,
    grabCursor: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
      clickable: true,
  },

  // Navigation arrows


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',

  },
   slideToClickedSlide: true,
   keyboard:{
       enabld: true,
       onlyInViewport:true,
       pageUpDown: true,
   },
    breakpoints: {

        696: {
            slidesPerView: 4,
        },
        497: {
            slidesPerView: 3,
        },
        335: {
            slidesPerView: 2,
        }
    },

});




/*Бургур*/
$(document).ready(function () {
    $('.burger_icon').click(function(event) {
        $('.burger_icon, .burger_menu').toggleClass('active');
        $('.body').toggleClass('no-scroll');
        $()
    })
});

$(document).ready(function () {
 $('#sub_link, .sub_nav_link').hover(
  function () {
  $( '#sub_link, .sub_nav_link' ) .addClass('active');  // Добавляем класс bounce
  },
  function () {
  $( '#sub_link, .sub_nav_link' ) .removeClass('active');  // Убираbounce
  }
)})


var textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});





// Модал
const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');


modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__content');

        modalContent.addEventListener('click', event => {
            event.stopPropagation();
        });

        modal.classList.add('show');
        body.classList.add('no-scroll');

        setTimeout(() => {
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';
        }, 1);

    });
});


modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');

        closeModal(currentModal);
    });
});


modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;

        closeModal(currentModal);
    });
});


function closeModal(currentModal) {
    let modalContent = currentModal.querySelector('.modal__content');
    modalContent.removeAttribute('style');

    setTimeout(() => {
        currentModal.classList.remove('show');
        body.classList.remove('no-scroll');
    }, 200);
}

