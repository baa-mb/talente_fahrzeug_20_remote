let kurve = 0
let gerade = 0
let alt_kurve = 0
let alt_gerade = 0
radio.setGroup(26)
basic.showString("U26")
basic.showArrow(ArrowNames.South)
let empfind = 4
basic.forever(function () {
    gerade = Math.min(Math.max(input.rotation(Rotation.Pitch), -45), 45)
    gerade = Math.round(gerade / empfind) * empfind
    radio.sendValue("gerade", gerade)
    basic.pause(100)
    kurve = Math.min(Math.max(input.rotation(Rotation.Roll), -45), 45)
    kurve = Math.round(kurve / empfind) * empfind
    radio.sendValue("kurve", kurve)
    basic.pause(100)
})
