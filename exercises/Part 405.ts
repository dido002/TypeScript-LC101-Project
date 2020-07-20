// for part 5:
import {SpaceLocation} from './SpaceLocation';

// Part 4: Create a Spacecraft Class
class Spacecraft {
    milesPerKilometer = 0.621;
    name: string;
    speedMph: number;

    constructor(shuttleName: string, speed: number) {
        this.name = shuttleName;
        this.speedMph = speed;
    }

    getDaysToLocation(kilometersAway:number) {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursToLocation: number = milesAway / this.speedMph;

        return  hoursToLocation / 24;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}

// I brought these in from the other typescript file, normally you would complete all of these steps in one file
let kilometersToMars:number = 225000000;
let kilometersToTheMoon: number = 384400;

// Create an instance of the class here:
let spaceShuttle = new Spacecraft('destination', 17500);


// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to reach Mars.`);
console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to reach the Moon.`);


// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));