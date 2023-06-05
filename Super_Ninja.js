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
class Sensei extends Ninja{
    constructor(name) {
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
      }
    
      speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
      }
    }


const n1=new Ninja('yousef',100);
n1.sayName();
n1.showStats();
n1.drinkSake();
n1.showStats();
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats(); 



