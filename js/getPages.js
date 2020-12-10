function loadStart() {

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("page-content").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "startPage.html", true);
    xhttp.send();
}
function loadMelodyMaker() {

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("page-content").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "melodyMaker.html", true);
    xhttp.send();
}