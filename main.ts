input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.LoopingInBackground)
    while (timer > 0) {
        timer += -1
        basic.showNumber(timer)
        basic.pause(1000)
    }
    music.stopAllSounds()
    basic.showIcon(IconNames.Skull)
    for (let index = 0; index < 16; index++) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        basic.pause(100)
    }
})
let timer = 0
basic.showIcon(IconNames.Heart)
