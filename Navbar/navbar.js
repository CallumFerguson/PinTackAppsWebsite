//from https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var loginText = "Login";
if(getCookie("username") != "")
{
    loginText = "Logout"
}

var page = parseInt(document.currentScript.getAttribute("page"));

var navbarHtml = `
<ul id="navbar" class="clearfix">
    <li><a href="/">Home</a></li>
    <li><a href="/overkilldrill">Overkill Drill</a></li>
    <li><a href="/piperacer">Pipe Racer</a></li>
    <li><a href="/physics">Physics</a></li>
    <li><a href="/autothesaurus">Auto Thesaurus</a></li>
    <li><a href="/login/login.php">` + loginText +`</a></li>
</ul>
`

document.write(navbarHtml);

$(function() {
    //set active navbar tab using page variable passed in at the script tag
    if(page != -1)
        $("#navbar").find("a")[page].classList.add("active");   
});