let click = 0
let frontBack = 0
let rightLeft = 0
radio.setGroup(1)
let previousClickValue = 500
// radio.sendNumber()
basic.forever(function () {
    rightLeft = pins.analogReadPin(AnalogPin.P2)
    frontBack = pins.analogReadPin(AnalogPin.P3)
    click = pins.analogReadPin(AnalogPin.P1)
    console.log([rightLeft, frontBack, click])
    if (previousClickValue > 10 && click < 10) {
        radio.sendNumber(0)
        previousClickValue = click
        return true
    }
    previousClickValue = click

    if (rightLeft > 1000) {
        return radio.sendNumber(4)
    }
    if (rightLeft < 100) {
        return radio.sendNumber(3)
    }
    if (frontBack < 200) {
        return radio.sendNumber(1)
    }
    if (frontBack > 1000) {
        return radio.sendNumber(2)
    }
    return radio.sendNumber(5)
})
