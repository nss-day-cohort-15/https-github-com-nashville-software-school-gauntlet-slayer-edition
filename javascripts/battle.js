var Gauntlet = (function(Gauntlet) {
Gauntlet.Battle = function(whoGoesFirst, PlayerCharacter, RandomEnemy) {
  if (whoGoesFirst === "ThePlayer") {
    console.log("you attacked!")
    //RandomEnemy.health -= (PlayerCharacter.weapon.damage * (PlayerCharacter.strength * .5))
    //console.log(RandomEnemy.health)
    //console.log(Gauntlet.Combatants.Player)

    Gauntlet.Combat(PlayerCharacter, RandomEnemy)

  } else if (whoGoesFirst === "TheEnemy") {
    console.log("They attacked!")
    //console.log(Gauntlet.Combatants.Player)

    Gauntlet.Combat(RandomEnemy, PlayerCharacter)

  }
}


Gauntlet.Combat = function(first, second) {
  //console.log(first, second)

  hp1 = first.health;
  hp2 = second.health;

  // console.log(first.health)
  // console.log(first.weapon)
  // console.log(first.strength)

  // console.log(second.health)
  // console.log(second.weapon)
  // console.log(second.strength)

  second.health = hp2 - (first.strength * .01 * first.weapon.damage)
  // console.log(second.health)

  // second.health = (second.health - ((first.strength * .01) * first.weapon.damage)) * rnjesus;
  console.log(second.health)
  console.log(second.playerName + "'s health is now " + second.health)
  



}


  return Gauntlet;
})(Gauntlet || {})