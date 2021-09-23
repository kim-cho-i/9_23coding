radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
        신호수신횟수 += 1
    }
})
input.onButtonPressed(Button.A, function () {
    투표번호 += -1
    basic.showNumber(투표번호)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(투표번호)
    투표번호 = 0
})
input.onButtonPressed(Button.B, function () {
    투표번호 += 1
    basic.showNumber(투표번호)
    basic.pause(1000)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(신호수신횟수)
})
let 신호수신횟수 = 0
let 투표번호 = 0
radio.setGroup(1)
투표번호 = 0
신호수신횟수 = 0
basic.forever(function () {
	
})
