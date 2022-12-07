```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
neopixel=github:microsoft/pxt-neopixel#v0.7.3
```


# Day 24

## Introduction @showdialog

Let's show Santa your programming skills!

## Step 1

You've made Alfie dance around a small tree but not it's time to dance around a REAL Christmas tree.

## Step 2

Program Alfie to:
- make a square around your Christmas tree
- light up Alfie's lights when dancing

## Step 3

This time it's all you - no help from micro:bit. Program all Alfie's moves!
Remember to:
- create functions to go straight and turn right - check out Chapter 21 if you don't remember
- place the instruction in ``||Loops:repeat||`` loop (for example, 4 times),
- adjust the time Alfie needs to turn to make a 90° right turn,
- adjust the time Alfie needs to go straight, if your tree is big it might be around 1,5 m, so you need to test it
- stop the motors at the end

## Step 4

Flashing lights is also not so easy (check out Chapter 5 if you need some help), you need to:
- connect Alfie's lights to a variable
- change their color to green and red, you can for example change them everytime Rotoy turns
- turn them off at the end

## Step 5

Good luck! ``|Download|`` the code and come back to the chapter!

## Step 6

Are you still here? Did you manage to solve it?

## Step 7

Still not?

## Step 8

Alright, if you're really stuck, there's help for you! Proceed with caution!

## Step 9

```blocks
function goStraight () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(2000)
}
function goRight () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    basic.pause(300)
}
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
for (let index = 0; index < 4; index++) {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    goStraight()
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    goRight()
}
strip.showColor(neopixel.colors(NeoPixelColors.Black))
maqueen.motorStop(maqueen.Motors.All)
```
