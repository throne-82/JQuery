$(function(){
    $('#azul').click(function(){
        $('p').css({
            color: 'blue',
            border: '1px solid blue'
        });
//        $('p').fadeOut();
    })

    $('#vermelho').click(function(){
        $('p').css('color', 'red');
        $('p').fadeIn();
        $('#mensagem').text("Cor alterada com sucesso");
    })

    $('#verde').click(function(){
        $('p').css('color', 'green')
        .fadeOut('slow')
        .delay(2000)
        .fadeIn('slow')
        .addClass('orange');
    })

    $('#l2').click(function(){
        $('#i1').hide();
        $('#i3').hide();
        $('#i4').hide();
        $('#i2').show();
    })

    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i4').hide();
        $('#i3').show();
    })

    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    })

})