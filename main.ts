buttonClicks.onButtonSingleClicked(buttonClicks.AorB.B, function () {
    เลขที่เลือก = 0
    if (อนุญาติให้กด_B == 1) {
        อนุญาติให้กด_B = 0
        if (กดสะสม > 0) {
            เลขที่เลือก = กดสะสม
            อนุญาติเปิดเพลง += 1
            while (เลขที่เลือก == 1) {
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                music.playMelody("C5:4 D5:4 E5:4 C5:4 C5:4 D5:4 E5:4 E5:2 C5:4 C5:4 D5:4 G5:4 G5:2 C5:4 D5:4 E5:4 C5:4 C5:4 D5:4 E5:4 E5:2 C5:4 C5:4 G5:4 G5:4 E5:4 D5:4 C5:2", 120)
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            }
            while (เลขที่เลือก == 2) {
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                music.playMelody("C5:4 C5:4 G5:4 G5:4 A5:4 A5:4 G5:2 F5:4 F5:4 E5:4 E5:4 D5:4 D5:4 C5:2 G5:4 G5:4 F5:4 F5:4 E5:4 E5:4 D5:2 G5:4 G5:4 F5:4 F5:4 E5:4 E5:4 D5:2 C5:4 C5:4 G5:4 G5:4 A5:4 A5:4 G5:2 F5:4 F5:4 E5:4 E5:4 D5:4 D5:4 C5:2", 120)
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            }
            while (เลขที่เลือก == 3) {
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                music.playMelody("C5:4 C5:4 D5:4 C5:4 F5:4 E5:4 C5:4 C5:4 D5:4 C5:4 G5:4 F5:4 C5:4 C5:4 C6:4 A5:4 F5:4 E5:4 D5:4 C5:4 G5:4 F5:4 E5:4 D5:4 C5:4 G5:4 F5:4 E5:4 D5:4 C5:2 C5:4 C5:4 D5:4 C5:4 F5:4 E5:4 C5:4 C5:4 D5:4 C5:4 G5:4 F5:4 C5:4 C5:4 C6:4 A5:4 F5:4 E5:4 D5:4 C5:4 G5:4 F5:4 E5:4 D5:4 C5:4 G5:4 F5:4 E5:4 D5:4 C5:2", 120)
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            }
            while (เลขที่เลือก == 4) {
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                music.playMelody("E5:4 E5:4 E5:4 E5:4 E5:4 E5:4 D5:4 D5:4 E5:4 G5:4 C5:4 D5:4 E5:4 F5:4 F5:4 F5:4 F5:4 F5:4 E5:4 E5:4 D5:4 D5:4 E5:4 D5:4 G5:4 G5:4 F5:4 D5:4 C5:4 C5:4 B4:4 B4:4 C5:4 D5:4 E5:4 D5:4 C5:4 A4:4 A4:4 G4:4 E5:4 G5:4 A5:4 F5:4 F5:4 E5:4 E5:4 D5:4 B4:4 B4:4 C5:4 D5:4 E5:4 D5:4 C5:4 A4:4 A4:4 G4:4 E5:4 D5:4 C5:4", 120)
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            }
            while (เลขที่เลือก == 5) {
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                music.playMelody("E4:4 D4:4 E4:4 E4:2 D4:2 D4:2 E4:4 G4:4 G4:2 A4:2 A4:2 G4:2 F4:2 E4:2 D4:4 D4:4 C4:4 C4:2 D4:2 D4:2 C4:2 B4:2 A4:2 G4:4 G4:4 A4:4 A4:2 B4:2 B4:2 A4:2 G4:2 F4:2 E4:2 D4:4 E4:4 D4:4 C4:4 D4:2 E4:2 F4:2 E4:2 D4:2 C4:2 D4:2 E4:2 F4:2 G4:2 A4:4 A4:4 G4:4 F4:2 E4:2 D4:2 C4:2", 120)
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            }
            while (เลขที่เลือก == 6) {
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                music.playMelody("D4:2 D4:2 E4:2 E4:2 D4:2 D4:2 C4:2 C4:2 D4:2 D4:2 E4:2 E4:2 F4:2 F4:2 E4:2 E4:2 D4:2 D4:2 C4:2 C4:2 C4:2 C4:2 D4:2 D4:2 E4:2 E4:2 F4:2 F4:2 E4:2 E4:2 D4:2 D4:2 C4:2 C4:2 D4:2 D4:2 E4:2 E4:2 D4:2 D4:2 C4:2 C4:2", 120)
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            }
            while (เลขที่เลือก == 7) {
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                music.playMelody("C4:2 C4:2 A3:2 A3:2 G3:2 G3:2 A3:2 A3:2 C4:2 C4:2 C4:2 C4:2 C5:2 C5:2 A4:2 A4:2 G4:2 G4:2 A4:2 A4:2 C5:2 C5:2 C4:2 C4:2 C4:2 C4:2 A3:2 A3:2 G3:2 G3:2 A3:2 A3:2 C4:2 C4:2", 120)
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            }
            while (เลขที่เลือก == 8) {
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                music.playMelody("F4:2 F4:2 F4:2 A4:2 C5:2 A4:2 F4:2 D4:2 D4:2 D4:2 F4:2 A4:2 C5:2 A4:2 F4:2 D4:2 D4:4 F4:2 F4:2 F4:2 A4:2 C5:2 A4:2 F4:2 D4:2 D4:2 E4:2 E4:2 D4:2 D4:2 C4:2 C4:2", 120)
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            }
            while (เลขที่เลือก == 9) {
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                music.playMelody("C4:2 D4:2 E4:2 C4:2 C4:2 D4:2 E4:2 C4:2 E4:2 G4:2 G4:2 C5:2 G4:2 G4:2 C5:2 A4:2 F4:2 F4:2 E4:2 D4:2 C4:2 C4:2 D4:2 E4:2 C4:2 E4:2 G4:2 G4:2 C5:2 G4:2 G4:2 C5:2 C5:2 C5:4", 120)
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            }
            while (เลขที่เลือก == 10) {
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                music.playMelody("C4:2 C4:2 C5:2 A4:2 G4:2 A4:2 C5:2 C5:2 C5:2 E5:2 D5:2 D5:2 D5:2 G5:2 F5:2 D5:2 C5:2 C5:2 C5:2 A4:2 G4:2 A4:2 C5:2 C5:2 C5:2 E5:2 D5:2 D5:2 D5:2 G5:2 F5:2 D5:2 C5:4", 120)
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (สถานะการเล่นของเพลง == 0) {
        อนุญาติเปิดเพลง = 0
        อนุญาติให้กด_B = 1
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
    }
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
    อนุญาติให้กด_B = 1
    if (สถานะการเล่นของเพลง == 1 && กดสะสม > 0) {
        อนุญาติเปิดเพลง = 0
        basic.pause(200)
        music.playTone(311, music.beat(BeatFraction.Half))
    }
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    if (สถานะการเล่นของเพลง == 0) {
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
    }
})
let สถานะการเล่นของเพลง = 0
let อนุญาติให้กด_B = 0
let อนุญาติเปิดเพลง = 0
let เลขที่เลือก = 0
let กดสะสม = 0
music.setBuiltInSpeakerEnabled(false)
กดสะสม = 0
เลขที่เลือก = 0
อนุญาติเปิดเพลง = 0
basic.forever(function () {
    if (อนุญาติเปิดเพลง == 0) {
        music.stopMelody(MelodyStopOptions.All)
    }
    if (กดสะสม < 0 || กดสะสม > 10) {
        กดสะสม = 0
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
