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

  var hp1 = first.health;
  var hp2 = second.health;

  // if (hp2 <= 0) {
  //   $("#battleground").html("");
  //   $("#battleground").prepend("<p>" + first.playerName + " won!")
  // } else if (hp1 <= 0) {
  //   $("#battleground").html("");
  //   $("#battleground").prepend("<p>" + second.playerName + " won!")
  // } else {
    // $("#combatText1").text(first.playerName + " attacked!")
    // second.health = Math.floor(hp2 - ((first.strength * .01 * first.weapon.damage) * .5))
    // $("#combatText2").text(second.playerName + "'s health is now " + second.health)
    // $("#combatText1").text("Now " + second.playerName + " attacked!")
    // first.health = Math.floor(hp1 - ((second.strength * .01 * second.weapon.damage) * .5))
    // $("#combatText2").text(first.playerName + "'s health is now " + first.health)
    $("#healthMsg").hide();
    $("#enemyHealthMsg").hide();
    $("#combatText1").text(first.playerName + " attacked!").hide().fadeIn(1000).fadeOut(1000, function() {
      second.health = Math.floor(hp2 - ((first.strength * .01 * first.weapon.damage) * .5))
      $("#combatText2").text(second.playerName + "'s health is now " + second.health).hide().fadeIn(1000).fadeOut(2000, function() {
        $("#combatText1").text("Now " + second.playerName + " attacked!").hide().fadeIn(1000).fadeOut(1000, function() {
          first.health = Math.floor(hp1 - ((second.strength * .01 * second.weapon.damage) * .5))
          $("#combatText2").text(first.playerName + "'s health is now " + first.health).hide().fadeIn(1000).fadeOut(2000, function() {
        if (hp2 <= 0) {
          $("#battleground").html("");
          $("#battleground").prepend("<p>" + first.playerName + " won!")
        } else if (hp1 <= 0) {
          $("#battleground").html("");
          $("#battleground").prepend("<p>" + second.playerName + " won!")
        }

            
        })
      });
    });
  })

//working on combat text div appending to html -> it either gets hidden, or it appends/prepends an infinite amount
//then need to finish combat -> both characters attacking when the button is clicked, appropriate messages appearing
//then maybe working on character/combat structure:
//fix races/skins
//str modifiers
//weapon dmg modifiers
//weapon speed/crit/hands?  why would you not choot war axe every time lol
//int heroes/spells

 

  

  //console.log(first, second)
  // console.log(second.playerName + "'s health is now " + second.health)
  // console.log(first.health)
  // console.log(first.weapon)
  // console.log(first.strength)

  // console.log(second.health)
  // console.log(second.weapon)
  // console.log(second.strength)



}


  return Gauntlet;
})(Gauntlet || {})