//$(function(){
//    $(window).resize(function(e){
//        $('#resize-text').text("width: " + innerWidth + "height: " + innerHeight);
//    });
//    
//    $(window).scroll(function(e){
//        $("#scroll-text").text("scroll Y:" + window.scrollY);
//    });
//    
//    $("button").click(function(e){
//        $(this).text("Pushed");
//    });
//    
//});


$('<img>' , {
            src: 'http://a.disquscdn.com/uploads/users/2588/8584/avatar92.jpg?1474041172',
            alt: 'jQuery course logo',
            title: 'Основы jQuery',
            click: function(e){
                    $(this).toggleClass("selectedImg")
            }
        }).css({
            'padding': '10px',
            'border': '1px solid black'
        }).appendTo('body');