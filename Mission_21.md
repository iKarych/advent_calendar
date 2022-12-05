```template
function goStraight () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(1000)
}
function goRight () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
    basic.pause(170)
}
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Day 21

## Introduction @showdialog

Program Alfie to dance around the wooden tree from the box!

## Step 1

So now you know how to move Alfie! Let's complicate things again!

## Step 2

micro:bit has already prepared for you functions ``||Functions:goRight||`` and ``||Functions:goStraight||``.
Try to make a program (use  ``||Functions:call||``) that will make Alfie do a square around a Christmas tree. For that you might need to change ``||Basic:pause (ms) []||``:
- in ``||Functions:goRight||`` to make a 90° left turn,
- in ``||Functions:goStraight||`` to set the length of going straight, take a tape measure and try to set that Alfie goes 10 cm.

Remember to stop motors at the end - ``||maqueen:motor [all] stop||``.

Play and experiment until you have a nice square path around a Christmas tree. ``|Download|`` your code!

## Step 3

Have you noticed something? You needed to use ``||Functions:call goRight||`` and ``||Functions:call goStraight ||`` 4 times. Do you think we can reduce it? Go next to find out!

## Step 4

Let's introduce something new, we talked already about ``||Basic:forever||`` loop. Do you remember? It would repeat inserted code... forever! But what if we want to repeat something for less than forever, like... for four times. Well, there is a handy block for that - ``||Loops:repeat [] times||``.

## Step 6

Place ``||Loops:repeat [] times||`` and put "4" inside. Now can you figure out what code do you need to put there to make a square path around a Christmas tree?

Remember to stop motors at the end - ``||maqueen:motor [all] stop||``.

## Step 7

Here's some hint if you need it!

```blocks
function goStraight () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(1000)
}
function goRight () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
    basic.pause(170)
}
for (let index = 0; index < 4; index++) {
    goStraight()
    goRight()
}
maqueen.motorStop(maqueen.Motors.All)
```

## Step 8

You're done for today! Woohoo! ``|Download|`` and transfer the code to micro:bit! And return to the chapter!