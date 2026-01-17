class Animal {
	static remainingAnimals = 0;

	constructor(name = "Unknown", species = "Unknown", energy = 100) {
		this._name = name;
		this._species = species;
		this._energy = 0;
		const initial = Number.isFinite(energy) ? Math.max(0, energy) : 0;
		this.energy = initial;
	}

	get name() {
		return this._name;
	}
	set name(v) {
		this._name = v;
	}

	get species() {
		return this._species;
	}
	set species(v) {
		this._species = v;
	}

	get energy() {
		return this._energy;
	}
	set energy(v) {
		const prev = this._energy;
		this._energy = Math.max(0, v);
		if (prev > 0 && this._energy === 0) {
			Animal.remainingAnimals = Math.max(0, Animal.remainingAnimals - 1);
		} else if (prev === 0 && this._energy > 0) {
			Animal.remainingAnimals++;
		}
	}

	_decreaseEnergy(amount) {
		const prev = this._energy;
		this.energy = this._energy - amount;
		return prev > 0 && this._energy === 0;
	}

	_performAttack(target, damage, actionPhrase = 'attacks') {
		if (!(target instanceof Animal)) {
			console.log('Can only attack other animals.');
			return;
		}
		if (!this.canAttack()) {
			console.log(`${this.name} has no energy and cannot attack.`);
			return;
		}

		console.log(`${this.name} ${actionPhrase} ${target.name}!`);

		const attackerOut = this._decreaseEnergy(damage);
		const targetOut = target._decreaseEnergy(damage);

		console.log(`${this.name}'s energy: ${this.energy}`);
		console.log(`${target.name}'s energy: ${target.energy}`);

		if (attackerOut && !targetOut) {
			console.log(`${target.name} wins! ${this.name} is out of energy!`);
		} else if (targetOut && !attackerOut) {
			console.log(`${this.name} wins! ${target.name} is out of energy!`);
		} else if (attackerOut && targetOut) {
			console.log(`Both ${this.name} and ${target.name} are out of energy!`);
		}
	}

	canAttack() {
		return this._energy > 0;
	}

	attack(target) {
		this._performAttack(target, 10, 'attacks');
	}

	eat() {
		this.energy = this._energy + 10;
		console.log(`${this.name} eats and gains energy!`);
		console.log(`${this.name}'s energy: ${this.energy}`);
	}
}

class Bird extends Animal {
	constructor(name, species, canFly = false) {
		super(name, species, 100);
		this._canFly = !!canFly;
	}

	get canFly() {
		return this._canFly;
	}
	set canFly(v) {
		this._canFly = !!v;
	}

	attack(target) {
		this._performAttack(target, 20, 'swoops in to attack');
	}

	eat() {
		this.energy = this._energy + 10;
		console.log(`${this.name} eats and gains energy!`);
		console.log(`${this.name}'s energy: ${this.energy}`);
	}
}

class Mammal extends Animal {
	constructor(name, species, furColor = "") {
		super(name, species, 200);
		this._furColor = furColor;
	}

	get furColor() {
		return this._furColor;
	}
	set furColor(v) {
		this._furColor = v;
	}

	attack(target) {
		this._performAttack(target, 50, 'lunges to attack');
	}

	eat() {
		this.energy = this._energy + 20;
		console.log(`${this.name} eats and gains energy!`);
		console.log(`${this.name}'s energy: ${this.energy}`);
	}
}

class Reptile extends Animal {
	constructor(name, species, coldBlooded = true) {
		super(name, species, 100);
		this._coldBlooded = !!coldBlooded;
	}

	get coldBlooded() {
		return this._coldBlooded;
	}
	set coldBlooded(v) {
		this._coldBlooded = !!v;
	}

	attack(target) {
		this._performAttack(target, 30, 'strikes to attack');
	}

	eat() {
		this.energy = this._energy + 15;
		console.log(`${this.name} eats and gains energy!`);
		console.log(`${this.name}'s energy: ${this.energy}`);
	}
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
