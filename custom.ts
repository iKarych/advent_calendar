
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Mission4 {
    export let index: number
    export let listTone: number[]
    export let listBeat: number[]

    //% weight=90
    //% block="play christmas song | %play"
    //% play.defl=false
    export function ChristmasSong(play: boolean) {
        if (index != null)
        {
            while (index < listTone.length) {
                if (play == true) {
                    music.playTone(listTone[index], listBeat[index])
                } else if (play == false) {
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
