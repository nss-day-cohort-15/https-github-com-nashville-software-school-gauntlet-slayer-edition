
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

var PlayerCharacter = new Gauntlet.Combatants.Player(PlayerCharacter);

// click event for classes
  $("#startCharacter").click(function(e) {

    PlayerCharacter = new Gauntlet.Combatants.Human();
    //console.log(PlayerCharacter);
    PlayerCharacter.playerName = $("#player-name").val()
    //console.log(PlayerCharacter.playerName)
    //return PlayerCharacter
  });



// click event for classes
  $(".class__link").click(function(e) {
    //console.log($(this).attr("id")) //shows id of button clicked on
    var selectedClass = $(this).attr("id");
    PlayerCharacter.class = new Gauntlet.GuildHall[selectedClass]();
    //console.log(PlayerCharacter.class)
    //console.log(PlayerCharacter)
  });


//click event for weapons
  $(".weapon__link").click(function(e) {
    //console.log($(this).attr("id")) //shows id of button clicked on
    var selectedWeapon = $(this).attr("id");
    PlayerCharacter.weapon = selectedWeapon;
    console.log(PlayerCharacter.weapon)
  });

 $("#goButton").click(function(e) {
    console.log(PlayerCharacter)
  });



}); //doc ready end
