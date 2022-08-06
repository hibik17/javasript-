$("a.instagram").on("click", function () {
  var mail = "sampleInstagram";
  jQuery(".clip").select();
  document.execCommand("copy");
  alert(mail + " is copied");
});
