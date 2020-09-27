
const first = () => {
	const greet = "Hi";
	const second = () => {
		const name="boddy";
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// //Closures
// Currying
const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a* b;
curriedMultiply(3);

//Compose
const compose= (f,g) => (a) => f(g(a));
const sum = (num) => num +1;
compose(sum,sum)(5);

//Avoiding Side Effects, functional purity;







// //old style
// function first = () => {
// 	var greet = "Hi";
// 	function second() {
// 		alert(greet);
// 	}
// 	return second;
// }

// var newFunc = first();
// newFunc();