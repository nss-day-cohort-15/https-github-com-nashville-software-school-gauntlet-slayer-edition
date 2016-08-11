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

  if (hp2 <= 0) {
    $("#battleground").html("");
    $("#battleground").prepend("<p>" + first.playerName + " won!")
  } else if (hp1 <= 0) {
    $("#battleground").html("");
    $("#battleground").prepend("<p>" + second.playerName + " won!")
  } else {
    $("#battle_status_area").html(first.playerName + " attacked!")

    second.health = Math.floor(hp2 - ((first.strength * .01 * first.weapon.damage) * .5))
    // $('#player2_stats').html(`Your health is ${second.health}`)

    first.health = Math.floor(hp2 - ((second.strength * .01 * second.weapon.damage) * .5))

    // $("#player1_stats").html(`Your health is ${first.health}`);
    // $("#player2_stats").html(`Enemy's health is ${second.health}`);
  }

    $("#healthMsg").hide();
    $("#enemyHealthMsg").hide();
    $("#battle_status_area").text(first.playerName + " attacked!").hide().fadeIn(1000).fadeOut(1000, function() {
      second.health = Math.floor(hp2 - ((first.strength * .01 * first.weapon.damage) * .5))
      $("#battle_status_area").text(second.playerName + "'s health is now " + second.health).hide().fadeIn(1000).fadeOut(1000, function() {
      $("#player2_stats").html(second.playerName + "'s health is now " + second.health)
        if (second.health <= 0) {
          $("#battle_status_area").show().text(first.playerName + " won!")
        }
        else {
          $("#battle_status_area").text("Now " + second.playerName + " attacked!").hide().fadeIn(1000).fadeOut(1000, function() {
          first.health = Math.floor(hp1 - ((second.strength * .01 * second.weapon.damage) * .5))
          $("#battle_status_area").text(first.playerName + "'s health is now " + first.health).hide().fadeIn(1000).fadeOut(1000, function() {
          $('#player1_stats').html(`Your health is ${first.health}`)
            if (first.health <= 0) {
              $("#battle_status_area").show().text(second.playerName + " won!")
            }
        })
        });
      }
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



  // if (hp2 <= 0) {
  //   $("#battleground").html("");
  //   $("#battleground").prepend("<p>" + first.playerName + " won!")
  // } else if (hp1 <= 0) {
  //   $("#battleground").html("");
  //   $("#battleground").prepend("<p>" + second.playerName + " won!")
  // }


  //console.log(first, second)
  // console.log(second.playerName + "'s health is now " + second.health)
  // console.log(first.health)
  // console.log(first.weapon)
  // console.log(first.strength)

  // console.log(second.health)
  // console.log(second.weapon)
  // console.log(second.strength)



}  // paired with Guantlet.Combat method


  return Gauntlet;
})(Gauntlet || {})
