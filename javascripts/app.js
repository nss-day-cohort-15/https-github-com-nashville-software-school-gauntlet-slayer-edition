/*
  Test code to generate a human player and an orc player
 */
// var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new Gauntlet.Weapon.WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new Gauntlet.Weapon.BroadSword());
console.log(orc.toString());


var path = document.querySelectorAll('.path');
console.log(path)
path.forEach(function(item){
  item.addEventListener('click', function(e){
    var value = e.currentTarget.id
    console.log(value)
    choosePath(value)
  })
})

function choosePath(val){
  if(val === 'Warrior'){
    var warrior = new Gauntlet.GuildHall.Warrior()
    console.log(warrior)
  }
  else if(val === 'Valkyrie'){
    var warrior = new Gauntlet.GuildHall.Valkyrie()
    console.log(warrior)
  }
  else if(val === 'Berserker'){
    var warrior = new Gauntlet.GuildHall.Berserker()
    console.log(warrior)
  }
  else if(val === 'Monk'){
    var warrior = new Gauntlet.GuildHall.Berserker()
  }
  else if(val === 'Wizard'){
    var warrior = new Gauntlet.GuildHall.Wizard()
  }
  else if(val === 'Sorcerer'){
    var warrior = new Gauntlet.GuildHall.Sorcerer()
  }
  else
}

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());


$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});
