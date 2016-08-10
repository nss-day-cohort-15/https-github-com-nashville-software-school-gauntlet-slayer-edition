var Gauntlet = Gauntlet || {};
Gauntlet.Weapon = {};

Gauntlet.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

Gauntlet.Weapon.Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Gauntlet.Weapon.Dagger.prototype = new Gauntlet.Weapon();

Gauntlet.Weapon.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
Gauntlet.Weapon.BroadSword.prototype = new Gauntlet.Weapon();

Gauntlet.Weapon.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
Gauntlet.Weapon.WarAxe.prototype = new Gauntlet.Weapon();

