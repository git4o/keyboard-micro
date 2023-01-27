bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, function () {
    keyboard.sendString("Hello")
})
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startLEDService()
mouse.startMouseService()
keyboard.startKeyboardService()
basic.forever(function () {
	
})
