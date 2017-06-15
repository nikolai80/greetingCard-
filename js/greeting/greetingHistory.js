var greeting = greeting || {};

greeting.history = (function () {
    return {
        init: function () {
            this.render();
        }
        , render: function () {
            var history = new Vue({
                el: "#history"
                , data: { commonGreeting: "Пусть всегда в твоей жизни будут надежные и преданные люди. Пусь будет меньше зла ( а куда же совсем без него- оно укрепляет иммунитет ;-)) ). Счастья, много новых путешествий, впечатлений и достижения поставленных целей" }
            })
        }
    }
})();
