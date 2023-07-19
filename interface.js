var printcar = function (car) {
    console.log(car.name, car.year);
};
printcar({ name: 'lambo', year: 2023 });
var drink = {
    name: 'coke',
    carbonated: true,
    summary: function () {
        return "My drink is ".concat(this.name);
    }
};
var car = {
    name: 'BMW',
    model: 'M5',
    summary: function () {
        return "My car is ".concat(this.name);
    }
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(drink);
printSummary(car);
