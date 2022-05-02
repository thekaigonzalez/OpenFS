const openfs = require("./openfs");

var f = new openfs.File("test.txt", "w")

f.write("hello!")

f.close()

f.write("bye!")