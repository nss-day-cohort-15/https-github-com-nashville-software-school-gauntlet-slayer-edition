
var Gauntlet = (function(Gauntlet){

Gauntlet.Armory = {};

Gauntlet.Armory.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

Gauntlet.Armory.Dagger = function() {
  this.name = "Dagger";
  this.damage = 4;
  this.hands = 1;
};
Gauntlet.Armory.Dagger.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.BroadSword = function() {
  this.name = "BroadSword";
  this.damage = 14;
  this.hands = 2;
};
Gauntlet.Armory.BroadSword.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.WarAxe = function() {
  this.name = "WarAxe";
  this.damage = 18;
  this.hands = 2;
};
Gauntlet.Armory.WarAxe.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Hammer = function() {
  this.name = "Hammer";
  this.damage = 15;
  this.hands = 2;
};
Gauntlet.Armory.Hammer.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.ThrowingStars = function() {
  this.name = "ThrowingStars";
  this.damage = 10;
  this.hands = 1;
};
Gauntlet.Armory.ThrowingStars.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.BoStaff = function() {
  this.name = "BoStaff";
  this.damage = 12;
  this.hands = 2;
};
Gauntlet.Armory.BoStaff.prototype = new Gauntlet.Armory.Weapon();

  return Gauntlet;
})(Gauntlet || {})
