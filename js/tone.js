import * as Tone from 'tone'

document.querySelector('button')?.addEventListener('click', async () => {
    await Tone.start()
    console.log('audio is ready')

    const synth = new Tone.Synth().toDestination();
    const now = Tone.now()
    // trigger the attack immediately
    synth.triggerAttack("C4", now)
    // wait one second before triggering the release
    synth.triggerRelease(now + 1)
})