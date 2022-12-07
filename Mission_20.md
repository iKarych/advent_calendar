```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Day 20

## Introduction @showdialog

Hurry up, before Shreddie disappears!

## Step 1

Few missions ago you learned how to make Alfie spin, now it's time to learn a bit more how to control him.

## Step 2 @showhint

You just need 3 blocks today to complete the challenge (but we will add something new to it):

```block
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(100)
```

## Step 3

So going straight is simple, you just:
1. start the motors - ``||maqueen:motor [all] move [Forward] at speed [100]||``,
2. tell micro:bit how long Alfie should be going straight - ``||Basic:pause (ms) [1000]||`` (Reminder: 1000 ms = 1 s)
3. stop the motors - ``||maqueen:motor [all] stop||``.

```block
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
basic.pause(1000)
maqueen.motorStop(maqueen.Motors.All)
```

## Step 4

Turning is a bit harder, so we need to use the same blocks as for spinning:
1. left wheel goes forward and right wheel goes backward
``||maqueen:motor [left] move [Forward] at speed [100]||``, ``||maqueen:motor [right] move [Backward] at speed [100]||``
2. we need to tell micro:bit how long should Alfie be turning - ``||Basic:pause (ms) [170]||``.
And that's the tricky part - let's say that we want to have a perfect, sharp right turn (turn by 90°). But micro:bit can only use time, not degrees, so we cannot tell Alfie to turn by 90 degrees.
Instead, we have to figure out how long time it takes to turn Alfie by 90 degrees.
3. stop the motors - ``||maqueen:motor [all] stop||``.

## Step 5

Check out the code in the hint, I have used 170 ms for Alfie to make a perfect 90° turn. But each Alfie is different, your tires might be a bit more slippery or the motor is not exactly the same. So experiment, ``|Download|`` the code, try setting different values until your Alfie makes a nice 90° turn.

```blocks
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
basic.pause(170)
maqueen.motorStop(maqueen.Motors.All)
```

## Step 6

Did you get it to work? Great!

Now make Alfie go straight, turn left, go straight, turn right and straight again! Test and ``|Download|`` your code!

## Step 7

That required quite a few pieces of code, didn't it? But we can make it a bit simpler!
For that, we will use ``||Functions:Functions||``, you might have seen them in previous missions because we actually already used them before.

So ``||Functions:Functions||`` are very smart, they can hold other pieces of code, so you can reuse them, if you need it!

## Step 8 @showhint

Choose ``||Functions:Functions||`` in your Toolbox (under Advanced) and click ``||Functions:Make a Function...||``. Now set the name, for example, ``||Functions:Function [goStraight]||``.
Now, try to move all the code that makes Alfie go straight. It should look like in the hint.

```block
function goStraight () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(1000)
}
```
## Step 9 @showhint

If you click ``||Functions:Functions||`` in your Toolbox again, you should now also see ``||Functions:call goStraight||`` (or whatever you called your function). Place this block in all the spots Alfie should go straight.

```blocks
function goStraight () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(1000)
}
goStraight()
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
basic.pause(170)
goStraight()
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
basic.pause(170)
goStraight()
maqueen.motorStop(maqueen.Motors.All)
```

## Step 10

Taa daaa! Now you have shorter code! Instead of writing the same blocks three times, you have done that only once! Good job.

P.S. You can also try and replace other pieces of blocks with function, for example, ``||Functions:goLeft||`` and ``||Functions:goRight||``.

``|Download|`` and transfer the code to micro:bit! And return to the chapter!