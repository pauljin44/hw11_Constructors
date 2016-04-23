var prompt = require("prompt");

var Bus = require("./bus.js");

prompt.start();

var myBus = new Bus("Paul", "orange", "full");

console.log(myBus);

myBus.studentEntersBus("Ashley", "F", "A", 3.5, 14, false, "let's get in the bus");
myBus.studentEntersBus("Brian", "M", "B", 3.0, 15, true, "You could have fun!");
myBus.studentEntersBus("Carole", "F", "C", 2.7, 13, true, "Take a break");
myBus.studentEntersBus("David", "M", "A", 3.5, 14, true, "Happy Birthday");
myBus.studentEntersBus("Eddy", "M", "A", 3.5, 14, false, "let's have a party");
myBus.studentEntersBus("Frank", "M", "B", 3.0, 14, true, "way to go");
myBus.studentEntersBus("George", "M", "B", 3.0, 14, false, "you could do better");
myBus.studentEntersBus("Harry", "M", "A", 3.5, 14, true, "let's get in the bus");
myBus.studentEntersBus("Issac", "M", "A", 3.5, 14, true, "let's get in the bus");
myBus.studentEntersBus("Jane", "F", "C", 2.5, 14, true, "let's get in the bus");
myBus.studentEntersBus("Karen", "F", "A", 3.5, 14, true, "let's get in the bus");
myBus.studentEntersBus("Larry", "M", "A", 3.5, 14, true, "let's get in the bus");
myBus.studentEntersBus("Matthew", "M", "C", 2.5, 14, true, "let's get in the bus");
myBus.studentEntersBus("Ophra", "F", "A", 3.5, 14, true, "let's get in the bus");
myBus.studentEntersBus("Queen", "F", "A", 3.5, 14, true, "let's get in the bus");
myBus.studentEntersBus("Robert", "M", "A", 3.5, 14, false, "let's get in the bus");
myBus.studentEntersBus("Sara", "F", "B", 3.0, 14, true, "let's get in the bus");
myBus.studentEntersBus("Trump", "M", "B", 3.0, 14, true, "let's get in the bus");
myBus.studentEntersBus("Ulesus", "M", "D", 1.9, 14, true, "do more practice");
myBus.studentEntersBus("Victor", "M", "B", 3.0, 14, true, "let's get in the bus");

console.log(myBus);