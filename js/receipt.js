$(document).ready(function() {
  $("form#info").submit(function(event) {
    event.preventDefault();
    var priceInput = $("input#price").val();
    var itemInput = $("input#item").val();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var nameInput = $("input#name").val();
    var recipientInput = $("input#recipient").val();


    $(".price").text(priceInput);
    $(".item").text(itemInput);
    $(".name").text(nameInput);
    $(".address").text(addressInput);

    $("#letter").show();

    event.preventDefault();
  });
});
