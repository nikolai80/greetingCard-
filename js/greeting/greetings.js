var greeting = greeting || {};

greeting.greetings = (function () {
  var greetingTexts = {
    husband: {
      name: "Муж"
      , text: "поздравление от "
    }
    , mom: {
      name: "Мама"
      , text: "поздравление от "
    }
    , pop: {
      name: "Папа"
      , text: "поздравление от "
    }
    , brother: {
      name: "Брат"
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
