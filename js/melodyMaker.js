 //create a synth and connect it to the main output (your speakers)
let synth = new Tone.Synth().toDestination();
function playTone(note) {
    //play a middle 'C' for the duration of an 8th note
    console.log(note);
    synth.triggerAttackRelease(note, "32n");
    tijdlijn.voegToonToe(note);
}

/**
 * Stappenplan Tijdlijn
 * - Bij toevoeging van noot, stop noot in array plus verhoog de tijdlijn-tijd met een halve seconde (1/8 note)
 */

let tijdlijn = {
    duratie: 0,
    alleTonen: [],        
    

    voegToonToe(toon){
        this.duratie += 500;
        this.alleTonen.push(toon);
        this.refreshPage();
    },

    refreshPage(){
        let html = `<p>Tijdlijn dingen enzo</p>`;    
        document.getElementById('timelijn').innerHTML = html;
        document.getElementById('duratie').innerHTML = this.duratie + ' seconde(n)';
    },

    play(){
        let seq = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, 0.1, time);
            console.log(time, note)
        }, this.alleTonen, '8n' ).start(0);
        Tone.Transport.start();
        setInterval(()=>{Tone.Transport.stop()}, this.duratie)
    },

}




