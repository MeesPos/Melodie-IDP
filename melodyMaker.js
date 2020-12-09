
    //create a synth and connect it to the main output (your speakers)
    let synth = new Tone.Synth().toDestination();
    function playTone(note) {
        //play a middle 'C' for the duration of an 8th note
        console.log(note);
        synth.triggerAttackRelease(note, "8n");
        
    }