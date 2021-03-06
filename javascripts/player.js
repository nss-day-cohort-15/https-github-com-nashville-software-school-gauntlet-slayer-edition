/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = (function(Gauntlet){
Gauntlet.Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
Gauntlet.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;
  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk", "Shaman", "Wizard", 
  "Conjurer", "Sorcerer", "Assassin", "Thief", "Ninja"];
  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "beige";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ", //ternary!
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
}

// generating random weapon
Gauntlet.Combatants.Player.prototype.generateWeapon = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedWeapon.length - 1));

  // Get the string at the index
  var randomWeapon = this.allowedWeapon[random];

  // Composes the corresponding player class into the player object
  this.weapon = new Gauntlet.Armory[randomWeapon]();

  return this.weapon;
};

Gauntlet.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new Gauntlet.GuildHall[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

/*
  Define the base properties for a human in a
  constructor function.
 */
Gauntlet.Combatants.Human = function() {
  var randomSkin;

  this.species = "Human";
  this.intelligence = this.intelligence + 20;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

};
Gauntlet.Combatants.Human.prototype = new Gauntlet.Combatants.Player();


/*
  Define the base properties for a monster in a
  constructor function.
 */
Gauntlet.Combatants.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
  this.allowedClasses = ["Warrior", "Valkyrie", "Berserker", "Ninja", "Assassin"]
};

Gauntlet.Combatants.Monster.prototype = new Gauntlet.Combatants.Player();

  return Gauntlet;
})(Gauntlet || {})
