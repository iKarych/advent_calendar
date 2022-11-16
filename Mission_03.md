```template
for (let index = 0; index < 2; index++) {
    music.playTone(494, music.beat(BeatFraction.Whole))
}
```

# Day 3
```package
maqueen=github:dfrobot/pxt-maqueen
```

## Introduction @showdialog

Are you a STEM-elf or a Composer-elf? Perhaps both?

## Step 1

First, you should see ``||basic:on start||`` block - whatever you put in this block, micro:bit will do when Rotoy wakes up.

## Step 2

Inside ``||basic:on start||`` block is ``||music:play tone Middle B for 1 beat||``. That means that Rotoy will play music note B for 1 beat.

## Step 3

There is also this green ``||loops:repeat [2] times||`` block that helps us play the song more than one time, but we will talk about later in a different mission.

## Step 4 @showhint

Do you remember that you have the music sheet from yesterday. Use it to code the Christmas song! To add more notes, open Music category and drag another ``||music:play tone||``

```blocks
music.playTone(494, music.beat(BeatFraction.Whole))
music.playTone(494, music.beat(BeatFraction.Whole))
```

## Step 6

Once you are ready to test, click ``|Download|`` to move your code to micro:bit!