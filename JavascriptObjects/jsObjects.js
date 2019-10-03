//Object Literal
const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "bic"
};

// console.log(pen.type);
// console.log(pen.brand);

// pen.color = "red";
// //console.log(pen.color);
// console.log(`I write with a ${pen.brand}, with a color of ${pen.color}, and a type of ${pen.type}`);

// pen.price = 2.5;
// console.log(`My pen costs $${pen.price}`);

/*********************************************************/
const auraora ={
    name: "Aurora",
    health: 150,
    strength: 25
};

//console.log(`${character.name} has ${character.health} health points and ${character.strength} as strength`);

//aurora is harmed by an arrow and loses 20 health
auraora.health -= 20;

//console.log(`${character.name} has ${character.health} health points remaining`);

//aurora equips a strength necklace - increase strength by 10
auraora.strength += 10;

//console.log(`${character.name} has ${character.strength}`);
description(auraora);

function description(character){
    console.log(`${character.name} has ${character.health} health points and ${character.strength} as strength`);
}

const boris = {
    name: "Boris",
    health: 100,
    strength: 150,
    describe(newName){
        this.name = newName;
        console.log(`${this.name}`);
    }
}

boris.describe("John");