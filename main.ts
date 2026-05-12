control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
    B_state = (B_state + 1) % 2
    radio.sendValue("TB", B_state)
    a_bilder[B_state].showImage(0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
    B_state = (B_state + 1) % 2
    radio.sendValue("TB", B_state)
})
let a_bilder: Image[] = []
let B_state = 0
radio.setGroup(3)
basic.showString("U2")
basic.showArrow(ArrowNames.West)
B_state = 0
let testFlag = 0
a_bilder = [images.arrowImage(ArrowNames.North), images.iconImage(IconNames.Diamond)]
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("pitch", input.rotation(Rotation.Pitch))
        radio.sendValue("roll", Math.idiv(input.rotation(Rotation.Roll), 2))
    } else {
        radio.sendValue("pitch", 0)
        radio.sendValue("roll", 0)
    }
})
