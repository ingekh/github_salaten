function greeter(name) {
	const greeting = `Hei ${name}`; // "Hei" + name
	return greeting;
}
const userName = "John Kenneth";
const greeting = greeter(userName);
console.log(greeting);