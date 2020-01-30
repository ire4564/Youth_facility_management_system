//Room Manager의 한글 처리
var tableOfkorean = document.getElementsByClassName('korean');
$(tableOfkorean).children().css("fontFamily" ,"'Noto Serif KR', serif");

var windowSize = $(window).width();
console.log(windowSize)

//스크롤시 움직이기
$(window).scroll(function(){
    var scrollTop = $(document).scrollTop();
    if (scrollTop < 200) {
        scrollTop = 200;
    }
    else if(scrollTop > 200) {
        scrollTop = 200;
    }
    $("#box").stop();
    $("#box").animate( { "top" : scrollTop });
    });