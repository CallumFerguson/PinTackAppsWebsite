var page = parseInt(document.currentScript.getAttribute("page"));

function prefixPath(path) {
    const isHomePage = page === 0;
    if (isHomePage) {
        return "./" + path;
    } else {
        return "../" + path;
    }
}

var navbarHtml = `
<ul id="navbar" class="clearfix">
    <li><a href="${page === 0 ? "" : prefixPath("")}">Home</a></li>
    <li><a href="${page === 1 ? "" : prefixPath("overkilldrill")}">Overkill Drill</a></li>
    <li><a href="${page === 2 ? "" : prefixPath("piperacer")}">Pipe Racer</a></li>
</ul>
`;

document.write(navbarHtml);

$(function() {
    if(page !== -1)
        $("#navbar").find("a")[page].classList.add("active");   
});