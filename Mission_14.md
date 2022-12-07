# Day 14

## Introduction @showdialog

Learn how to use Alfie's temperature sensor!

## Step 1

Did you know that micro:bit has a temperature sensor? It measures it by checking how warm (or cold) his processor is.

## Step 2

To use it, you need ``||input:temperature (°C)||``. To display it, use ``||basic:show number||``.
And perhaps use one of the button blocks to call it everytime you press it.

## Step 3

Here's a hint if you need it:

```block
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
```

## Step 4

Now ``|Download|`` the code and go measure temperature in different places. Remember, you might want to wait a bit (a minute) for the sensor to show the correct temperature. Come back to the chapter.