// window.onload = function () {};
window.addEventListener("load", function () {
  // header 마이페이지 클릭시 mypage-list보임
  const mypageBtn = this.document.querySelector(".mypageBt");
  const mypageList = this.document.querySelector(".mypage-list");
  mypageBtn.addEventListener("click", function () {
    // console.log("click")
    mypageList.classList.toggle("showMypage");
  });
  //   swiper
  const swTour = new Swiper(".sw-tour", {
    slidesPerView: 1.2, //모바일에서 보이는 갯수(모바일사이즈 390px을 따로 적어줄 필요가 없다.)
    spaceBetween: 20,
    grid: {
      rows: 3,
      fill: "row",
    },
    breakpoints: {
      480: {
        spaceBetween: 26,
        slidesPerView: 2,
        grid: {
          rows: 3,
        },
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 26,
        grid: {
          rows: 3,
        },
      },
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 26,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
    },
    navigation: {
      nextEl: ".tour .sw-next",
      prevEl: ".tour .sw-prev",
    },
  });
  const swShopping = new Swiper(".sw-shopping", {
    slidesPerView: 1.3,
    spaceBetween: 15,
    grid: {
      rows: 1,
      fill: "row",
    },
    breakpoints: {
      480: {
        spaceBetween: 26,
        slidesPerView: 2,
        slidesPerGroup: 3,
      },
      768: {
        spaceBetween: 26,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 3,
        },
      },

      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
    navigation: {
      nextEl: ".shopping .sw-next",
      prevEl: ".shopping .sw-prev",
    },
  });
});

