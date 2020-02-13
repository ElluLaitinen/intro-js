var HOURHAND = document.querySelector("#hour");
var MINUTEHAND = document.querySelector("#minute");
var SECONDHAND = document.querySelector("#second");

function moveArms() {
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var secPosition = (sec * 360) / 60;
  var minPosition = (min * 360) / 60 + (sec * 360) / 60 / 60;
  var hrPosition = (hr * 360) / 12 + (min * 360) / 60 / 12;

  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
}

setInterval(moveArms, 1000);

$(function() {
  var $select = $(".00-59");
  for (i = 00; i <= 59; i++) {
    $select.append(
      $("<option></option>")
        .val(i)
        .html(i)
    );
  }
});
$(function() {
  var $select = $(".00-24");
  for (i = 00; i <= 24; i++) {
    $select.append(
      $("<option></option>")
        .val(i)
        .html(i)
    );
  }
});
