import board
import busio

# Initialize and lock the I2C bus.
i2c = busio.I2C(board.IO40, board.IO42)
while not i2c.try_lock():
    pass

# Find the first I2C device available.
devices = i2c.scan()
while len(devices) < 1:
    devices = i2c.scan()
device = devices[0]
print('Found device with address: {}'.format(hex(device)))

i2c.unlock()

# Output: Found device with address: 0x3c
