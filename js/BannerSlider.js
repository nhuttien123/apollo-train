$(document).ready(function () {
  $(".js-banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1900,
    fade: true,
  });

  if ($(".js-story-slider").length > 0) {
    for (let i = 0; i < $(".js-dot-item").length; i++) {
      $(".js-dot-item").eq(0).addClass("actived");
      $(".js-dot-item")
        .eq(i)
        .on("click", function () {
          const index = $(".js-dot-item").eq(i).attr("data");
          $(".slick-slider").slick("goTo", index);
        });
    }

    $(".js-story-slider").slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
    });

    $(".js-story-slider").on(
      "beforeChange",
      function (slider, index, current, next) {
        $(".fly-to").attr("data", next);
        $(".js-dot-item").eq(current).removeClass("actived");
        $(".js-dot-item").eq(next).addClass("actived");
      }
    );
  }

  if ($(".js-tab").length > 0) {
    $(".tab-btn").eq(0).addClass("active");
    $(".box-tabs").eq(0).css("display", "block");
    $(".connect-line").eq(0).css("display", "block");
    for (let i = 0; i < $(".tab-btn").length; i++) {
      $(".tab-btn")
        .eq(i)
        .on("click", function () {
          $(".tab-btn").removeClass("active");
          $(".tab-btn").eq(i).addClass("active");

          $(".box-tabs").css("display", "none");
          $(".box-tabs").eq(i).css("display", "block");

          $(".connect-line").css("display", "none");
          $(".connect-line").eq(i).css("display", "block");
        });
    }
  }

  $(".js-feedback-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button class="feedback-prev feedback-btn"> <i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button class="feedback-next feedback-btn"> <i class="fas fa-chevron-right"></i></button>`,
  });

  if ($(".scroll-to").length > 0) {
    $(".scroll-to").click(function () {
      $("#story")[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});
