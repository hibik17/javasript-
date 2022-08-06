window.onload = function () {
  var address, ccAddress, subject, body, hiddenData;
  var sendmail = document.getElementById("mail");

  sendmail.onclick = function () {
    Data = document.getElementById("data").value;
    address = "sample@co.jp";
    ccAddress = "somebody@co.jp";
    subject = "件名";
    body = "問い合わせ内容" + "%0D%0A" + Data;

    location.href =
      "mailto:" +
      address +
      "?cc=" +
      ccAddress +
      "&subject=" +
      subject +
      "&body=" +
      body;
  };
};
