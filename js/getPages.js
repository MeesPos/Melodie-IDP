function loadStart() {

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("page-content").innerHTML = this.responseText;
            
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
    setTimeout(function(){
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
        }, 100);
        setTimeout(function(){
          pakKaarten();   
        }, 150)
         
        
}
/**
 * Stappenplan, middelste active grootste maken
 * - Onchange event listener op elke kaart zetten
 * - Onchange activeert functie die alle active kaarten pakt
 * - Zet alle active kaartjes in een array
 * - Pak de middelste in het array en geef een css class
*/
let activeCards = [];

function getActiveCarouselCards(){
    activeCards = [];
    document.querySelectorAll('.owl-item.active').forEach(activeCard => {
        activeCards.push(activeCard);
    });
}

function pakKaarten() {
    document.querySelectorAll('.owl-item.active').forEach(card => {
        console.log('ik kom hier');
        card.addEventListener('onchange', getActiveCarouselCards());
    });    
}



