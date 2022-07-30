const isLoading = (close = false) => {
  if (close) {
    $.magnificPopup.open(
      {
        modal: true,
        items: {
          type: 'inline',
          src: '#loaderModal',
        },
        callbacks: {
          open: function () {
            $('#loaderModal').removeClass('hidden');
          },
        },
      },
      0
    );
    return;
  }

  $.magnificPopup.close(
    {
      modal: true,
      items: {
        type: 'inline',
        src: '#loaderModal',
      },
      callbacks: {
        close: function () {
          $('#loaderModal').addClass('hidden');
        },
      },
    },
    0
  );
};

handleExample = () => {
  isLoading(true);
  setTimeout(() => {
    window.location.reload();
  }, 3000);
};
