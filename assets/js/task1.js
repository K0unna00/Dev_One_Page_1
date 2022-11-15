var isAccording = function (an, sett) {
    if (an.biome === sett.biome && an.reservoir === sett.reservoir && an.kind == sett.kind && sett.area >= an.invidualArea) {
        sett.animals.push(an);
        console.log(sett);
        return;
    }
    console.log("It is not possible !!");
};
var Putin = {
    name: "Putin",
    age: 50,
    foodPerDay: 0.5,
    typeName: "Hyena",
    biome: "savannah",
    reservoir: true,
    invidualArea: 20,
    mealType: ['makaron', 'meat'],
    kind: "Predator"
};
var Home = {
    biome: "savannah",
    reservoir: false,
    kind: "Predator",
    area: 50,
    animals: []
};
isAccording(Putin, Home);
