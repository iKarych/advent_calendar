
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

/**
 * Custom blocks
 */
//% weight=100 color=#3958D3 icon="\uf06b"
namespace Mission6 {
    export let index: number
    export let listTone: number[]
    export let listBeat: number[]
    export let led3: neopixel.Strip = null
    export let led2: neopixel.Strip = null
    export let led1: neopixel.Strip = null
    export let led0: neopixel.Strip = null
    export let strip: neopixel.Strip = null

    //% weight=90
    //% block="dance"
    export function Dance() {
        if (Math.randomBoolean()) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
        }
        if (index == listTone.length - 1) {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }

    //% weight=90
    //% block="play christmas song"
    export function ChristmasSong() {
        music.playTone(listTone[index], listBeat[index])
    }

    //% weight=90
    //% block="flash lights"
    export function Flash() {
        if (Math.randomBoolean()) {
            led0.showColor(neopixel.colors(NeoPixelColors.Red))
            led2.showColor(neopixel.colors(NeoPixelColors.Red))
            led1.showColor(neopixel.colors(NeoPixelColors.Green))
            led3.showColor(neopixel.colors(NeoPixelColors.Green))
        } else {
            led1.showColor(neopixel.colors(NeoPixelColors.Red))
            led3.showColor(neopixel.colors(NeoPixelColors.Red))
            led0.showColor(neopixel.colors(NeoPixelColors.Green))
            led2.showColor(neopixel.colors(NeoPixelColors.Green))
        }
        if (index == listTone.length - 1) {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }

}


/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Mission5 {
    export let index: number
    export let listTone: number[]
    export let listBeat: number[]

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function play(playChristmasSong: boolean) {
        if (index != null) {
            while (index < listTone.length) {
                if (playChristmasSong == true) {
                    music.playTone(listTone[index], listBeat[index])
                } else if (playChristmasSong == false) {
                    break;
                }
                index += 1
                if (index == listTone.length - 1) {
                    index = 0
                }
            }
        }
    }

}
