/*
  Test code to generate a human player and an orc player
 */
var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option

console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new BroadSword());
console.log(orc.toString());

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());


$(document).ready(function() { //start game ***


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
    // switch (nextCard) {
    //   case "card--class":
    //     moveAlong = ($("#player-name").val() !== "");

    //     break;
    //   case "card--weapon":
    //     moveAlong = ($("#player-name").val() !== "");

    //     break;
    // }

        if (nextCard === "card--class") {
          moveAlong = ($("#player-name").val() !== "");
        } else if (nextCard === "card--weapon") {
          moveAlong = ($("#player-name").val() !== "");
        } else if (nextCard === "card--battleground") {
          moveAlong = ($("#player-name").val() !== "");
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

  //star character
  var PlayerCharacter = {}

  // click event for classes
  $("#startCharacter").click(function(e) {
    newPlayerName = $("#player-Name").val()
    PlayerCharacter = new Gauntlet.Combatants.Player(newPlayerName);
    //console.log(PlayerCharacter)

    //return PlayerCharacter
  });



// click event for classes
  $(".class__link").click(function(e) {
    //console.log($(this).attr("id")) //shows id of button clicked on
    var selectedClass = $(this).attr("id");
    PlayerCharacter.class = new Gauntlet.GuildHall[selectedClass]();
    //console.log(PlayerCharacter.class)

  });


//click event for weapons
  $(".weapon__link").click(function(e) {
    //console.log($(this).attr("id")) //shows id of button clicked on
    var selectedWeapon = $(this).attr("id");

    if (selectedWeapon === "Dagger") {
      PlayerCharacter.setWeapon(new Dagger());
    } else if (selectedWeapon === "BroadSword") {
      PlayerCharacter.setWeapon(new BroadSword());
    } else if (selectedWeapon === "WarAxe") {
      PlayerCharacter.setWeapon(new WarAxe());
    }
    console.log(PlayerCharacter.weapon)





    // PlayerCharacter.setWeapon(new selectedWeapon());
    // PlayerCharacter.weapon = selectedWeapon;
    // console.log(PlayerCharacter.weapon)
  });

 $("#goButton").click(function(e) {
    PlayerCharacter.species = "Monster";
    //show created player
    console.log(PlayerCharacter.toString()); 

    //make random enemy
    var RandomEnemy = new Gauntlet.Combatants.Orc();
    RandomEnemy.playerName = "An orc";
    RandomEnemy.generateClass();
    RandomEnemy.setWeapon(new BroadSword());
    console.log(RandomEnemy.toString());
    // console.log(PlayerCharacter)

    $("#battleground").append("<p>" + PlayerCharacter.toString() + "<p>")
    $("#battleground").append("<p>Look out! It's " + RandomEnemy.toString() + "<p>")
    $("#battleground").append("<button class='btn' id='battlegroundNext'>Next</button>")
    $("#battlegroundNext").click(function () {
      $("#battleground").html("");
      $("#battleground").append("<p>Your health: " + PlayerCharacter.health + "<p>");
      $("#battleground").append("<button class='btn' id='attackButton'>Battle Time!</button>")
      var rng = Math.floor((Math.random() * 2) + 1);
      if (rng === 1) {
        console.log("Heck yes, you get to attack first")
        $("#attackButton").click(function () {
          Gauntlet.Battle("ThePlayer", PlayerCharacter, RandomEnemy)
        })
      } else {
        console.log("Oh snap, the enemy goes first")
        $("#attackButton").click(function () {
          Gauntlet.Battle("TheEnemy", PlayerCharacter, RandomEnemy)
        })
      }
    })
  });






}); //doc ready end