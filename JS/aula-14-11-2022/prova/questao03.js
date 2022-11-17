const io = require('../io-lib/io')

const rainbow = ["Red", "Orange", "Blackberry", "Blue"]

rainbow.splice(2, 1, "Yellow", "Green")

io.write(rainbow)

rainbow.splice(5, 0, "Purple")

io.write(rainbow)