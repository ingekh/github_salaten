function greeter(name) {
	const greeting = `Hei ${name}!`; // "Hei" + name
	return greeting;
}
const userName = "Per Jonas";
const greeting = greeter(userName);
console.log(greeting);