// parent Vehicle class
class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.strength=3;
        this.speed = 3;
    }

    sayName() {
        
        console.log(`Name: ${this.name}`);

    }
    showStats(){
        console.log(`Name: ${this.name} health:${this.health} strength: ${this.strength} speed:${this.speed}`);

    }
    drinkSake(){
        this.health+=10;
    }

}



const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
const ninja2 = new Ninja("yousef",100);
ninja2.sayName();
ninja2.showStats();



