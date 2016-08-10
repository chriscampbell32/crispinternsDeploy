$(function() {
        $('#vidbutton1-large').on('click',
        function(event) {
            event.stopPropagation();
            $('#vidbutton1-large').addClass('active');
        });
        $('#vidbutton2-large, #vidbutton3-large, #vidbutton4-large, #vidbutton5-large').click(function() {
            $('#vidbutton1-large').removeClass('active');
        });
    });

$(function() {
        $('#vidbutton2-large').on('click',
        function(event) {
            event.stopPropagation();
            $('#vidbutton2-large').addClass('active');
        });
        $('#vidbutton1-large, #vidbutton3-large, #vidbutton4-large, #vidbutton5-large').click(function() {
            $('#vidbutton2-large').removeClass('active');
        });
    });

$(function() {
        $('#vidbutton3-large').on('click',
        function(event) {
            event.stopPropagation();
            $('#vidbutton3-large').addClass('active');
        });
        $('#vidbutton1-large, #vidbutton2-large, #vidbutton4-large, #vidbutton5-large').click(function() {
            $('#vidbutton3-large').removeClass('active');
        });
    });

$(function() {
        $('#vidbutton4-large').on('click',
        function(event) {
            event.stopPropagation();
            $('#vidbutton4-large').addClass('active');
        });
        $('#vidbutton1-large, #vidbutton2-large, #vidbutton3-large, #vidbutton5-large').click(function() {
            $('#vidbutton4-large').removeClass('active');
        });
    });

$(function() {
        $('#vidbutton5-large').on('click',
        function(event) {
            event.stopPropagation();
            $('#vidbutton5-large').addClass('active');
        });
        $('#vidbutton1-large, #vidbutton2-large, #vidbutton3-large, #vidbutton4-large').click(function() {
            $('#vidbutton5-large').removeClass('active');
        });
    });




