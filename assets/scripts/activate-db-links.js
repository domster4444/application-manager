// Add active class to the current button (highlight it)
var header = document.getElementsByClassName("dbLink-container")[0];
var btns = header.getElementsByClassName("dbLink");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("dbLink--active");
    current[0].className = current[0].className.replace(" dbLink--active", "");
    this.className += " dbLink--active";
  });
}
