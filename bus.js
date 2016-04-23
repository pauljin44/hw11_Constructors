var Student = require("./student.js");

var Bus = function (driverName, color, gas){

	this.studentOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;

	this.studentEnterSBus = function (n, g, gr, GPA, d, s, c){
		this.studentOnTheBus.push(new Student(n, g, gr, GPA, d, s, c));
	}
}

module.experts = Bus;