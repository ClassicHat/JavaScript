const theItem = {
    name: "sword",
    strength: 30,
}

function avatar(name, strength, item){
    this.aName = name;
    this.aStrength = strength;
    this.aItem = item;

    this.collectItems = function(newItem){
        this.aItem = newItem;
    }
}

const avatar1 = new avatar("100StatMan", 100);

avatar1.collectItems(theItem);

console.log(`The avatar named '${avatar1.aName}' with a weapon of '${avatar1.aItem.name}' has been created.`);

const avatar2 = new avatar("Not100StatMan", 0);

console.log(avatar2.aName);