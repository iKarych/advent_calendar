```template
basic.forever(function () {
    if (true) {
    	
    } else {
    	
    }
})
```

# Day 10

## Introduction @showdialog

Program Alfie to speak to the sled, so they can tell it to carry them to the top! 

## Step 1

Remember we briefly talked about variables in your Day 4 mission? Now it's time to learn a bit more about it!

## Step 2

A variable is like a container, it can store a value that we can later change or use it in a program elsewhere.
micro:bit uses red blocks ``||variables:variable||``, to create a new variable, just pick ``||variables:Variables||`` in your toolbox, and click "Make a variable...", then you just choose a name and that's it, you've created a variable.

## Step 3

Ok, let's try it with an example.

We know that Alfie can speak sled-language, but we need to change it in micro:bit settings!

Let's use a variable to store information if Alfie can speak sled-language or not. Create new variable and call it ``||variables:speakSled||``.

## Step 4

We have a variable now, but it's empty, to give it some value, we need to use block ``||variables:set speakSled to||``. Now, to tell Alfie that the settings have been changed on micro:bit, our variable needs to say that it's ``||logic:true||`` or ``||logic:false||``.

## Step 5

We know that Alfie can only speak sled-language when it's being shaken (strange, huh?). So let's use the block from yesterday to detect if Alfie is shaken. Use the hint if you need it!

```block
let speakSled = false
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        speakSled = true
    } else {
        speakSled = false
    }
})
```

## Step 6

Great, now Alfie knows when it can speak sled-language. But we don't know it, so let's ask micro:bit to tell us what is the value ``||variables:speakSled||``.

Add ``||basic:show string||`` and place there our variable to display the value!

```block
basic.showString("" + (speakSled))
```

## Step 7

``|Download|`` the code and test if micro:bit shows true or false, depending if you shake Alfie!