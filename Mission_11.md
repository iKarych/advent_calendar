```template
input.onGesture(Gesture.Shake, function () {
	
})
```

# Day 11

## Introduction @showdialog

Program Alfie to show you how many times he has been shaken!

## Step 1

Let's learn a bit more about variables! Yesterday's mission was all about setting ``||variables:speakSled||`` to ``||logic:true||`` or ``||logic:false||``.

But variables are so much more than just saying true/false. Today we will use it to store a number (and change it everytime we shake Alfie).

```ghost
let hi = 0
shakenNumber = true
shakenNumber = false
```

## Step 2

We want to count how many times we have already shaken Alfie! To do that, we need a new variable - let's call it ``||variables:shakenNumber||``.
As a starting point, we want to set this variable to 0, because in the beginning we didn't shake Alfie at all.

```blocks
let shakenNumber = 0
```

## Step 3

Now we need to change ``||variables:shakenNumber||`` everytime, Alfie is shaken.
For example, the first time we shake Alfie, ``||variables:shakenNumber||`` must be 1, the second time - 2, the third - 3, and so on...
To do that, there's this smart block ``||variables:change shakenNumber by||``, let's use it:

```block
shakenNumber += 1
```

## Step 4

We also need to use block ``||Mission11:wake up at||`` and put there ``||variables:shakenNumber||``. This checks if Alfie is awake already!

## Step 5

Awesome, now, all that remains is to put block from previous step into our shake block and display the value on micro:bit.

## Step 6

Here's hint if you need it!

```blocks
input.onGesture(Gesture.Shake, function () {
    shakenNumber += 1
    basic.showNumber(shakenNumber)
    Mission11.wakeUp(shakenNumber)
})
let shakenNumber = 0
shakenNumber = 0
```

## Step 7

``|Download|`` the code and try to find out how much shaking is required to wake up Alfie!