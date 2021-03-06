
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

          var allowedWeaponIDs = PlayerCharacter.class.allowedWeapon.map(id => `#${id}`).toString()
          $(allowedWeaponIDs).show()

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

  // click event for character name
  $("#startCharacter").click(function(e) {

    PlayerCharacter = new Gauntlet.Combatants.Human();
    //console.log(PlayerCharacter);
    PlayerCharacter.playerName = $("#player-name").val()
    $('.player1_name').html(PlayerCharacter.playerName)
    //console.log(PlayerCharacter.playerName)
    newPlayerName = $("#player-Name").val()
    PlayerCharacter = new Gauntlet.Combatants.Player(newPlayerName);
    // console.log(PlayerCharacter)

    //return PlayerCharacter
  });



// click event for classes
  $(".class__link").click(function(e) {
    //console.log($(this).attr("id")) //shows id of button clicked on
    var selectedClass = $(this).attr("id");
    if(selectedClass !== 'randomClass'){
      PlayerCharacter.class = new Gauntlet.GuildHall[selectedClass]();
    }
      else{
        PlayerCharacter.generateClass()
      }
    //console.log(PlayerCharacter.class)
  });


//click event for weapons
  $(".weapon__link").click(function(e) {
    // console.log($(this).attr("id")) //shows id of button clicked on
    var selectedWeapon = $(this).attr("id");
    // console.log(this);
    if (selectedWeapon === "Dagger") {
      PlayerCharacter.setWeapon(new Gauntlet.Armory.Dagger());
    } else if (selectedWeapon === "BroadSword") {
      PlayerCharacter.setWeapon(new Gauntlet.Armory.BroadSword());
    } else if (selectedWeapon === "WarAxe") {
      PlayerCharacter.setWeapon(new Gauntlet.Armory.WarAxe());
    } else if (selectedWeapon === "Hammer") {
      PlayerCharacter.setWeapon(new Gauntlet.Armory.Hammer());
    } else if (selectedWeapon === "ThrowingStars") {
      PlayerCharacter.setWeapon(new Gauntlet.Armory.ThrowingStars());
    } else if (selectedWeapon === "BoStaff") {
      PlayerCharacter.setWeapon(new Gauntlet.Armory.BoStaff());
    } else if (selectedWeapon === "Sphere") {
      PlayerCharacter.setWeapon(new Gauntlet.SpellBook.Sphere());
    }  else if (selectedWeapon === "Whirlwind") {
      PlayerCharacter.setWeapon(new Gauntlet.SpellBook.Whirlwind());
    }  

    // console.log(PlayerCharacter.weapon)

//click event for spells

    // PlayerCharacter.setWeapon(new selectedWeapon());
    // PlayerCharacter.weapon = selectedWeapon;
    // console.log(PlayerCharacter.weapon)
  });

 $("#goButton").click(function(e) {
    // console.log(PlayerCharacter)
    PlayerCharacter.species = "Human";
    //show created player
    // console.log(PlayerCharacter.toString());

    //make random enemy
    var RandomEnemy = new Gauntlet.Combatants.Orc();
    RandomEnemy.playerName = "An Orc";
    RandomEnemy.generateClass();
    RandomEnemy.generateWeapon();
    console.log(RandomEnemy);
    console.log(PlayerCharacter);

    // $("#battleground").prepend("<div class='row hideMe'><div class='col-sm-2'></div><div class='col-sm-8'><p id='msg' class='msg graphic'>Welcome adventurer! You are " + PlayerCharacter.toString() + "<p></div></div>");
    // $("#msg").hide().fadeIn(2000).fadeOut(1200, function() {
    //   $("#battleground").prepend("<div class='row hideMe'><div class='col-sm-2'></div><div class='col-sm-8'><p id='msg2' class='msg graphic'>Look out! It's " + RandomEnemy.toString() + "<p></div></div>")
    //   $("#msg2").hide().fadeIn(2000).fadeOut(1200);
    // });

    $("#narratorDiv").append("<p class='graphic' id='narratorP'>Welcome adventurer! You are " + PlayerCharacter.toString() + "<p>");
    $("#narratorDiv").hide().fadeIn(2000).delay(1000).fadeOut(1200, function() {
      $("#narratorP").text("Look out! It's " + RandomEnemy.toString() + "!")
      $("#narratorDiv").hide().fadeIn(2000).delay(1000).fadeOut(1200);
    })



    $("#battleground").append("<div class='row'><div class='col-sm-12 attackButtonDiv'><button class='btn attackButton graphic' id='battlegroundNext'>KILL</button></div></div>")

    $("#battlegroundNext").click(function () {
      $(".wallpaper").hide()
      //show combat stats
      $("#battleground").hide()
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
