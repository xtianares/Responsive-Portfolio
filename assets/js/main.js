// to make sure that the body's bottom margin is equal the height of the sticky footer
$(function() {
    var wWidth = $(window).width();
    var footH = $("footer").css("height")
    $("body").css( "padding-bottom", footH );
    $(window).resize(function() {
        var footH = $("footer").css("height")
        if( wWidth != $(window).width() ) {
            $("body").css( "padding-bottom", footH );
        }
    });
});
