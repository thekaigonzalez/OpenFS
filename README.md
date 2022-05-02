# OpenFS

> *From the makers of: NFy Mono's JS Engine, IronJS, we present to you a better `node-fs`.*

an object oriented framework & wrapper around the node-fs module providing object oriented file capabilities, 
reading capabilities, and much more.

## Extensions

Library extensions saved as .node files are allowed, and recommended for the maximum power for applications.

```js

const openfs = require("openfs");

var myfile = new openfs.File("hello.txt", "w");

myfile.write("Hello!")

myfile.close();

openfs.copyFiles("hello.txt", "hello aswell.txt");

```

