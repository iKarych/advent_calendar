```template
basic.forever(function () {
}
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Day 22

## Introduction @showdialog

Program Alfie's light sensor. Make sure Alfie's lights turn on every time it gets dark!

## Step 1

You read that right - light sensor. You might be wondering where is Alfie hiding a light sensor, and no, it's not the eyes!

Alfie's light sensor is actually the same as micro:bit's display - those small 25 LEDs can shine red light but can also detect light shone onto them.

## Step 2

With your knowledge using light sensor is super easy. All you need is ``||Input:light level||``, and it works just like a variable.

## Step 3

So let's start with checking how it works, display the value from the light sensor on the screen and see how it changes. ``|Download|`` your code and try going to the dark room and near the light bulb.

```ghost
basic.showNumber(input.lightLevel())
```

## Step 4

Have you noticed something? The sensor shows often 0, because it needs a lot of light to detect the source. So you actually don't need to be in complete darkness to complete this mission.

## Step 5

Let's then add some logic. Throw ``||Logic:if else||`` and add logic to it.

For example:
- if ``||Input:light level||`` is less than 10, turn on Alfie's lights. Alfie has lights that we have not played with yet, they're called ``||Maqueen:LEDlight [] turn []||``.
- else, turn the lights off

## Step 6

Here's some hint if you can't figure it out!

```ghost
if (10 > input.lightLevel()) {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
} else {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
}
```

## Step 8

``|Download|`` the code and test you solution! Come back to the chapter!