"""
Top Left side of button is connected to IO4
Bottom Right side of button is connected to GND

Buttons Tested: IO4,IO5,IO6,IO7,IO15,IO16,IO17,IO18,IO8,IO3,IO46,IO9,IO10,IO11,IO12,IO13,IO14
"""
import time
import board
from digitalio import DigitalInOut, Direction, Pull

btn = DigitalInOut(board.IO4)
btn.direction = Direction.INPUT
btn.pull = Pull.UP

while True:
    if not btn.value:
        print("BTN is down")
    else:
        # print("BTN is up")
        pass

    time.sleep(1)  # sleep for debounce
