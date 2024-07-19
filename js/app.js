$(document).ready(function () {
    $('#Curso1').click(function (e) { 
        e.preventDefault();
        $('#Botones').html('<img width="100" src="img/PHP-Logo.png.jpg" >');
        $('#Curso1').hide()
    });
    $('#Curso2').click(function (e) { 
        e.preventDefault();
        $('#Botones').html('<img width="100" src="img/Phython-Logo.png.jpg" >');
        $('#Curso2').hide()
    });
    $('#Curso3').click(function (e) { 
        e.preventDefault();
        $('#Botones').html('<img width="100" src="img/Javascript-Logo.png.jpg" >');
        $('#Curso3').hide()
        $('#Curso3').slideUp(3000);
    });
});

    $('#ocultar').click(function (e) { 
        e.preventDefault();
        $('img').slideUp(3000);
    });
    $('#ocultar2').click(function (e) { 
        e.preventDefault();
        $('img').slideToggle(3000);
    });
    $('#mostrar').click(function (e) { 
        e.preventDefault();
        $('img').slideDown(3000);
    });

