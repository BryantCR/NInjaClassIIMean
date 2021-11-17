class Ninja {

    /*constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }*/

    constructor(name){
        this.name = name;
        this.health = 100;
        var speed = 3;
        var strength = 3;

        this.showStats = function() {
            console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        }

    }
    
    sayName() {
        console.log("My name is " + this.name)
    }

    

    drinkSake() {
        this.health += 10;
    }



}

/*let alex = new Ninja( "Alex", 500, 25, 15 );
console.log( alex );
alex.showStats();*/
console.log( "*******************************************************" );
let Akali = new Ninja( "Akali");
console.log( Akali );
Akali.showStats();
Akali.sayName();
Akali.drinkSake();
Akali.showStats();

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