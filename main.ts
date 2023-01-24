input.onButtonPressed(Button.A, function () {
    กดสะสม += 1
    เลขที่เลือก = 0
    if (กดสะสม > 10) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    if (กดสะสม == 1) {
        music.playTone(587, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 2) {
        music.playTone(622, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 3) {
        music.playTone(659, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 4) {
        music.playTone(698, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 5) {
        music.playTone(740, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 6) {
        music.playTone(784, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 7) {
        music.playTone(831, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 8) {
        music.playTone(880, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 9) {
        music.playTone(932, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 10) {
        music.playTone(988, music.beat(BeatFraction.Quarter))
    }
})
input.onButtonPressed(Button.B, function () {
    เลขที่เลือก = กดสะสม
    if (กดสะสม > 0) {
        music.ringTone(349)
        basic.pause(300)
        music.stopAllSounds()
    }
    while (เลขที่เลือก == 1) {
        basic.pause(80)
        music.playMelody("C D E F G A B C5 ", 218)
        เลขที่เลือก = 0
    }
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    กดสะสม += -1
    if (กดสะสม == 0) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    if (กดสะสม == 1) {
        music.playTone(587, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 2) {
        music.playTone(622, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 3) {
        music.playTone(659, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 4) {
        music.playTone(698, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 5) {
        music.playTone(740, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 6) {
        music.playTone(784, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 7) {
        music.playTone(831, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 8) {
        music.playTone(880, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 9) {
        music.playTone(932, music.beat(BeatFraction.Quarter))
    }
    if (กดสะสม == 10) {
        music.playTone(988, music.beat(BeatFraction.Quarter))
    }
})
let เลขที่เลือก = 0
let กดสะสม = 0
กดสะสม = 0
เลขที่เลือก = 0
basic.forever(function () {
    if (กดสะสม < 0 || กดสะสม > 10) {
        กดสะสม = 0
    }
})
basic.forever(function () {
    if (กดสะสม == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
    if (กดสะสม == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
    if (กดสะสม == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    }
    if (กดสะสม == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (กดสะสม == 4) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . # . # .
            # # # # #
            . . . # .
            `)
    }
    if (กดสะสม == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (กดสะสม == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (กดสะสม == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . # . .
            . # . . .
            `)
    }
    if (กดสะสม == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (กดสะสม == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (กดสะสม == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    }
})
