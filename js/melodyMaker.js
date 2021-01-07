//create a synth and connect it to the main output (your speakers)
let synth = new Tone.Synth().toDestination();

function playTone(note) {
    //play a middle 'C' for the duration of an 8th note
    console.log(note);
    synth.triggerAttackRelease(note, "8n");
    tijdlijn.voegToonToe(note);
    document.getElementById('timelijn').innerHTML += `<div class="tone ${note}"></div>`
}

/**
 * Stappenplan Tijdlijn
 * - Bij toevoeging van noot, stop noot in array plus verhoog de tijdlijn-tijd met een halve seconde (1/8 note)
 */
let tijdlijn = {
    duratie: 0,
    alleTonen: [],

    voegToonToe(toon) {
        this.duratie += 0.5;
        this.alleTonen.push(toon);
        this.refreshPage();
    },

    refreshPage() {
        document.getElementById('duratie').innerHTML = this.duratie + ' seconde(n)';
    },

    play() {
        time = 0
        let jonguh = 0;
        new Tone.Sequence((time, note) => {
            console.log(time)
            synth.triggerAttackRelease(note, .25, time);
            console.log(time, note);
        }, this.alleTonen, '4n').start(0);
        Tone.Transport.start();
        setInterval(() => { Tone.Transport.stop() }, this.alleTonen.length * 1000 * .5 - 100);
    },
}

function animatethis(targetElement, speed) {
    var scrollWidth = $(targetElement).get(0).scrollWidth;
    var clientWidth = $(targetElement).get(0).clientWidth;
    $(targetElement).animate({ scrollLeft: scrollWidth - clientWidth },
    {
        duration: speed,
        complete: function () {
            targetElement.animate({ scrollLeft: 0 },
            {
                duration: speed,
                complete: function () {
                    animatethis(targetElement, speed);
                }
            });
        }
    });
};
animatethis($('#timelijn'), 5000);