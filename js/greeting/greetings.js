var greeting = greeting || {};

greeting.greetings = (function () {
  var greetingTexts = {
    husband: {
      avatar:"images/husband.png"
      ,name: "Муж"
      , text: "поздравление от "
    }
    , mom: {
      avatar: "images/mom.png"
      ,name: "Мама"
      , text: "поздравление от "
    }
    , pop: {
      avatar: "images/papa.png"
      ,name: "Папа"
      , text: "Прекрасный летний день тридцатого числа струиться ласковый эфир пионов и жасмина. И в этот чудный день ты родилась.И даже боги из тебя творят себе кумира. "
    }
    , brother: {
      avatar: "images/sergey.png"
      ,name: "Брат"
      , text: "поздравление от "
    }
  };
  return {
    init: function () {
      this.render();
      $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
    }
    , render: function () {
      var greetingText = new Vue({
        el: "#greetings"
        , data: { greetingTexts: greetingTexts }
      });
    }
  }
})();
