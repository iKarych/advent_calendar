input.onGesture(Gesture.Shake, function () {
    shakenNumber += 1
    if (shakenNumber == 5 && !(played)) {
        basic.showLeds(`
            . . . . .
            # . . . #
            . # . # .
            . # # # .
            . # # # .
            `)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        played = true
    } else if (!(played)) {
        basic.showLeds(`
            . # . # .
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
let shakenNumber = 0
let played = false
played = false