function isLoading(close = false) {

    if (close) {

        $.magnificPopup.open({
            modal: true,
            items: {
                type: 'inline',
                src: '#modal-cad-padrao'
            },
            callbacks: {
                open: function() {
                    $('#modal-cad-padrao').removeClass('hidden');
                }
            }
        }, 0);

    } else {

        $.magnificPopup.close({
            modal: true,
            items: {
                type: 'inline',
                src: '#modal-cad-padrao'
            },
            callbacks: {
                close: function() {
                    $('#modal-cad-padrao').addClass('hidden');
                }
            }
        }, 0);

    }

}


function loading(url = false, post = false) {
    $.magnificPopup.open({
        modal: true,
        items: {
            type: 'inline',
            src: '#modal-cad-padrao'
        },
        callbacks: {
            open: function() {
                $('#modal-cad-padrao').removeClass('hidden');
                if (url) window.location = url;
                if (post) document.getElementById(post).submit();
            }
        }
    }, 0);
}