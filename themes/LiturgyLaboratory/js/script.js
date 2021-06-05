function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("mobNav");
  if (x.style.display === "block") {
    x.style.display = "none";
    var icon = document.getElementById("mobNavIcon");
    icon.innerHTML = "&#43; Menu"
  } else {
    x.style.display = "block";
    var icon = document.getElementById("mobNavIcon");
    icon.innerHTML = "&#215; Menu"
  }
}

window.addEventListener('resize', function(event) {
    if (window.innerWidth > 720) {
      var x = document.getElementById("mobNav");
      x.style.display = "none";
      var icon = document.getElementById("mobNavIcon");
      icon.innerHTML = "&#43; Menu"
    }
});
