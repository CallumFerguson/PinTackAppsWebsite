var page = parseInt(document.currentScript.getAttribute("page"));

var navbarHtml = `
<ul id="navbar" class="clearfix">
    <li><a href="/">Home</a></li>
    <li><a href="/overkilldrill">Overkill Drill</a></li>
    <li><a href="/piperacer">Pipe Racer</a></li>
</ul>
`

document.write(navbarHtml);

$(function() {
    if(page != -1)
        $("#navbar").find("a")[page].classList.add("active");   
});