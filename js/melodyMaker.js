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
        document.getElementById('duratie').innerHTML = this.duratie + ' s';    
    },

    play() {
        new Tone.Sequence((time, note) => {
            console.log(time)
            synth.triggerAttackRelease(note, .25, time);
            console.log(time, note);
        }, this.alleTonen, '4n').start(0);
        Tone.Transport.start();
        setInterval(() => { tijdlijn.stop() }, this.alleTonen.length * 1000 * .5 - 100);
        document.getElementById('button').classList.remove('fas');
        document.getElementById('button').classList.remove('fa-play');
        document.getElementById('button').classList.add('far');
        document.getElementById('button').classList.add('fa-square');
        document.getElementById('button').removeAttribute('onclick', 'tijdlijn.play()');
        document.getElementById('button').setAttribute('onclick', 'tijdlijn.stop()');
    },

    stop() {
        Tone.Transport.stop();
        document.getElementById('button').classList.remove('far');
        document.getElementById('button').classList.remove('fa-square');
        document.getElementById('button').classList.add('fas');
        document.getElementById('button').classList.add('fa-play');
        document.getElementById('button').removeAttribute('onclick', 'tijdlijn.stop()');
        document.getElementById('button').setAttribute('onclick', 'tijdlijn.play()');

    }
}
