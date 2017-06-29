var type = prompt("Enter c for Celcius to Fahrenheit, and enter f for Fahrenheit to Celcius").toLowerCase();

if (type == "c") {
	var temp = prompt("Enter a Celcius temperature.");
	temp = (temp * 1.8) + 32;
	console.log("Converting to Fahrenheit...");
	console.log(temp + " Degrees Fahrenheit");
}

if (type == "f") {
	var temp = prompt("Enter a Fahrenheit temperature.");
	temp = (temp - 32) / 1.8;
	console.log("Converting to Celcius...");
	console.log(temp + " Degrees Celcius");
}