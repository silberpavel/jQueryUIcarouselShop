$(document).ready(function() {


    var $btnLeft = $('#btnLeft');
    var $btnRight = $('#btnRight');
    var $slides = $('.img');

    $('.group1').show();
    $('.group2').hide();

    // Buttons 
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

    // DRAG AND DROP
    $slides.mouseover(function() {
        $(this).attr('id', 'draggable');
        $(this).addClass('draggable ui-draggable ui-draggable-handle');
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
                }
            });
        });

    });

    // drag leave to the basket and get item info 

    $slides.mouseleave(function() {
        $(this).removeAttr('id');
        $(this).removeClass('draggable ui-draggable ui-draggable-handle');
    });













});