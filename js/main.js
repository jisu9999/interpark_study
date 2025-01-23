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
    slidesPerView: 1.2, //모바일에서 보이는 갯수(390px을 따로 적어줄 필요가 없다.)
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
        slidesPerView: 2.5,
        spaceBetween: 26,
        grid: {
          rows: 3,
        },
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 26,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
    },
  });
});
