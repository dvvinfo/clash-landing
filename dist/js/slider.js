// skills-carousel

$(document).ready(function () {
  $(".skills-carousel__wrapper").slick({
    autoplay: false,
    autoplaySpeed: 6000,
    arrows: true,
    infinite: true,
    dots: false,
    centerMode: true,
    slidesToShow: 5,
    prevArrow:
      '<button class="skills-carousel__pre "><svg class="skills-carousel__pre__img" width="33" height="66" viewBox="0 0 33 66" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0391 33.0811L32.6773 5.35135L20.5746 0L0 33.1622L20.978 66L33 60.5676L14.0391 33.0811Z" fill="#F4F4F4"></path></svg></button>',
    nextArrow:
      '<button class="skills-carousel__next"><svg class="skills-carousel__next__img" width="33" height="66" viewBox="0 0 33 66" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9609 33.0811L0.322739 5.35135L12.4254 0L33 33.1622L12.022 66L0 60.5676L18.9609 33.0811Z" fill="#F4F4F4"></path></svg></button>',
    responsive: [
      {
        breakpoint: 835,
        arrows: false,
      },
    ],
  });

  //road-map carousel

  $(".road-map__carousel").slick({
    autoplay: false,
    autoplaySpeed: 6000,
    arrows: true,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    prevArrow:
      '<button class="road-map__carousel-btn-prev "><svg class="road-map__carousel-btn__img" width="21" height="40" viewBox="0 0 21 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.04897 20.047L20.7967 3.91332L13.1683 0.799805L0.200073 20.0942L13.4226 39.1998L21.0001 36.0391L9.04897 20.047Z" fill="white"></path></svg></button>',
    nextArrow:
      '<button class="road-map__carousel-btn-next"><svg class="road-map__carousel-btn__img" width="21" height="40" viewBox="0 0 21 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9511 19.953L0.203417 36.0867L7.83178 39.2002L20.8 19.9058L7.5775 0.800196L-4.54868e-06 3.96089L11.9511 19.953Z" fill="white"></path></svg></button>',

    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 835,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          settings: "unslick",
        },
      },
    ],
  });

  $(".road-map__carousel-mobile").slick( {
    autoplay: false,
    autoplaySpeed: 6000,
    arrows: true,
    infinite: true,
    dots: false,
    slidesToShow: 1,
    prevArrow:
      '<button class="road-map__content-number__btn-prev "><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.13022 12.0295L11.941 1.94595L7.51843 0L0 12.059L7.66585 24L12.059 22.0246L5.13022 12.0295Z" fill="#F4F4F4"></path></svg></button>',
    nextArrow:
      '<button class="road-map__content-number__btn-next"><svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.92886 11.9705L0.11805 22.0541L4.54065 24L12.0591 11.941L4.39324 1.23718e-06L0.000115413 1.97543L6.92886 11.9705Z" fill="#F4F4F4"></path></svg></button>',
  });
});