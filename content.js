window.onload = function () {
    const body = document.body;
    const sshot = `<a href="" id="sshot" download="html_sshot.png"></a>`;
    body.insertAdjacentHTML("beforeend", sshot);
    html2canvas(document.body).then(function (canvas) {
        var imgData = canvas.toDataURL();
        document.getElementById("sshot").href = imgData;
        var img = document.getElementById("sshot");
        img.click();
    });
}