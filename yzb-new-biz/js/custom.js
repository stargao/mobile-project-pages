$(function(){
    $('.joke-content-wrap .joke-list dd.joke-content a.like-btn').click(function(){
        $(this).toggleClass('liked');
    });

    //Show check-in success tips function
    function showCheckInSuccessTips() {
        var checkInTips = $('.check-in-tips');
        checkInTips.removeClass('hidden');
        $(this).addClass('checked-style');
        checkInTips.animate({
            top: 0,
            opacity: 1},
            500, function() {
                setTimeout(
                    function(){
                        checkInTips.animate({
                            top: '-60px',
                            opacity: 0},
                            500, function() {
                            checkInTips.addClass('hidden');
                        });
                    }, 1500);
        });
    }
    $('.check-in-wrap .check-in-btn').one('click', showCheckInSuccessTips);

    //Show fault repiar tips function
    function showFaultRepairTips() {
        var faultTips = $('.fault-repair-tips');
        faultTips.removeClass('hidden');
        faultTips.animate({
            top: 0,
            opacity: 1},
            1000, function() {
                setTimeout(
                    function(){
                        faultTips.animate({
                            top: '-60px',
                            opacity: 0},
                            500, function() {
                            faultTips.addClass('hidden');
                        });
                    }, 1500);
        });
    }
    $('.fault-repair-btn').click(showFaultRepairTips);

    //The loading effect for buttons
    Ladda.bind( '#exchangeModal button', { timeout: 2000 } );
    Ladda.bind( 'button.reserve-btn', { timeout: 2000 } );
    $('button.reserve-btn').click(function(){
        setTimeout(function(){
            window.location.href='../reserve-success.html'
        }, 2500);
    });
});