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

    PlayerCharacter = new Gauntlet.Combatants.Human();
    //console.log(PlayerCharacter);
    PlayerCharacter.playerName = $("#player-name").val()
    $('.player1_name').html(PlayerCharacter.playerName)
    //console.log(PlayerCharacter.playerName)
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
    console.log(PlayerCharacter)
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

    $("#battleground").prepend("<p id='msg'>Welcome adventurer! You are " + PlayerCharacter.toString() + "<p>");
    $("#msg").hide().fadeIn(2000).fadeOut(2000, function() {
      $("#battleground").prepend("<p id='msg2'>Look out! It's " + RandomEnemy.toString() + "<p>")
      $("#msg2").hide().fadeIn(2000).fadeOut(2000);
    });


    $("#battleground").append("<button class='btn attackButton' id='battlegroundNext'>KILL</button>")
    $("#battlegroundNext").click(function () {
      $("#battleground").html("");
      $("#battleground").prepend("<div class='row' id='combatOutputRow'><div class='col-sm-4' id='playerOutputCol'></div><div class='col-sm-4' id='spacer'></div><div class='col-sm-4' id='enemyOutputCol'></div></div>")
      $("#playerOutputCol").append("<p id='healthMsg'>Your health is " + PlayerCharacter.health + "<p>");
      $("#enemyOutputCol").append("<p id='enemyHealthMsg'>Enemy's health is " + RandomEnemy.health + "<p>");
      $("#battleground").append("<button class='btn attackButton' id='attackButton'>Attack</button>")
      $("#battleground").prepend("<div class='col-sm-10' id='combatText2'></div>")
      $("#battleground").prepend("<div class='col-sm-10' id='combatText1'></div>")
      var rng = Math.floor((Math.random() * 2) + 1);
      if (rng === 1) {
        $("#battleground").prepend("<div class='col-sm-10 attackMsg' id='attackMsg'><p>Heck yes, you get to attack first</p></div>")
        $("#attackButton").click(function () {
          $("#attackMsg").hide();
          Gauntlet.Battle("ThePlayer", PlayerCharacter, RandomEnemy)
        })
      } else {
        $("#battleground").prepend("<div class='col-sm-10 attackMsg' id='attackMsg'><p>Oh noes, the enemy gets to attack first!</p></div>")
        $("#attackButton").click(function () {
          $("#attackMsg").hide();
          Gauntlet.Battle("TheEnemy", PlayerCharacter, RandomEnemy)
        })
      }
    })
}); //doc ready end
