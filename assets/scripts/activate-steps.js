// Add active class to the current button (highlight it)
var header = document.getElementsByClassName("status-container")[0];
var btns = header.getElementsByClassName("status");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("status--active");
    current[0].className = current[0].className.replace(" status--active", "");
    this.className += " status--active";
  });
}
