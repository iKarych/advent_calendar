
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
    let playChristmasSong: boolean
    let index: number
    let listTone: number[]
    let listBeat: number[]
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
    export function play() {
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
