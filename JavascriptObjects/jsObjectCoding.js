// TODO: create the character object here
const aurora ={
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,

    describe(){
        return `${aurora.name} has ${aurora.health} health points, ${aurora.strength} as strength and ${aurora.xp} XP points`;
    }
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

/******************************************************/

// TODO: create the dog object here
const dog = {
    name: "Fang",
    species: "boarhound",
    size: 75,
    bark(){
        return "Grrr! Grrr!";
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

/*******************************************************/

const account = {
    name: "Alex",
    balance: 0,
    
    credit(num){
        this.balance += num;
    },//End Credit

    describe(){
        return `Owner: ${this.name}, Balance ${this.balance}`;
    }//End Describe
}

console.log(account.describe());
//add the 250
account.credit(250);
//subtract the 80
account.credit(-80);
//display
console.log(account.describe());