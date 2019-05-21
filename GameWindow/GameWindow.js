var ar = parseInt(document.currentScript.getAttribute("aspectRatio"));
var by = parseInt(document.currentScript.getAttribute("by"));
var aspectRatio = ar / by;

$(function() {
    maintainAspectRatio();
});

$(window).resize(function() {
    maintainAspectRatio();
});

//although all of this code is my own, I was attempting to copy the way youtube shows videos in theater mode
function maintainAspectRatio()
{
    const minHeight = 480;
    
    var gameWindow = document.querySelector("#gameWindowContainer > div:first-of-type");
    var container = document.getElementById("gameWindowContainer");
    if(gameWindow == null || container == null)
        return;
    
    var containerHeight = document.body.offsetHeight * 0.8;
    var containerWidth = document.body.offsetWidth;
    
    if(containerHeight < minHeight)
        containerHeight = minHeight;
    
    var height = containerHeight;
    var width = aspectRatio * height;
    
    var topMargin = 0;
    var leftMargin = 0;
    
    if(width > document.body.offsetWidth)
    {
        width = containerWidth;
        height = (1 / aspectRatio) * width;
        
        if(height >= minHeight)
        {
            containerHeight = height;
            topMargin = 0;
        }
        else
        {
            containerHeight = minHeight;
            topMargin = (containerHeight - height) / 2;
        }
    }
    else if(width < document.body.offsetWidth)
    {
        leftMargin = (containerWidth - width) / 2;
    }
    
    gameWindow.style.height = height + "px";
    gameWindow.style.width = width + "px";
    gameWindow.style.marginTop = topMargin + "px";
    gameWindow.style.marginLeft = leftMargin + "px";
    container.style.height = containerHeight + "px";
}