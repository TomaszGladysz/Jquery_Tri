// $('button').click(function(){
//     console.log($(this).attr('data-filter'))
//   });

// $('button').click(function(){
//     $(this).attr('data-filter').hide(
    
//     )
//   });

// $('button').click(function(){
//     $('.overwatch').toggle();
// });

// $('button').click(function(){
//     $('.overwatch').toggle();
// });


// $('button').click(function(){
//     $jeu = $(this).attr('data-filter');
//     $('.hero').hide();
//     $('.' + $jeu).show();
//     })


$('button').click(function(){
    var cache = $(this).attr('data-filter');
    $('button').removeClass('active');
    $(this).addClass('active');
    $('.hero').hide();
    $('.' + cache + '').show();
})