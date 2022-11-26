```template
input.onGesture(Gesture.Shake, function () {
	
})
```

# Day 12

## Introduction @showdialog

SHAKE 5 times

## Step 1

Ok, so there's this gift showing up on micro:bit - you can see it when you click play on the left. But it's closed...

## Step 2

Alex said that shaking Alfie 5 times might open it! Use your knowledge from before and create a counter - ``||variables:shakenNumber||``!
Put it in our shake block, and display it on micro:bit as before.

## Step 3

Now, we need to add some logic - add ``||variables:shakenNumber||``

## Step 4

Awesome, now, all that remains is to put block from previous step into our shake block. And display the value on micro:bit.

## Step 5

Here's hint if you need it!

```blocks
input.onGesture(Gesture.Shake, function () {
    shakenNumber += 1
    basic.showNumber(shakenNumber)
})
let shakenNumber = 0
shakenNumber = 0
```

## Step 6

``|Download|`` the code and try to find out how much shaking is required to wake up Alfie!