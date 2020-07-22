// Part 4: Create a Spacecraft Class
let Spacecraft = /** @class */ (function () {
    function Spacecraft(shuttleName, speed) {
        this.milesPerKilometer = 0.621;
        this.name = shuttleName;
        this.speedMph = speed;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        let milesAway = kilometersAway * this.milesPerKilometer;
        let hoursToLocation = milesAway / this.speedMph;
        return hoursToLocation / 24;
    };
    return Spacecraft;
}());
// Create an instance of the class here:
let spaceShuttle = new Spacecraft('destination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log(spaceShuttle.name + " would take " + spaceShuttle.getDaysToLocation(kilometersToMars) + " days to reach Mars.");
console.log(spaceShuttle.name + " would take " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " days to reach the Moon.");