const isLoading = (close = false) => {
    if (close) {

        $.magnificPopup.open({
            modal: true,
            items: {
                type: 'inline',
                src: '#modal'
            },
            callbacks: {
                open: function() {
                    $('#modal').removeClass('hidden');
                }
            }
        }, 0);
        return;

    }

    $.magnificPopup.close({
        modal: true,
        items: {
            type: 'inline',
            src: '#modal'
        },
        callbacks: {
            close: function() {
                $('#modal').addClass('hidden');
            }
        }
    }, 0);

}