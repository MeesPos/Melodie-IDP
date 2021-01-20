function loadStart() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("page-content").innerHTML = this.responseText;

            $(".myLoader").fakeLoader({
                timeToHide: 10000,
                bgColor: "#222222",
                spinner: "spinner6",
                zIndex: "999"
            });
        };
    }
    xhttp.open("GET", "startPage.html", true);
    xhttp.send();
}

function loadStartClone() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("page-content").innerHTML = this.responseText;
        };
    }
    xhttp.open("GET", "startPage2.html", true);
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

function loadArtist() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("page-content").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "artiest.html", true);
    xhttp.send();

    initCarousel();

}

function initCarousel() {
    setTimeout(function () {
        const prevIcon = '<img src="/img/arrows/left.png">';
        const nextIcon = '<img src="/img/arrows/right.png">';

        $('.owl-carousel').owlCarousel({
            loop: true,
            nav: true,
            navText: [
                prevIcon,
                nextIcon
            ],
            autoplay: true,
            autoplayTimeout: 5000,
            center: true,
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

        $('.owl-carousel').on('translate.owl.carousel', function (e) {
            idx = e.item.index;
            $('.owl-item.right').removeClass('right');
            $('.owl-item').eq(idx + 1).addClass('right');
            $('.owl-item.left').removeClass('left');
            $('.owl-item').eq(idx - 1).addClass('left');
        })
    }, 100);
}

function loadVirtualRoom() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("page-content").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "virtualroom.html", true);
    xhttp.send();
}