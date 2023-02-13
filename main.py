def my_function():
    global เลขที่เลือก, อนุญาติให้กด_B, อนุญาติเปิดเพลง, สถานะการเล่นของเพลง
    เลขที่เลือก = 0
    if อนุญาติให้กด_B == 1:
        อนุญาติให้กด_B = 0
        if กดสะสม > 0:
            เลขที่เลือก = กดสะสม
            อนุญาติเปิดเพลง += 1
            while เลขที่เลือก == 1:
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                music.play_melody("C5 A A G B E C5 C ", Tempo)
                music.play_melody("C D G F G D B C5 ", Tempo)
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            while เลขที่เลือก == 2:
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                music.play_melody("C D E F G A B C5 ", Tempo)
                music.play_melody("C D E F G A B C5 ", Tempo)
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            while เลขที่เลือก == 3:
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                music.play_melody("C D E F G A B C5 ", Tempo)
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            while เลขที่เลือก == 4:
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            while เลขที่เลือก == 5:
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            while เลขที่เลือก == 6:
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            while เลขที่เลือก == 7:
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            while เลขที่เลือก == 8:
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            while เลขที่เลือก == 9:
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
            while เลขที่เลือก == 10:
                เลขที่เลือก = 0
                สถานะการเล่นของเพลง = 1
                สถานะการเล่นของเพลง = 0
                basic.pause(250 * 2)
                อนุญาติให้กด_B = 1
buttonClicks.on_button_single_clicked(buttonClicks.AorB.B, my_function)

def on_button_pressed_a():
    global อนุญาติเปิดเพลง, อนุญาติให้กด_B, กดสะสม, เลขที่เลือก
    if สถานะการเล่นของเพลง == 0:
        อนุญาติเปิดเพลง = 0
        อนุญาติให้กด_B = 1
        กดสะสม += 1
        เลขที่เลือก = 0
        if กดสะสม > 10:
            music.play_tone(440, music.beat(BeatFraction.WHOLE))
        if กดสะสม == 1:
            music.play_tone(587, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 2:
            music.play_tone(622, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 3:
            music.play_tone(659, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 4:
            music.play_tone(698, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 5:
            music.play_tone(740, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 6:
            music.play_tone(784, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 7:
            music.play_tone(831, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 8:
            music.play_tone(880, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 9:
            music.play_tone(932, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 10:
            music.play_tone(988, music.beat(BeatFraction.QUARTER))
input.on_button_pressed(Button.A, on_button_pressed_a)

def my_function2():
    global อนุญาติให้กด_B, อนุญาติเปิดเพลง
    อนุญาติให้กด_B = 1
    if สถานะการเล่นของเพลง == 1 and กดสะสม > 0:
        อนุญาติเปิดเพลง = 0
        basic.pause(200)
        music.play_tone(311, music.beat(BeatFraction.HALF))
buttonClicks.on_button_double_clicked(buttonClicks.AorB.B, my_function2)

def my_function3():
    global กดสะสม
    if สถานะการเล่นของเพลง == 0:
        กดสะสม += -1
        if กดสะสม == 0:
            music.play_tone(440, music.beat(BeatFraction.WHOLE))
        if กดสะสม == 1:
            music.play_tone(587, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 2:
            music.play_tone(622, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 3:
            music.play_tone(659, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 4:
            music.play_tone(698, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 5:
            music.play_tone(740, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 6:
            music.play_tone(784, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 7:
            music.play_tone(831, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 8:
            music.play_tone(880, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 9:
            music.play_tone(932, music.beat(BeatFraction.QUARTER))
        if กดสะสม == 10:
            music.play_tone(988, music.beat(BeatFraction.QUARTER))
buttonClicks.on_button_held(buttonClicks.AorB.A, my_function3)

สถานะการเล่นของเพลง = 0
อนุญาติให้กด_B = 0
อนุญาติเปิดเพลง = 0
เลขที่เลือก = 0
กดสะสม = 0
Tempo = 0
Tempo = 240
music.set_built_in_speaker_enabled(False)
กดสะสม = 0
เลขที่เลือก = 0
อนุญาติเปิดเพลง = 0

def on_forever():
    global กดสะสม
    if อนุญาติเปิดเพลง == 0:
        music.stop_melody(MelodyStopOptions.ALL)
    if กดสะสม < 0 or กดสะสม > 10:
        กดสะสม = 0
basic.forever(on_forever)

def on_forever2():
    if กดสะสม == 0:
        basic.show_leds("""
            . # # # .
                        . # . # .
                        . # . # .
                        . # . # .
                        . # # # .
        """)
    if กดสะสม == 1:
        basic.show_leds("""
            . . # . .
                        . # # . .
                        . . # . .
                        . . # . .
                        . # # # .
        """)
    if กดสะสม == 2:
        basic.show_leds("""
            . # # # .
                        . . . # .
                        . # # # .
                        . # . . .
                        . # # # .
        """)
    if กดสะสม == 3:
        basic.show_leds("""
            . # # # .
                        . . . # .
                        . # # # .
                        . . . # .
                        . # # # .
        """)
    if กดสะสม == 4:
        basic.show_leds("""
            . . . # .
                        . . # # .
                        . # . # .
                        # # # # #
                        . . . # .
        """)
    if กดสะสม == 5:
        basic.show_leds("""
            . # # # .
                        . # . . .
                        . # # # .
                        . . . # .
                        . # # # .
        """)
basic.forever(on_forever2)

def on_forever3():
    if กดสะสม == 6:
        basic.show_leds("""
            . # # # .
                        . # . . .
                        . # # # .
                        . # . # .
                        . # # # .
        """)
    if กดสะสม == 7:
        basic.show_leds("""
            . # # # .
                        . . . # .
                        . . . # .
                        . . # . .
                        . # . . .
        """)
    if กดสะสม == 8:
        basic.show_leds("""
            . # # # .
                        . # . # .
                        . # # # .
                        . # . # .
                        . # # # .
        """)
    if กดสะสม == 9:
        basic.show_leds("""
            . # # # .
                        . # . # .
                        . # # # .
                        . . . # .
                        . # # # .
        """)
    if กดสะสม == 10:
        basic.show_leds("""
            # . # # #
                        # . # . #
                        # . # . #
                        # . # . #
                        # . # # #
        """)
basic.forever(on_forever3)
