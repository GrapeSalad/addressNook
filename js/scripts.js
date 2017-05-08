function Contact(first,last,address) {
  this.firstName = first;
  this.lastName = last;
  this.address = address;

};

$(document).ready(function() {
   $("form#new-contact").submit(function(event) {
     event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();


    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAddress);

    $("ul#contacts").append("<li><span class ='contact'>" + newContact.firstName + "</span></li>");
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);
  });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");
  });
});
