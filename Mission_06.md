```customts
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
Mission6.led0 = strip.range(0, 1)
Mission6.led1 = strip.range(1, 1)
Mission6.led2 = strip.range(2, 1)
Mission6.led3 = strip.range(3, 1)
function mainFunction () {
    while (index < listTone.length) {
        DistractStorageElf()
        index += 1
    }
}
input.onButtonPressed(Button.A, function () {
    mainFunction()
})
```

```template
function DistractStorageElf () {
}
```

```package
maqueen=github:dfrobot/pxt-maqueen
neopixel=github:microsoft/pxt-neopixel#v0.7.3
```

# Day 6

## Introduction @showdialog

Distracting Storage-Elf

## Step 1

To distract Storage-Elf, you must use all the skills that you have learnt so far! But don't worry micro:bit remembers everything, so it won't be hard!

## Step 2

Let's start with a function. Function is a neat blue block ``||functions:function DistractStorageElf||`` where you can put other blocks and just run, so all the blocks run together! Clever, huh?

There is already a function for you in the workspace.

```block
function DistractStorageElf () {
}
```

## Step 3

micro:bit has placed all the things that you have learnt so far in this new blue block ``||Mission6:Mission 6||``. Open it and place ``||Mission6:play christmas song||``, ``||Mission6:dance||`` and ``||Mission6:flash lights||`` in your new function.

## Step 4

If you are not sure how to do it, here's a hint

```block
function DistractStorageElf () {
    Mission6.ChristmasSong()
    Mission6.Dance()
    Mission6.Flash()
}
```

## Step 5

``|Download|`` when you are ready, and click button A to distract the elf!!!