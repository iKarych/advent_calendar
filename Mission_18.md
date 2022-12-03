```template
basic.forever(function () {
    if (true && true) {
        
    }
}
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Day 18

## Introduction @showdialog

Warm up Alfie and cheer him to make him spin!

## Step 1

Now it's time to put together skills that you've learned - using temperature sensor and microphone!

## Step 2

micro:bit prepared for you ``||Logic:if else||`` loop. You just need to fill it out.

So we want to make Alfie spin only when he's warm enough and somebody is cheering for him.

## Step 3

Let's start with warm enough - we need to compare temperature to some value, let's say it needs to be warmer than 21°C (``||Input:temperature (°C)||`` > 21).

For Alfie to detect is somebody is cheering for him, we check if the sound level was reached, let's use 128 as in previous mission (``||Input:sound level||`` > 128).

## Step 4

Now just put both of the lines in ``||Logic:if ___ and ___||`` loop.

```block
if (input.temperature() >= 21 && input.soundLevel() >= 128) {
} else {
}
```

## Step 5

Now just make Alfie spin (and smile) for 1 second when both conditions are true, otherwise stop the motors and show sad face.

## Step 5

Here's hint in case you need it.

```block
basic.forever(function () {
    if (input.temperature() >= 21 && input.soundLevel() >= 128) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.Sad)
    }
})
```

## Step 6

``|Download|`` the code and check if you can make Alfie move.

Remember that you can warm Alfie by blowing warm air on micro:bit [only with your mouth!!! ``|DO NOT USE|`` hair dryer, it might melt Alfie :( ]
And you might want to scream loud to cheer Alfie enough!!!