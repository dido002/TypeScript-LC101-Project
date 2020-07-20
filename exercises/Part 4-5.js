// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(shuttleName, speed) {
        this.milesPerKilometer = 0.621;
        this.name = shuttleName;
        this.speedMph = speed;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        return hoursToLocation / 24;
    };
    return Spacecraft;
}());
// I brought these in from the other typescript file, normally you would complete all of these steps in one file
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('destination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log(spaceShuttle.name + " would take " + spaceShuttle.getDaysToLocation(kilometersToMars) + " days to reach Mars.");
console.log(spaceShuttle.name + " would take " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " days to reach the Moon.");