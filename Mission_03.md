```template
for (let index = 0; index < 2; index++) {
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(587, music.beat(BeatFraction.Double))
}
```

# Mission3
```package
maqueen=github:dfrobot/pxt-maqueen
```

## Introduction @showdialog

Are you a STEM-elf or a Composer-elf? Perhaps both?

## Step 1

First, you should see ``||basic:on start||`` block - whatever you put in this block, micro:bit will do when Rotoy wakes up.

## Step 2

Next, find Music category and search for ``||music:play tone||`` block. Drag it and place it inside ``||basic:on start||`` block.

## Step 2 @showhint

Use music sheet from the instructions to correctly assign the music note.

```blocks
music.playTone(494, music.beat(BeatFraction.Whole))
```

## Step 3

Create the entire song by adding more ``||music:play tone||`` blocks.

```blocks
music.playTone(494, music.beat(BeatFraction.Whole))
music.playTone(659, music.beat(BeatFraction.Whole))
```

## Step 4

Click ``|Download|`` to transfer your code to micro:bit!