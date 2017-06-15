var greeting = greeting || {};

greeting.photos = (function () {
    return {
        init: function () {
            this.render();
        }
        , render: function () {
            var photos = new Vue({
                el: "#photos"
                , data: {
                    photos: greeting.photos.getPhotos()
                }
            })
        }
        , getPhotos: function () {
            var photos = [
                { name: "", url: "images/nadia/citati_o_lete_3.jpg", isDoubleWidth: true }
                , { name: "", url: "images/nadia/images.jpg", isDoubleWidth: false }
                , { name: "", url: "images/nadia/images2.jpg", isDoubleWidth: false }
                , { name: "", url: "images/nadia/images.jpg", isDoubleWidth: true }
            ];
            return photos;
        }
    }
})();
