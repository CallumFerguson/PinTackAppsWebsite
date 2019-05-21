function openPopup() {
    $("#popup").css("display", "block");
}

function closePopup() {
    $("#popup").css("display", "none");
    $("#popup > iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
}