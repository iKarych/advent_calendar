```template
input.onButtonPressed(Button.A, function () {}
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Day 16

## Introduction @showdialog

Time to learn how to make Alfie spin!

## Step 1

Do you remember the mission where you had to make Alfie move chaotically? Well, you will learn more how to control Alfie!

## Step 2

Alfie has 2 wheels and also 2 motors (left and right). Each wheel is controlled separately so we need to know how to turn them on.
All the necessary blocks are in ``||maqueen:Maqueen||`` tab in your toolbox (Maqueen is the name of the board that Alfie is built from).

## Step 3 @showhint

To move one of the wheels you need to turn them on, use ``||maqueen:motor [] move [] at speed []||``.
For example, we can set both wheels (``||maqueen:all||``) to move forward (``||maqueen:Forward||``), so that Alfie goes straight. We also need to say how fast the wheels should sping, with 0 being stopped and 255 going really fast!

Check out this block - it makes Alfie go straight at a speed 100.

```block
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
```

## Step 4

But how do we make Alfie spin?

He needs to turn around himself! To do that, we need to set one wheel to spin in one direction, and the other in opposite direction.

For example, let's set left wheel to spin forward, and right wheel to spin backward. And change the speed to 100 for both wheels. Place the right blocks and use the hint if you need help!

```block
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
```

## Step 5

Awesome! Now, once you turn on the wheels, they will spin forever (or until Alfie's batteries die). So we need to remember to turn them off. To do that, we use ``||maqueen:motor [] stop||``, and we can stop left, right or both wheels.

```block
maqueen.motorStop(maqueen.Motors.All)
```

## Step 5

Try now to write a code that makes Alfie spin around and stops the motors afterwards. ``|Download|`` the code and test it!

Did it work? No? Click next to find out why!

## Step 6

One more issue that we have is that first, we asked micro:bit to turn on Alfie's wheels. And right after, we asked micro:bit to stop them.
There was nothing wrong with your code but micro:bit right after turning the wheels on, turned them off. Literally in a blink of an eye, so you did not even see it.

But do not worry, we can easily fix it!

## Step 7 @showhint

We need one more piece in our code ``||basic:pause (ms) []||``. Using pause, we tell micro:bit to wait for some time until it takes the next block, in that case until it turns off the wheels.
Also, just so you know 1 second (s) equals 1000 milliseconds (ms), so don't be afraid to put big numbers in ``||basic:pause (ms) []||``.

Check out this example - now we turn on wheels, let Alfie spin for 1 second and then stop the wheels:

```block
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
basic.pause(1000)
maqueen.motorStop(maqueen.Motors.All)
```
## Step 8

So now, let's spin Alfie left for 1 second and then change direction for another 1 second and then stop it. Put everything in ``||input:on button A pressed||`` block, so that Alfie only spins when you press button A.

## Step 9

Here's help if you need It

```block
 input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
})
```