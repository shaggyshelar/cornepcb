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
BORDER = 5

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


splash = displayio.Group()
display.show(splash)

color_bitmap = displayio.Bitmap(WIDTH, HEIGHT, 1)
color_palette = displayio.Palette(1)
color_palette[0] = 0xFFFFFF  # White
bg_sprite = displayio.TileGrid(
    color_bitmap, pixel_shader=color_palette, x=0, y=0)
splash.append(bg_sprite)
# Draw a smaller inner rectangle
inner_bitmap = displayio.Bitmap(WIDTH - BORDER * 2, HEIGHT - BORDER * 2, 1)
inner_palette = displayio.Palette(1)
inner_palette[0] = 0x000000  # Black
inner_sprite = displayio.TileGrid(
    inner_bitmap, pixel_shader=inner_palette, x=BORDER, y=BORDER
)
splash.append(inner_sprite)
# Draw a label
text = "Hello World!"
text_area = label.Label(
    terminalio.FONT, text=text, color=0xFFFFFF, x=28, y=HEIGHT // 2 - 1
)
splash.append(text_area)
while True:
    pass
