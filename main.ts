bitbot.goms(BBDirection.Reverse, 70, 2000)
bitbot.motor(BBMotor.Left, 70)
bitbot.rotate(BBRobotDirection.Left, 60)
bitbot.stop(BBStopMode.Brake)
basic.forever(function () {
    bitbot.ledRainbow()
})
