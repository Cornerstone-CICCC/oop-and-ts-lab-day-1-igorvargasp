[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/DceeyzAI)
# OOP Lab Day 1 - Jungle

**Objective**: Create a base class called `Animal` with properties like `name`, `species`, and `energy`. Then, create subclasses like `Bird`, `Mammal`, and `Reptile` that inherit from `Animal`. Add specific properties and methods to each subclass, like `fly()` for `Bird`, `furColor()` for `Mammal`, and `isColdBlooded()` for `Reptile`. Add the `attack()` and `eat()` methods for each.

## Classes

### Base Class: Animal

- **Properties**:
  - `name` (string): The name of the animal.
  - `species` (string): The species of the animal.
  - `energy` (integer): The power of the animal.

- **Static Property**:
  - `remainingAnimals`: A static property that keeps track of the number of animals that still have energy left.

- **Getters and Setters**:
  - For all properties like below:
    - `getName()` or `get name()`
    - `setName()` or `set name()`
    - `getSpecies()` or `get species()`
    - `setSpecies()` or `set species()`
    - `getEnergy()` or `get energy()`
    - `setEnergy()` or `set energy()`

- **Methods**:
  - `attack(target)`: The energy level of both parties will decrease by 10. If an animal’s energy falls to `0`, output a message stating which animal has won or lost. Also, update the static `remainingAnimals` property to reflect the current number of animals that still have energy.
  - `eat()`: The energy level will increase by 10.

### Subclass: Bird (inherits from Animal)

- **Properties**:
  - `energy` for bird is 100 by default.
  - `canFly` (boolean): Indicates whether the bird can fly or not.

- **Getters and Setters**:
  - For all properties.

- **Methods**:
  - `attack(target)`: The energy level of both parties will decrease by 20. If an animal’s energy falls to `0`, output a message stating which animal has won or lost. Update the static `remainingAnimals` property.
  - `eat()`: The energy level will increase by 10.

### Subclass: Mammal (inherits from Animal)

- **Properties**:
  - `energy` for mammal is 200 by default.
  - `furColor` (string): The color of the mammal's fur.

- **Getters and Setters**:
  - For all properties.

- **Methods**:
  - `attack(target)`: The energy level of both parties will decrease by 50. If an animal’s energy falls to `0`, output a message stating which animal has won or lost. Update the static `remainingAnimals` property.
  - `eat()`: The energy level will increase by 20.

### Subclass: Reptile (inherits from Animal)

- **Properties**:
  - `energy` for reptile is 100 by default.
  - `coldBlooded` (boolean): Indicates whether the reptile is cold-blooded or not.

- **Getters and Setters**:
  - For all properties.

- **Methods**:
  - `attack(target)`: The energy level of both parties will decrease by 30. If an animal’s energy falls to `0`, output a message stating which animal has won or lost. Update the static `remainingAnimals` property.
  - `eat()`: The energy level will increase by 15.

## Additional Requirements

- Add validation to check if the energy level is sufficient before each attack. If an animal has `0` energy, it cannot attack.
- Refactor the design pattern to avoid duplications, using method overriding where appropriate.
- If an animal’s energy falls to `0` after an attack, print out a message indicating which animal has won or lost, and update the static `remainingAnimals` property. For example, "Lion wins! Snake is out of energy!".
- Add a static property to the super class to track the number of remaining animals that still have energy across all instances. Reduce this count when an animal’s energy hits `0`.

## Console output example

```bash
Name: Eagle, Species: Bird of Prey, Can Fly: true  
Name: Lion, Species: Big Cat, Fur Color: Golden  
Name: Snake, Species: Serpent, Cold-Blooded: true  

--- Attacks ---
Eagle swoops in to attack Lion!
Eagle's energy: 80
Lion's energy: 180
Lion lunges to attack Snake!
Lion's energy: 130
Snake's energy: 50

Remaining animals with energy: 3

--- Eating ---
Eagle eats and gains energy!  
Eagle's energy: 90  
Lion eats and gains energy!
Lion's energy: 150
Snake eats and gains energy!
Snake's energy: 65 
```
