```customts
let played = false
basic.forever(function () {
    if (shakenFiveTimes && !(played)) {
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
```

```template
let shakenFiveTimes = false
```

# Day 15

## Introduction @showdialog

As long as Alfie displays a happy face, Alex will know that they can keep on going! 

## Step

You might have noticed that we have been using blue blocks ``||basic:on start||`` and ``||basic:forever||`` in quite a few missions.
It's time to talk a bit more about them.

## Step 2 @showhint

When we put stuff in ``||basic:on start||``, the blocks that are inside will be active only when you turn on Alfie and only once.

So the code below will show current temperature only once.

```blocks
basic.showNumber(input.temperature())
```

## Step 3 @showhint

On the other hand, if we put stuff in ``||basic:forever||``, the blocks that are inside will be active...well, as the name suggests...forever. Or at least all the time that Alfie is turned on.

Code below will be showing temperature (and updating it) all the time. Once ``||basic:show number||`` is completed, micro:bit will start over.

```block
basic.forever(function () {
    basic.showNumber(input.temperature())
})
```

## Step 4

``||basic:forever||`` is quite special because it is called a loop, because it loops over and over. micro:bit has other loops that we will talk about in different missions.

## Step 5

Now, let's get to work. Alfie is supposed to show sad face when it is too cold (under 25°C) - he gets cold very quickly. And anything above that is fine for him - happy face.

Use ``||basic:forever||``, ``||logic:if||`` and ``||input:temperature (°C)||``.

## Step 6

Are you stuck - here's a bit of help!

```block
basic.forever(function () {
    if (input.temperature() < 25) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
```


## Step 6

``|Download|`` the code and see if Alfie is good to go!