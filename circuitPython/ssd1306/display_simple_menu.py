import os
import time
import busio
import adafruit_ssd1306
import board

width = 128
height = 64
line = 1
highlight = 1
shift = 0
list_length = 0
total_lines = 6
line_height = 10
menu = ["Menu1", "Menu2", "Menu3", "Menu4"]
print("Initializing Library ..")

i2c = busio.I2C(board.IO40, board.IO42)
while not i2c.try_lock():
    pass

devices = i2c.scan()
while len(devices) < 1:
    devices = i2c.scan()
device = devices[0]
print('Found device with address: {}'.format(hex(device)))

i2c.unlock()


print("updating library")
display = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c)

display.fill_rect(0, 0, width, height, 0)
list_length = len(menu)
short_list = menu[shift:shift+total_lines]

for item in short_list:
    if highlight == line:
        display.fill_rect(0, (line-1)*line_height, width, line_height, 1)
        display.text(">", 0, (line-1)*line_height, 0)
        display.text(item, 10, (line-1)*line_height, 0)
        display.show()
    else:
        display.text(item, 10, (line-1)*line_height, 1)
        display.show()
    line += 1
display.show()

print("Done.....")
