function openPopup() {
    $("#popup").css("display", "block");
}

function closePopup() {
    $("#popup").css("display", "none");
    
    //from https://stackoverflow.com/questions/15164942/stop-embedded-youtube-iframe
    $("#popup > iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
}