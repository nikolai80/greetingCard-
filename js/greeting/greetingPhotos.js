var greeting = greeting || {};

greeting.photos = (function () {
  return {
    init: function () {
      this.render();
    }
    , render: function () {
      $.getJSON("data/photos.json", function (data) {
        var photos = new Vue({
          el: "#photos"
          , data: {
            photos: data
          }
        });
      });
    }
  }
})();
