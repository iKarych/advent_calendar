```package
maqueen=github:dfrobot/pxt-maqueen
neopixel=github:microsoft/pxt-neopixel#v0.7.3
```

# Day 6

## Introduction @showdialog

Alfie The Guardian! Let's flash some lights!

## Step 1

Alfie has to alert Alex when it is ok to sneak into Grumio's room and when she needs to hide.

## Step 2

Alfie has 4 lights. We have to do few steps to turn them on.

First, choose ``||neopixel:Neopixel||`` from the toolbox.

## Step 3 @showhint

Pick the first block.

We need to call our lights - let's call them ``||variables:lights||``. By default, they are called ``||variables:strip||``, but you can change them by clicking arrow next to the name and click ``||variables:Rename variable...||``
Then, we need to tell micro:bit where are the lights connected - all Alfie's lights are on ``||neopixel:P15||``.
There are 4 lights, so type ``||neopixel:4||``.
And let's leave the last option as ``||neopixel:RGB (GRB format)||`` - this tells micro:bit how to display colors correctly (RGB means [R]ed, [G]reen, [B]lue).


```block
lights = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
```

## Step 4

Now, we know that ``||variables:lights||`` are connected to Alfie's lights! We can now change their color. To do that, set ``||variables:lights||`` to ``||neopixel:show color green||``.

```block
let lights: neopixel.Strip = null
lights.showColor(neopixel.colors(NeoPixelColors.Green))
```

## Step 5

Now it's time to correctly program the colors. To do that, we will use the skill that you learnt yesterday - buttons.

Put button A and button B blocks in the workspace. Let's make some logic:
- when button A is pressed - it is safe; Alfie shows green colors,
- when button B is pressed - Grumio alert, HIDE; Alfie shows red colors.

Check out next step if you need some help!

## Step 5

``|Download|`` when you are ready, and if you need some help, use the hint button.

```blocks
let lights: neopixel.Strip = null
lights = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
input.onButtonPressed(Button.A, function () {
    lights.showColor(neopixel.colors(NeoPixelColors.Green))
})
input.onButtonPressed(Button.B, function () {
    lights.showColor(neopixel.colors(NeoPixelColors.Red))
})
```
