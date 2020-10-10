$(document).ready(function () {

    //MOSTRANDO MENÚ

    $('#button-menu').click(function () {

        if ($('#button-menu').attr('class') == 'fa fa-bars') {

            $('#button-menu').removeClass('fa fa-bars').addClass('fa fa-close');

            $('.navegacion .menu').css({ 'left': '0%' });

            $('.navegacion').css({ 'width': '103%', 'background': 'rgba(0,0,0,.3)' });

            $('html, body').css({ 'overflow': 'hidden', 'height': '100%' });

        }
        else {

            $('#button-menu').removeClass('fa fa-close').addClass('fa fa-bars');

            $('.navegacion .menu').css({ 'left': '-360px' });

            $('.navegacion .submenu').css({ 'left': '-360px' });

            $('.navegacion').css({ 'width': '0%', 'background': 'rgba(0,0,0,.0)' });

            $('html, body').css({ 'overflow': 'auto', 'height': 'auto' });
        }

    });

    //MOSTRAR SUBMENUS

    $('.navegacion .menu > .item-submenu a').click(function () {

        var positionMenu = $(this).parent().attr('menu');

        $('.item-submenu[menu=' + positionMenu + '] .submenu').css({ 'left': '0px' });
    });

    //OCULTANDO SUBMENU
    $('.navegacion .submenu li.go-back').click(function () {

        $(this).parent().css({ 'left': '-360px' });
    });

});