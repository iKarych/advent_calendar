# Day 9

## Introduction @showdialog

Shake Alfie out of hypnosis!

## Step 1

To help Alfie, we need to wake him up! How else to do that if not by gentling shaking him?

There's a new block in your toolbox - check it out!

## Step 2

Can you figure out how to use it? Try to make Alfie make a sound when shaken!

## Step 3

Here's a hint if you need some help!

```block
input.onGesture(Gesture.Shake, function () {
})
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
```

## Step 4

Great! ``|Download|`` the code and wake up Alfie!