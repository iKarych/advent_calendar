Mission6.listBeat = [
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Half),
    music.beat(BeatFraction.Half),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Whole),
    music.beat(BeatFraction.Double),
    music.beat(BeatFraction.Double)
]
Mission6.listTone = [
    294,
    494,
    440,
    392,
    294,
    294,
    294,
    294,
    494,
    440,
    392,
    330,
    330,
    523,
    494,
    440,
    370,
    587,
    587,
    523,
    440,
    494,
    294,
    494,
    440,
    392,
    294,
    294,
    494,
    440,
    392,
    330,
    330,
    330,
    523,
    494,
    440,
    587,
    587,
    587,
    587,
    659,
    587,
    523,
    440,
    392,
    494,
    494,
    494,
    494,
    494,
    494,
    494,
    587,
    392,
    440,
    494,
    523,
    523,
    523,
    523,
    523,
    494,
    494,
    494,
    494,
    494,
    440,
    440,
    494,
    440,
    587,
    494,
    494,
    494,
    494,
    494,
    494,
    494,
    587,
    392,
    440,
    494,
    523,
    523,
    523,
    523,
    523,
    494,
    494,
    494,
    494,
    494,
    440,
    440,
    494,
    440,
    587
]
Mission6.index = 0
Mission6.strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
Mission6.led0 = Mission6.strip.range(0, 1)
Mission6.led1 = Mission6.strip.range(1, 1)
Mission6.led2 = Mission6.strip.range(2, 1)
Mission6.led3 = Mission6.strip.range(3, 1)
function mainFunction() {
    while (Mission6.index < Mission6.listTone.length) {
        DistractStorageElf()
        Mission6.index += 1
    }
}
input.onButtonPressed(Button.A, function () {
    mainFunction()
})
function DistractStorageElf() {
    Mission6.ChristmasSong()
    Mission6.Flash()
}
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)