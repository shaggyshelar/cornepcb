"""
When button is pressed it will send SHIFT + A button
https://docs.circuitpython.org/projects/hid/en/latest/index.html
"""
import time
import board
from digitalio import DigitalInOut, Direction, Pull
import usb_hid
from adafruit_hid.keyboard import Keyboard
from adafruit_hid.keycode import Keycode

# Set up a keyboard device.
kbd = Keyboard(usb_hid.devices)

btn = DigitalInOut(board.IO4)
btn.direction = Direction.INPUT
btn.pull = Pull.UP

while True:
    if not btn.value:
        print("BTN is down")
        # Type capital 'A'.
        kbd.send(Keycode.SHIFT, Keycode.A)
    else:
        # print("BTN is up")
        pass

    time.sleep(1)  # sleep for debounce
