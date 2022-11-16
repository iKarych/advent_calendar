# Mission3
```package
maqueen=github:dfrobot/pxt-maqueen
```

## Introduction @unplugged

Hey there! Follow these steps to make Rotoy play music

## Step 1

Inside ``||basic:on start||`` block, place ``||music:play tone||`` block.

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