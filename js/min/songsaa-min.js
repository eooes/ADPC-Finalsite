$(".languagecov ul li").hover(function(){$(this).addClass("activex2")},function(){$(this).removeClass("activex2")}),$(".activex, .notactivex").hover(function(){$(".notactivex").show()},function(){$(".notactivex").hide()}),$(window).width()<756&&$(".classmenu").on({click:function(){},mouseenter:function(){$(this).find("li:not(:first)").toggle("slow")},mouseleave:function(){$(this).find("li:not(:first)").toggle("slow")}});