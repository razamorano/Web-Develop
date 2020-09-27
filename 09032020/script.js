class Vehicle {
	constructor(brand, model) {
		this.brand = brand;
		this.model = model;
	}
	mention(){
		console.log(`The brand of this vehicle is ${this.brand} and its model is ${this.model}`);
	}
}

class Car extends Vehicle {
	constructor(brand, model) {
		super (brand,model)
		console.log('car', this);
	}
	sound(){
		console.log(`Brrrmm I am a ${this.brand}`);
	}
}


