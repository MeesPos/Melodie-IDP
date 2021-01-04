function loadStart() {

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("page-content").innerHTML = this.responseText;
            $('.owl-carousel').owlCarousel({
                loop: true,
                nav: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                items: 3,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    },
                }
            });
        };
    }
    xhttp.open("GET", "startPage.html", true);
    xhttp.send();
}

function loadMelodyMaker() {

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("page-content").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "melodyMaker.html", true);
    xhttp.send();
}