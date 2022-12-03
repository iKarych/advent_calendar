```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Day 17

## Introduction @showdialog

Every time you clap (klapper med hænderne), Alfie will know to do his spinning attack! 

## Step 1

To listen to enemies, we need to use Alfie's microphone. So, we need to do two things.

## Step 2

First, we need to configure Alfie's microphone using ``||input:set loud threshold to []||``. It's hidden ``||input:Input||`` ``||input:more||``.
Let's just set it to 128 (that's a value in the middle, so you can lower it if Alfie doesn't react to sounds, or increase it if Alfie reacts too often.)

```blocks
input.setSoundThreshold(SoundThreshold.Loud, 128)
```

## Step 3

The second part is very similar as using buttons or gestures. With ``||input:on loud sound||`` block, you can tell Alfie what to do when a loud sound is detected.

## Step 4

micro:bit saved your spinning mission from yesterday and placed it in this small function ``||Mission17:spin||``.

```ghost
input.onSound(DetectedSound.Loud, function () {
    Mission17.spin()   
})
```

## Step 5

Assemble the code and try it out. ``|Download|`` it and return to the chapter!