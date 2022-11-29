```customts
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
function ChristmasSongBeat () {
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
```

```template
let playChristmasSong = false
function ChristmasSong () {
ChristmasSongBeat()
}
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Day 4

## Introduction @showdialog

Are you ready, elf? Time to program Alfie's buttons! 

## Step 1

Alfie has 2 main buttons - A and B. You can find them in the purple category ``||input:Input||``.

## Step 2

Put 2 purple buttons (1 for button A and 1 for button B) in the workspace. You can check how it should look in the hint!

```blocks
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
```

## Step 3 @showhint

Great! Do you remember yesterday's Christmas song? micro:bit was smart and placed it this blue block ``||functions:function ChristmasSong||`` (and added some more music notes). So now, anytime you use this blue block Christmas song will play! Awesome, right?

```blocks
function ChristmasSong() {
ChristmasSongBeat()}
```

## Step 4 @showhint

We also need to figure out how to pause the song. For that, we will use this red block ``||variables:playChristmasSong||`` - this is called a variable. We will talk about more in a different mission, but what you need to know right now is that it can hold information if Alfie should play the song or not.

If we want to tell Alfie to play a song, we need to tell micro:bit that ``||variables:playChristmasSong||`` is ``||logic:true||``,
and when we want to stop it, we must say that ``||variables:playChristmasSong||`` is ``||logic:false||``.

Check out the hint!

```block
playChristmasSong = true
playChristmasSong = false
```

## Step 5

It's time to put it together!

Alfie should play the song when you press button A and should pause it when you press button B.

Do you know how to do it? Try to do it yourself, and if you need help, go to the next step :)

## Step 6

To start the song with button A, we need to put in ``||input:on button A pressed||`` block 2 things: first, tell Alfie to start playing Christmas song (``||variables:set playChristmasSong||`` to ``||logic:true||``) and show which song is Christmas song (``||functions:call ChristmasSong||`` - you need to click Advanced first).

```block
input.onButtonPressed(Button.A, function () {
 playChristmasSong = true
 ChristmasSong()
})
```

## Step 7

To pause the song with button B, we just need to tell Alfie to pause the song (``||variables:set playChristmasSong||`` to ``||logic:false||``) when ``||input:on button B pressed||``.

```blocks
input.onButtonPressed(Button.B, function () {
 playChristmasSong = false
})
```

## Step 8

That's all! Test your code with Alfie - hit ``|Download|`` and move it to the micro:bit!