define(["jquery"],function($){
    $(document).on('click','.keyUnit',function () {
        $(this).siblings('a').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('unit') && $(this).hasClass('active')){
            $(this).siblings('.inputUnit').css('display','inline-block');
        }else{
            $(this).siblings('.inputUnit').css('display','none');
        }
    });
    $(document).on('blur','#unit',function () {
        var unit = $(this).val();
        $(this).parents('.inputUnitCo').siblings().children('.unitSpan').text(unit);
    });
});
