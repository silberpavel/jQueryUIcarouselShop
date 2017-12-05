$(document).ready(function() {


    var $btnLeft = $('#btnLeft');
    var $btnRight = $('#btnRight');
    var $slides = $('.img');
    // var ACTIVE_ITEM = 'active';

    // $slides.not('.' + ACTIVE_ITEM).hide(); //все .img кроме ACTIVE_ITEM

    $('.group1').show();
    $('.group2').hide();

    $btnLeft.click(function() {
        if ($slides.hasClass('group1 active')) {
            $('.group1').hide('slow').removeClass('active');
            $('.group2').show('slow').addClass('active');
        } else {
            $('.group2').hide('slow').removeClass('active');
            $('.group1').show('slow').addClass('active');
        }
    });

    $btnRight.click(function() {
        if ($slides.hasClass('group1 active')) {
            $('.group1').hide('slow').removeClass('active');
            $('.group2').show('slow').addClass('active');
        } else {
            $('.group2').hide('slow').removeClass('active');
            $('.group1').show('slow').addClass('active');
        }
    });




    $slides.mouseover(function() {
        $(this).attr('id', 'draggable');
        $(this).addClass('draggable ui-draggable ui-draggable-handle');
        // $(this).addClass('ui-draggable ui-draggable-handle');
        $(function() {
            $("#draggable").draggable({
                revert: true //Элемент уходит на свою позицию
            });
            $("#droppable").droppable({
                drop: function(event, ui) {
                    $(this)
                        .addClass("ui-state-highlight")
                        .find("p")
                        .html("Dropped!" + ($('#draggable').attr('alt')));
                    // console.log();
                }
            });
        });

    });

    $slides.mouseleave(function() {
        $(this).removeAttr('id');
        $(this).removeClass('draggable ui-draggable ui-draggable-handle');
        // $(this).removeClass('ui-draggable ui-draggable-handle');
    });













});