
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Advent {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }

    //% block
    export function makeRandomBackground() {
        basic.showNumber(2)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function play(playChristmasSong: boolean) {
        while (index <= listTone.length - 1) {
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

    // Whole = 1, Half = 2, Quarter = 4, Eighth = 8, Sixteenth = 16, Double = 32, Breve = 64
    let listBeat = [
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
    let listTone = [
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
    let index = 0

}
