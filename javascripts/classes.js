/*
  TODO: Modularize this code with IIFE
 */
var Gauntlet = (function(Gauntlet){

Gauntlet.GuildHall = {};

/*
  Base function for a player, or enemy, class (profession)
 */
Gauntlet.GuildHall.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  }
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
Gauntlet.GuildHall.Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
  this.allowedWeapon = [];
};
Gauntlet.GuildHall.Fighter.prototype = new Gauntlet.GuildHall.PlayerClass();


Gauntlet.GuildHall.Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
  this.allowedWeapon = ["BoStaff", "BroadSword", "Hammer"];
};
Gauntlet.GuildHall.Warrior.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
  this.allowedWeapon = ["BroadSword", "Hammer", "WarAxe"];
};
Gauntlet.GuildHall.Valkyrie.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
  this.allowedWeapon = ["BroadSword", "Hammer", "WarAxe"];
};
Gauntlet.GuildHall.Berserker.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
  this.allowedWeapon = ["Dagger", "BoStaff"];
};
Gauntlet.GuildHall.Monk.prototype = new Gauntlet.GuildHall.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
Gauntlet.GuildHall.Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  this.allowedWeapon = [];
};
Gauntlet.GuildHall.Mage.prototype = new Gauntlet.GuildHall.PlayerClass();


Gauntlet.GuildHall.Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  this.allowedWeapon = ["Sphere", ""];
};
Gauntlet.GuildHall.Shaman.prototype = new Gauntlet.GuildHall.Mage();


Gauntlet.GuildHall.Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
  this.allowedWeapon = ["Sphere", ""];
};
Gauntlet.GuildHall.Wizard.prototype = new Gauntlet.GuildHall.Mage();


Gauntlet.GuildHall.Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
  this.allowedWeapon = ["Sphere", ""];
};
Gauntlet.GuildHall.Conjurer.prototype = new Gauntlet.GuildHall.Mage();


Gauntlet.GuildHall.Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
  this.allowedWeapon = ["Sphere", ""];
};
Gauntlet.GuildHall.Sorcerer.prototype = new Gauntlet.GuildHall.Mage();

/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */
Gauntlet.GuildHall.Stealth = function() {
  this.healthBonus = 20;
  this.strengthBonus = -10;
  this.intelligenceBonus = 30;
  this.allowedWeapon = [];
};
Gauntlet.GuildHall.Stealth.prototype = new Gauntlet.GuildHall.PlayerClass();


Gauntlet.GuildHall.Thief = function() {
  this.name = "Thief";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus + 5;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  this.allowedWeapon = ["Dagger", "BoStaff"];
};
Gauntlet.GuildHall.Thief.prototype = new Gauntlet.GuildHall.Stealth();

Gauntlet.GuildHall.Ninja = function() {
  this.name = "Ninja";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  this.allowedWeapon = ["Dagger", "ThrowingStars", "BoStaff"];
};
Gauntlet.GuildHall.Ninja.prototype = new Gauntlet.GuildHall.Stealth();

Gauntlet.GuildHall.Assassin = function() {
  this.name = "Assassin";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  this.allowedWeapon = ["Dagger", "ThrowingStars", "Hammer", "BroadSword"];
};
Gauntlet.GuildHall.Assassin.prototype = new Gauntlet.GuildHall.Stealth();

  return Gauntlet;
})(Gauntlet || {})
