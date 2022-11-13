interface Type {
    typeName:string;
    biome:string;
    reservoir:boolean;
    invidualArea:number;
    mealType:string[];
    kind:"Predator"|"herbivore";
}
interface Animal extends Type{
    name:string;
    age:number;
    foodPerDay:number;
}
interface Settlement{
    biome:string;
    reservoir:boolean;
    kind:"Predator"|"herbivore"|"omnivorous";
    area:number;
    animals:Animal[]
}

const isAccording=(an:Animal,sett:Settlement):void=>{
    if(an.biome===sett.biome && an.reservoir===sett.reservoir && an.kind==sett.kind && sett.area>=an.invidualArea){
        sett.animals.push(an);
        console.log(sett);
        return;
    }
    console.log("It is not possible !!");
}


let Heci:Animal={
    name:"HECI",
    age:50,
    foodPerDay:0.5,
    typeName:"Hyena",
    biome:"savannah",
    reservoir:false,
    invidualArea:20,
    mealType:['makaron','meat'],
    kind:"Predator"
}
let Home:Settlement={
    biome:"savannah",
    reservoir:false,
    kind:"Predator",
    area:50,
    animals:[]
}

isAccording(Heci,Home)


