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
