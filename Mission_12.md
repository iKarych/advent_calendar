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
    } else {
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

# Day 12

## Introduction @showdialog

SHAKE 5 times

## Step 1

Ok, so there's this gift showing up on micro:bit - you can see it when you click play on the left. But it's closed...

## Step 2

Alex said that shaking Alfie 5 times might open it! Use your knowledge from before and create a counter variable - ``||variables:shakenNumber||``!
Put it in our shake block, and display it on micro:bit as before.

## Step 3 @showhint

Now, we need to add some logic - add ``||logic:if||`` block. So this block checks if what you wrote next to is true or not. If it is true, then it goes to blocks that are inside, and if it is false, it goes to ``||logic:else||`` blocks.

Check out the hint! If ``||variables:shakenNumber||`` is 5, then smile. If it's any other number than 5 (for example, 0, 1, 2, 6, 8...), make a sad face.

```block
if (shakenNumber == 5) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
```

## Step 4

Ok, so now that you know how to use ``||logic:if||``, add it to our shake block. And use a different variable that micro:bit already created for you -  ``||variables:shakenFiveTimes||``.
Set this variable to ``||logic:true||`` if ``||variables:shakenNumber||`` is 5, otherwise change it to ``||logic:false||``.

## Step 5

Here's hint if you need it!

```blocks
let shakenNumber = 0
let shakenFiveTimes = false
input.onGesture(Gesture.Shake, function () {
    shakenNumber += 1
    basic.showNumber(shakenNumber)
    if (shakenNumber == 5) {
        shakenFiveTimes = true
    } else {
        shakenFiveTimes = false
    }
})
```

## Step 6

``|Download|`` the code and open the box!