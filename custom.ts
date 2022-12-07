
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
//% weight=100 color=#3958D3 icon="\uf06b"
namespace Mission11 {
    //% block="wake up at %shakenNumber"
    export function wakeUp(shakenNumber: number) {
        if (shakenNumber == 5) {
            basic.showIcon(IconNames.Happy)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
        }
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#3958D3 icon="\uf06b"
namespace Mission17 {
    //% block="spin"
    export function spin() {
        if (Math.randomBoolean()) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        }
        basic.pause(100 * randint(1, 10))
        maqueen.motorStop(maqueen.Motors.All)
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#3958D3 icon="\uf06b"
namespace Mission23 {
    export let led3: neopixel.Strip = null
    export let led2: neopixel.Strip = null
    export let led1: neopixel.Strip = null
    export let led0: neopixel.Strip = null
    export let strip: neopixel.Strip = null

    //% block="go straight for %time ms"
    export function goStraight(time: number) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(time)
    }

    //% block="go right for %time ms"
    export function goRight(time: number) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        basic.pause(time)
    }

    //% weight=90
    //% block="flash lights %on"
    export function Flash(on: boolean) {
        if (on)
        {
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
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        }
        else
        {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    }
}