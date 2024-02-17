$(document).ready(function () {
  let currentInput = '';

  $('div.inputs input[type="text"]').val('');

  $(document).on('focus', 'div.inputs input', function () {
    currentInput = this;
  });
  
  $('div.inputs input:first').focus();

  $(document).on('click', 'div.virtual-keyboard > span', function () {
    const virtualLetter = $(this).html();
    $(currentInput).val(virtualLetter);
    $(currentInput).next().focus();
    return false;
  });
});