bitbot.goms(BBDirection.Reverse, 70, 1000)
bitbot.rotate(BBRobotDirection.Left, 60)
bitbot.stop(BBStopMode.Brake)
basic.forever(function () {
    bitbot.ledRainbow()
})
