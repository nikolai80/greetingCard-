greeting=greeting||{};

greeting.section=function(){
    var init=function(){
        var greetingText=new Vue({
        el:"greetings"
    });
}
    var bindOwlcarousel=function(){
            $(".js-owlcarousel").owlcarousel();}
    return {
        init()
        ,bindOwlcarousel();
        }
    }
