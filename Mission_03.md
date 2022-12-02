```template
for (let index = 0; index < 2; index++) {
    music.playTone(494, music.beat(BeatFraction.Whole))
}
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Day 3

## Introduction @showdialog

Are you a STEM-elf or a Composer-elf? Perhaps both? Now that you know how to read music notes, you can program them so Alfie can sing it!

## Step 1

First, you should see ``||basic:on start||`` block - whatever you put in this block, micro:bit (this is Alfie's brain) will do when Alfie wakes up.

## Step 2

Inside ``||basic:on start||`` block is ``||music:play tone Middle B for 1 beat||``. That means that Rotoy will play music note B for 1 beat.

## Step 3

There is also this green ``||loops:repeat [2] times||`` block that helps you play the song more than one time, but we will talk about that later in a different mission.

## Step 4 @showhint

Now, it's time to use your skills to program music notes and create Christmas song! To add more notes, open Music category and drag another ``||music:play tone||``

Hit next.

![Agent building a tower](https://raw.githubusercontent.com/iKarych/advent_calendar/master/docs/static/jingle_bells_1.jpg)



```block
music.playTone(494, music.beat(BeatFraction.Whole))
music.playTone(494, music.beat(BeatFraction.Whole))
```

## Step 6

Once you are ready to test, click ``|Download|`` to move your code to micro:bit!