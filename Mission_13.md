basic.forever(function () {
    if (input.temperature() >= 23) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        basic.pause(100)
    }
})
control.inBackground(function () {
    while (true) {
        if (input.temperature() >= 23) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    }
})