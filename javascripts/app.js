var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new Gauntlet.Armory.WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option

console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new Gauntlet.Armory.BroadSword());
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
      PlayerCharacter.setWeapon(new Gauntlet.Armory.Dagger());
    } else if (selectedWeapon === "BroadSword") {
      PlayerCharacter.setWeapon(new Gauntlet.Armory.BroadSword());
    } else if (selectedWeapon === "WarAxe") {
      PlayerCharacter.setWeapon(new Gauntlet.Armory.WarAxe());
    } else if (selectedWeapon === "Hammer") {
      PlayerCharacter.setWeapon(new Gauntlet.Armory.Hammer());
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
    RandomEnemy.playerName = "Orc";
    RandomEnemy.generateClass();
    RandomEnemy.setWeapon(new Gauntlet.Armory.Dagger);
    $('#enemy_image').attr('src', RandomEnemy.url)
    console.log(RandomEnemy.toString());
    // console.log(PlayerCharacter)

    $("#battleground").prepend("<p id='msg'>Welcome adventurer! You are " + PlayerCharacter.toString() + "<p>");
    $("#msg").hide().fadeIn(1000).fadeOut(1000, function() {
      $("#battleground").prepend("<p id='msg2'>Look out! It's " + RandomEnemy.toString() + "<p>")
      $("#msg2").hide().fadeIn(1000).fadeOut(1000);
    });
    $("#battleground").append("<button class='btn attackButton' id='battlegroundNext'>KILL</button>")

    $("#battlegroundNext").click(function () {
      //show combat stats
      $("#battleground").hide()
      $('#image').attr('src', PlayerCharacter.class.url)
      $('#battleArea').show()
      $('#player1_name').html(PlayerCharacter.playerName)
      $('#player2_name').html(RandomEnemy.playerName)
      $("#player1_stats").html(`Your health is ${PlayerCharacter.health}`);
      $("#player2_stats").html(`Enemy's health is ${RandomEnemy.health}`);

      //start combat math
      var rng = Math.floor((Math.random() * 2) + 1);
      if (rng === 1) {
        $("#attack").click(function () {
          Gauntlet.Battle("ThePlayer", PlayerCharacter, RandomEnemy)
        })
      } else {
        $("#attack").click(function () {
          Gauntlet.Battle("TheEnemy", RandomEnemy, PlayerCharacter)
        })
      }
    })
  })
}) //doc ready end
