/*!
 * Songsaa JS
 *  
 *  
 */




$(".languagecov ul li").hover(
    function() {
        $(this).addClass("activex2");
    },
    function() {
        $(this).removeClass("activex2");
    }
);

$(".activex, .notactivex").hover(
    function() {
        $(".notactivex").show();
    },
    function() {
        $(".notactivex").hide();
    });


// $( ".classmenu" ).click(function() {
//   $( this ).toggle( );
// });
// $(window).width()

if ($(window).width() < 756) {
    $(".classmenu").on({
        click: function() {

        },
        mouseenter: function() {
            $(this).find('li:not(:first)').toggle("slow");
        },
        mouseleave: function() {
            $(this).find('li:not(:first)').toggle("slow");
        }
    });
}
// if ($(window).width() < 500) {
//     $("#viewall1, #viewall2").removeClass("pull-right");
//     $("#viewall1, #viewall2").addClass("pull-left");

// } else {
//     $("#viewall1, #viewall2").removeClass("pull-left");
//     $("#viewall1, #viewall2").addClass("pull-right");
// }

