class Ninja {

    /*constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        if(this.health = undefined){
            this.health = 100;
        }
    }*/

    constructor(name){
        this.name = name;
        this.health = 100;
        var speed = 3;
        var strength = 3;

        this.showStats = function() {
            console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        }
        this.kick = function(ninja) {
            var damage = ninja.health -= 15 * strength;
            console.log("The Ninja " + ninja.name + " was kicked by " + name + " and lost " +damage+ " Health!");
        }
    }
    
    sayName() {
        console.log("My name is " + this.name)
    }

    drinkSake() {
        this.health += 10;
    }

    punch(ninja) {
        ninja.health -= 5;
        console.log("The Ninja " + ninja.name + " was punched and lost 5 Health!")
        //return this;
    }

    

}

/*let alex = new Ninja( "Alex", 500, 25, 15 );
console.log( alex );
alex.showStats();*/
//console.log( "*******************************************************" );
let Akali = new Ninja( "Akali");
let Shen = new Ninja( "Shen");
Shen.showStats();
Akali.punch(Shen);
Shen.showStats();
console.log( "*******************************************************" );
Akali.showStats();
Shen.kick(Akali);
Akali.showStats();
// console.log( Akali );
// Akali.showStats();
// Akali.sayName();
// Akali.drinkSake();
// Akali.showStats();

/*
	function Ninja(name) {
			this.name = name;
			this.health = 100;
			var speed = 3;
			var strength = 3;

			this.showStats = function() {
				console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
				return this;
			}
		}

		Ninja.prototype.sayName = function() {
			console.log("My name is " + this.name);
			return this;
		}

		Ninja.prototype.drinkSake = function(){
			this.health += 10;
			return this;
		}

		const ninja1 = new Ninja("Goemon");
		ninja1.sayName();
		ninja1.showStats();
*/