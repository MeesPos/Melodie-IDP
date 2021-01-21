//create a synth and connect it to the main output (your speakers)
let synth = new Tone.Synth().toDestination();
let toonIDcount = 0;
function playTone(note) {
    // Play the given tone for the duration of an 8th note
    synth.triggerAttackRelease(note, "8n");

    // Add tone to allTone array in tijdlijn object
    tijdlijn.voegToonToe(note, toonIDcount);

    // Generate HTML to set in timeline
    document.getElementById('timelijn').innerHTML += `<div class="tone ${note}" onclick="tijdlijn.deleteTone(${toonIDcount})" id="tone${toonIDcount}" ></div>`;

    // Generate ID on amount of notes added
    toonIDcount += 1;
}
/**
 * Stappenplan Tijdlijn
 * - Bij toevoeging van noot, stop noot in array plus verhoog de tijdlijn-tijd met een halve seconde (1/8 note)
 */
let tijdlijn = {
    duratie: 0,
    toonOpslag: [],
    index: 0,
    initialized: false, // whether or not we have run the initialize code yet.

    voegToonToe(toon, toonID) {
        if (this.duratie < 60) {
            // Als duratie minder dan of gelijk is aan 60 sec
            // Per toon, melodie duratie plus halve seconde
            this.duratie += 0.5;
            this.toonOpslag.push({id: toonID, tone: toon})
            this.refreshPage();
        } else {
            alert('Maximale lengte bereikt.')
        }
        
    },
    
    deleteTone(toDeleteID) {
        // Removes the note from the timeline from DOM
        let element = document.getElementById("tone" + toDeleteID);
        element.parentNode.removeChild(element);

        // Removes note from array
        // we have an array of objects, we want to remove one object using only the id property
        // get index of object with id toDeleteID
        let removeIndex = this.toonOpslag.map(function(toonObject) { return toonObject.id; }).indexOf(toDeleteID);

        // remove object
        this.toonOpslag.splice(removeIndex, 1);
    },

    refreshPage() {
        document.getElementById('duratie').innerHTML = this.duratie + ' s';    
    },

    play() {
        // if we havent initialized, call initialize
        if (!this.initialized) this.initialize();
        Tone.Transport.start();
        
        this.setButtonActive();
      },
    initialize() {
        this.initialized = true; // set this to true so that line 17 doesnt call this again.
        Tone.start(); // the console was saying this needs to be called on a user action (like "click")
        // you only want this part happening once. it was happening on every click.
        Tone.Transport.scheduleRepeat((time) => {
            this.playReal(time);
        }, "8n");
        this.setButtonActive();
        
    },


    playReal(time) {
        // Make array with all tones to play
        let alleTonen = this.toonOpslag.map((a) => a.tone);

        if(this.index == alleTonen.length) {
            this.stop();
            this.index = 0;
        } else {
           let noteToPlay = alleTonen[this.index]; 
           synth.triggerAttackRelease(noteToPlay, '8n', time);
           this.index++;
        }
    },

    setButtonActive() {
        // Change playbutton
        document.getElementById('button').classList.remove('fas');
        document.getElementById('button').classList.remove('fa-play');
        document.getElementById('button').classList.add('far');
        document.getElementById('button').classList.add('fa-square');
        document.getElementById('button').removeAttribute('onclick', 'tijdlijn.play()');
        document.getElementById('button').setAttribute('onclick', 'tijdlijn.stop()');
    },
    stop() {
        // Stop music mid playing
        Tone.Transport.stop();

        // Change playbutton
        document.getElementById('button').classList.remove('far');
        document.getElementById('button').classList.remove('fa-square');
        document.getElementById('button').classList.add('fas');
        document.getElementById('button').classList.add('fa-play');
        document.getElementById('button').removeAttribute('onclick', 'tijdlijn.stop()');
        document.getElementById('button').setAttribute('onclick', 'tijdlijn.play()');

    }
}
