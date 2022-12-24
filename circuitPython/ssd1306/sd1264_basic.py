import os
import time
import busio
import board
import displayio
import terminalio
import adafruit_displayio_ssd1306
from adafruit_display_text import label

WIDTH = 128
HEIGHT = 64
CENTER_X = int(WIDTH/2)
CENTER_Y = int(HEIGHT/2)

displayio.release_displays()

# Initialize and lock the I2C bus.
i2c = busio.I2C(board.IO40, board.IO42)
while not i2c.try_lock():
    pass

print("$$$$$$$$$$$ Starting scan")
# Find the first I2C device available.
devices = i2c.scan()
while len(devices) < 1:
    devices = i2c.scan()
device = devices[0]
print('Found device with address: {}'.format(hex(device)))

i2c.unlock()


print("Initializing Library ..")
# Output: Found device with address: 0x3c

display_bus = displayio.I2CDisplay(i2c, device_address=0x3c)
display = adafruit_displayio_ssd1306.SSD1306(display_bus, width=128, height=64)

print("Raspberry Pi Pico/CircuitPython ")
print("SSD1306 displayio (adafruit_displayio_ssd1306)")
time.sleep(0.5)

print()
print("os.uname():")
uname = os.uname()
for u in uname:
    print(u)
    time.sleep(1)

print(adafruit_displayio_ssd1306.__name__ + " : " +
      adafruit_displayio_ssd1306.__version__)
print()
