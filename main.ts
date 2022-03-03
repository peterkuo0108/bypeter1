let 濕度好1壞0 = 0
input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    if (濕度好1壞0 == 1) {
        soundExpression.happy.play()
    } else {
        soundExpression.sad.play()
    }
})
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(1000)
    if (pins.analogReadPin(AnalogPin.P0) < 100) {
        濕度好1壞0 = 1
        basic.showIcon(IconNames.Happy)
    } else {
        濕度好1壞0 = 0
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(1000)
})
