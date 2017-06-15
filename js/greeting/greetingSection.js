var greeting = greeting || {};

greeting.section = (function () {
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
               var greetingText=new Vue({
                 el: "#greetings"
                 , data: { greetingTexts:greetingTexts }
      });
               var news = new Vue({
                 el: "#news"
                 ,data: {
                   header: "Немного о юбилярше"
                   , horoskopesText: "Женщина-Рак загадочна, как сама Луна. Вы думали, что она практична и рациональна, а, узнав ее поближе, разглядели романтическую натуру и нежную, ранимую душу? Раньше вам казалось, что она – само спокойствие, однако рядом с вами ее настроение то и дело меняется, демонстрируя то радость, то задумчивость, то грусть? Поверьте, это совершенно нормально, просто мало кому женщина-Рак позволяет увидеть себя такой, как она есть: свой ранимый внутренний мир она тщательно скрывает от посторонних."
                   , nameMeaning:"В имени Надежда огромный заряд терпения и ожидания чего-то хорошего. По своей звуковой энергетике оно обладает достаточной твердостью и основательностью, что в значительной степени сохраняется даже в уменьшительных формах имени – Надя, Наденька, Надюша и так далее."
                 }
               });
               var history = new Vue({
                 el: "#history"
                 , data: { commonGreeting:"Пусть всегда в твоей жизни будут надежные и преданные люди. Пусь будет меньше зла ( а куда же совсем без него- оно укрепляет иммунитет ;-)) ). Счастья, много новых путешествий, впечатлений и достижения поставленных целей"}
               })

               var photos=new Vue({
                 el:"#photos"
                 , data:{
                   photos:greeting.section.getPhotos()
                 }
               })
    }
    , getPhotos:function(){
      var photos=[
        {name:"",url:"images/nadia/citati_o_lete_3.jpg",isDoubleWidth: true}
        ,{name:"",url:"images/nadia/images.jpg",isDoubleWidth: false}
        ,{name:"",url:"images/nadia/images2.jpg",isDoubleWidth:false}
        ,{name:"",url:"images/nadia/images.jpg",isDoubleWidth: true}
      ];
return photos;
    }
  }
})();

greeting.section.init();
