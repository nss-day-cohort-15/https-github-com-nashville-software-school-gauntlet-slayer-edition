var Gauntlet = (function(Gauntlet) {
Gauntlet.Battle = function(whoGoesFirst, PlayerCharacter, RandomEnemy) {

  if (whoGoesFirst === "ThePlayer") {



    Gauntlet.Combat(PlayerCharacter, RandomEnemy)

  } else if (whoGoesFirst === "TheEnemy") {



    Gauntlet.Combat(RandomEnemy, PlayerCharacter)

  }
}


Gauntlet.Combat = function(first, second) {

  var hp1 = first.health;
  var hp2 = second.health;

  //click just happened
  second.health = Math.floor(hp2 - (first.strength * .01 * first.weapon.damage))
  first.health = Math.floor(hp1 - (second.strength * .01 * second.weapon.damage))
    $(".playerImg").fadeOut(3, function (){
      $(".playerAtk1").fadeIn(3).fadeOut(3, function () {
        $(".playerAtk2").fadeIn(3).delay(2).fadeOut(3, function () {
          $(".playerImg").fadeIn(3)
        })
      })
    })

    $(".orcImg").fadeOut(3, function (){
      $(".orcAtk1").fadeIn(5).delay(5).fadeOut(3, function () {
        $(".orcAtk2").fadeIn(5).delay(5).fadeOut(3, function () {
          $(".orcImg").fadeIn(3)
        })
      })
    })
    
    
    

  $(".dmgImg").fadeIn(30).fadeOut(250, function () {
      $(".dmgImg2").fadeIn(30).fadeOut(250)
    })
  // $("#battle_status_area").text(second.playerName + "'s health is now " + second.health);
  // $("#battle_status_area").append("<p>" + first.playerName + "'s health is now " + first.health + "</p>")
    if (second.health <= 0) {
      second.health = 0;
      $("#player2_stats").html(`${second.playerName} is dead!`)
      // $("#battle_status_area").show().text(first.playerName + " won!")
      $(".winImg").fadeIn(2000);
    } else if (first.health <= 0) {
        first.health = 0;
        $("#player1_stats").html(`${first.playerName} is dead!`)
        // $("#battle_status_area").show().text(second.playerName + " won!")
        $(".loseImg").fadeIn(2000);
      } else {
        $("#player2_stats").html(`Health: ${first.health}`)
        $('#player1_stats').html(`Health: ${first.health}`)
      }
    }



      




    // $("#battle_status_area").text(first.playerName + " attacked!").hide().fadeIn(1000).fadeOut(1000, function() {
      
     
      
        
          // $("#battle_status_area").text("Now " + second.playerName + " attacked!").hide().fadeIn(1000).fadeOut(1000, function() {
          
          // .hide().fadeIn(1000).fadeOut(1000, function() {
          
        // })
        // });
      // }
    // });
  







//working on combat text div appending to html -> it either gets hidden, or it appends/prepends an infinite amount
//then need to finish combat -> both characters attacking when the button is clicked, appropriate messages appearing
//then maybe working on character/combat structure:
//fix races/skins
//str modifiers
//weapon dmg modifiers
//weapon speed/crit/hands?  why would you not choot war axe every time lol
//int heroes/spells



 


  return Gauntlet;
})(Gauntlet || {})
