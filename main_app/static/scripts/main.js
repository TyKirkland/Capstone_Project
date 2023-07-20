document.addEventListener("DOMContentLoaded", function() {
    const character1Element = document.getElementById("character1");
    const character2Element = document.getElementById("character2");
    
    const battleResultsElement = document.getElementById("battle_results");
    
    // this function is made to accept an html element
    function CharacterCreation(character){

        // attributes
        this.name = character.dataset.name;
        this.character_class = character.dataset.character_class;
        this.character_id = parseFloat(character.dataset.character_id);

        this.strength = parseFloat(character.dataset.strength);
        this.speed = parseFloat(character.dataset.speed);
        this.counter = parseFloat(character.dataset.counter);
        this.crit = parseFloat(character.dataset.crit);
        this.armor_piercing = parseFloat(character.dataset.armor_piercing);
        this.life_steal = parseFloat(character.dataset.life_steal);
        this.poison_chance = parseFloat(character.dataset.poison_chance);
        this.poison_damage = parseFloat(character.dataset.poison_damage);
        this.combo = parseFloat(character.dataset.combo);

        this.health = parseFloat(character.dataset.health);
        this.defense = parseFloat(character.dataset.defense);
        this.magic_defense = parseFloat(character.dataset.magic_defense);
        this.dodge = parseFloat(character.dataset.dodge);
        this.block = parseFloat(character.dataset.block);
        this.health_regen = parseFloat(character.dataset.health_regen);

        this.spell1_id = parseFloat(character.dataset.spell1_id);
        this.spell2_id = parseFloat(character.dataset.spell2_id);
        this.spell3_id = parseFloat(character.dataset.spell3_id);
        this.spell4_id = parseFloat(character.dataset.spell4_id);
        this.spell1_on_use = character.dataset.spell1_on_use;
        this.spell2_on_use = character.dataset.spell2_on_use;
        this.spell3_on_use = character.dataset.spell3_on_use;
        this.spell4_on_use = character.dataset.spell4_on_use;
        this.spell1_name = character.dataset.spell1_name;
        this.spell2_name = character.dataset.spell2_name;
        this.spell3_name = character.dataset.spell3_name;
        this.spell4_name = character.dataset.spell4_name;
        this.spell1_water_damage = parseFloat(character.dataset.spell1_water_damage);
        this.spell2_water_damage = parseFloat(character.dataset.spell2_water_damage);
        this.spell3_water_damage = parseFloat(character.dataset.spell3_water_damage);
        this.spell4_water_damage = parseFloat(character.dataset.spell4_water_damage);
        this.spell1_fire_damage = parseFloat(character.dataset.spell1_fire_damage);
        this.spell2_fire_damage = parseFloat(character.dataset.spell2_fire_damage);
        this.spell3_fire_damage = parseFloat(character.dataset.spell3_fire_damage);
        this.spell4_fire_damage = parseFloat(character.dataset.spell4_fire_damage);
        this.spell1_earth_damage = parseFloat(character.dataset.spell1_earth_damage);
        this.spell2_earth_damage = parseFloat(character.dataset.spell2_earth_damage);
        this.spell3_earth_damage = parseFloat(character.dataset.spell3_earth_damage);
        this.spell4_earth_damage = parseFloat(character.dataset.spell4_earth_damage);
        this.spell1_air_damage = parseFloat(character.dataset.spell1_air_damage);
        this.spell2_air_damage = parseFloat(character.dataset.spell2_air_damage);
        this.spell3_air_damage = parseFloat(character.dataset.spell3_air_damage);
        this.spell4_air_damage = parseFloat(character.dataset.spell4_air_damage);


        // methods
        // this is where each instance of an attack will take place, gets repeated on a loop in the battle function until there is one winner
        this.attack = function(opponent) {

            console.log(this)

            let resultElement1 = document.createElement("li");
            let resultElement2 = document.createElement("li");
            let resultElement3 = document.createElement("li");
            let br = document.createElement("br");
            let br2 = document.createElement("br");
            let br3 = document.createElement("br");

            let attackerHealthElement = document.getElementById(this.character_id);
            let defenderHealthElement = document.getElementById(opponent.character_id);
            
            let attackerStrength = getRandomNum(this.strength);
            let attackerDefense = getRandomNum(this.defense);
            let defenderStrength = getRandomNum(opponent.strength);
            let defenderDefense = getRandomNum(opponent.defense);

            let damage = attackerStrength - defenderDefense;

            if(damage < 0){
                // sets negative damage to 0
                damage = 0;
            }

            let defenderDodgeChance = opponent.dodge / 100;
            let defenderBlockChance = opponent.block / 100;
            let defenderCounterChance = opponent.counter / 100;
            let attackerDodgeChance = this.dodge / 100;
            let attackerBlockChance = this.block / 100;
            let attackerCounterChance = this.counter / 100;


            if (defenderBlockChance >= Math.random()) {
                const blockStatements = [
                    `${opponent.name} skillfully blocks the attack completely and nullifies the damage!`,
                    `${opponent.name} raises their shield just in time, blocking the attack and leaving ${this.name} surprised!`,
                    `With lightning-fast reflexes, ${opponent.name} intercepts the attack and nullifies the damage!`,
                    `Like a fortress, ${opponent.name}'s defense holds strong against the incoming assault!`,
                    `In an impressive display of defensive prowess, ${opponent.name} repels the attack effortlessly!`,
                    `${opponent.name} evades the attack flawlessly, proving their mastery in defensive maneuvers!`,
                ];
                const randomBlockStatement = blockStatements[Math.floor(Math.random() * blockStatements.length)];
                
                resultElement1.textContent = randomBlockStatement;
                resultElement1.style.color = "gold";
                battleResultsElement.prepend(resultElement3);
                
                if (defenderCounterChance >= Math.random()) {
                  const counterStatements = [
                    `${opponent.name} swiftly counterattacks, catching ${this.name} off guard and dealing a powerful blow!`,
                    `Seizing the opportunity, ${opponent.name} launches a counterstrike, striking back at ${this.name} with unexpected force!`,
                    `Responding with precision, ${opponent.name} retaliates and delivers a devastating counterattack to ${this.name}!`,
                    `With a calculated response, ${opponent.name} turns defense into offense, surprising ${this.name} with a fierce counterassault!`,
                    `${opponent.name} skillfully counters, leaving ${this.name} momentarily defenseless against their swift and accurate strikes!`,
                    `${opponent.name} channels the energy of the blocked attack into a powerful counter, hitting ${this.name} with incredible force!`,
                    ];
                  const randomCounterStatement = counterStatements[Math.floor(Math.random() * counterStatements.length)];
                
                  damage = defenderStrength - attackerDefense;
                  if(damage <= 0){
                    resultElement2.textContent = ` ${opponent.name} turns with the momentum, striking ${this.name} but dealing no damage!`;
                  }
                  else{
                      resultElement2.textContent = randomCounterStatement + ` It inflicts ${damage} damage to ${this.name}!`;
                      this.health -= damage;
                      attackerHealthElement.textContent = `${this.health} Health`;
                  }
                  resultElement2.style.color = "magenta";
                  battleResultsElement.prepend(resultElement2);
                }

                const attackStatements = [
                    `${this.name} launches a powerful attack at ${opponent.name}!`,
                    `${this.name} strikes swiftly and forcefully at ${opponent.name}!`,
                    `${this.name} tries for a solid blow to ${opponent.name}!`,
                    `With determination, ${this.name} swings forward to strike ${opponent.name}!`,
                    `Taking aim, ${this.name} unleashes an attack on ${opponent.name}!`,
                ];

                const randomAttackStatement = attackStatements[Math.floor(Math.random() * attackStatements.length)];
                resultElement3.textContent = randomAttackStatement;
                
                battleResultsElement.prepend(resultElement1);
                battleResultsElement.prepend(resultElement3);
                battleResultsElement.prepend(br);
                battleResultsElement.prepend(br2);
                battleResultsElement.prepend(br3);

                
            }

            else if (defenderDodgeChance >= Math.random()) {
                const attackStatements = [
                    `${this.name} launches a powerful attack at ${opponent.name}!`,
                    `${this.name} strikes swiftly and forcefully at ${opponent.name}!`,
                    `${this.name} tries for a solid blow to ${opponent.name}!`,
                    `With determination, ${this.name} swings forward to strike ${opponent.name}!`,
                    `Taking aim, ${this.name} unleashes an attack on ${opponent.name}!`,
                ];

                const dodgeStatements = [
                  `${opponent.name} gracefully dodges ${this.name}'s attack, evading it with finesse!`,
                  `${opponent.name} displays remarkable agility as they effortlessly dodge ${this.name}'s incoming strike!`,
                  `With incredible reflexes, ${opponent.name} sidesteps ${this.name}'s attack, narrowly avoiding any harm!`,
                  `In a display of acrobatic skill, ${opponent.name} somersaults away, skillfully dodging ${this.name}'s attack!`,
                  `${opponent.name} anticipates the attack and swiftly moves out of harm's way, leaving ${this.name} frustrated!`,
                ];
                
                const randomDodgeStatement = dodgeStatements[Math.floor(Math.random() * dodgeStatements.length)];
                const randomAttackStatement = attackStatements[Math.floor(Math.random() * attackStatements.length)];

                resultElement1.textContent = randomAttackStatement;
                resultElement2.textContent = randomDodgeStatement;
                resultElement2.style.color = "cyan";
                battleResultsElement.prepend(resultElement2);
                battleResultsElement.prepend(resultElement1);
                battleResultsElement.prepend(br, br2, br3);
            }
            
            else if(damage > 0){

                if (attackerStrength >= 80) {
                    resultElement1.textContent = `${this.name} unleashes a devastating attack on ${opponent.name} with unmatched strength!`;
                    resultElement2.textContent = `The sheer force of the attack overwhelms ${opponent.name}!`;
                    resultElement3.textContent = `${opponent.name} sustains a massive ${damage} damage!`;
                    resultElement3.style.color = "red";
                  
                    battleResultsElement.prepend(resultElement3);
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                    battleResultsElement.prepend(br);
                    battleResultsElement.prepend(br2);
                    battleResultsElement.prepend(br3);
                }
                else if (attackerStrength >= 60) {
                    resultElement1.textContent = `${this.name} launches a powerful attack at ${opponent.name}!`;
                    resultElement2.textContent = `${opponent.name} tries to defend, but ${this.name}'s strength overpowers the defense!`;
                    resultElement3.textContent = `${opponent.name} suffers ${damage} damage!`;
                    resultElement3.style.color = "red";
                
                    battleResultsElement.prepend(resultElement3);
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                    battleResultsElement.prepend(br);
                    battleResultsElement.prepend(br2);
                    battleResultsElement.prepend(br3);
                } 
                else if (attackerStrength >= 40) {
                    resultElement1.textContent = `${this.name} strikes swiftly and forcefully at ${opponent.name}!`;
                    resultElement2.textContent = `${opponent.name} tries to block, but the attack breaks through the defense!`;
                    resultElement3.textContent = `${opponent.name} receives ${damage} damage!`;
                    resultElement3.style.color = "red";
                
                    battleResultsElement.prepend(resultElement3);
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                    battleResultsElement.prepend(br);
                    battleResultsElement.prepend(br2);
                    battleResultsElement.prepend(br3);
                } 
                else if (attackerStrength >= 20) {
                    resultElement1.textContent = `${this.name} delivers a solid blow to ${opponent.name}!`;
                    resultElement2.textContent = `Despite ${opponent.name}'s attempt to counter, the attack lands successfully!`;
                    resultElement3.textContent = `${opponent.name} takes ${damage} damage!`;
                    resultElement3.style.color = "red";
                
                    battleResultsElement.prepend(resultElement3);
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                    battleResultsElement.prepend(br);
                    battleResultsElement.prepend(br2);
                    battleResultsElement.prepend(br3);
                } 
                else {
                    resultElement1.textContent = `${this.name} launches an attack at ${opponent.name}!`;
                    resultElement2.textContent = `${opponent.name} manages to defend against the attack but still takes ${damage} damage!`;
                    resultElement2.style.color = "red";
                
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                    battleResultsElement.prepend(br);
                    battleResultsElement.prepend(br2);
                    battleResultsElement.prepend(br3);
                }

                opponent.health -= damage
                defenderHealthElement.textContent = `${opponent.health} Health`;

            }
            else{
                if (defenderDefense >= 80) {
                    resultElement3.textContent = `${this.name} tries to attack!`
                    resultElement1.textContent = ` ${opponent.name}'s incredible defense holds!`;
                    resultElement2.textContent = ` No damage is inflicted on ${opponent.name}!`;
                    resultElement2.style.color = "blue";
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                    battleResultsElement.prepend(resultElement3);
                    battleResultsElement.prepend(br);
                    battleResultsElement.prepend(br2)
                    battleResultsElement.prepend(br3);
                } 
                else if (defenderDefense >= 60) {
                    resultElement3.textContent = `${this.name} attacks!`
                    resultElement1.textContent = ` ${opponent.name} skillfully stops the attack with his armor!`;
                    resultElement2.textContent = ` The defense successfully nullifies the damage!`;
                    resultElement2.style.color = "blue";
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                    battleResultsElement.prepend(resultElement3);
                    battleResultsElement.prepend(br);
                    battleResultsElement.prepend(br2);
                    battleResultsElement.prepend(br3);
                } 
                else if (defenderDefense >= 40) {
                    resultElement3.textContent = `${this.name} attacks!`
                    resultElement1.textContent = ` ${opponent.name} swiftly intercepts!`;
                    resultElement2.textContent = ` The defense effectively mitigates the damage!`;
                    resultElement2.style.color = "blue";
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                    battleResultsElement.prepend(resultElement3);
                    battleResultsElement.prepend(br);
                    battleResultsElement.prepend(br2);
                    battleResultsElement.prepend(br3);
                } 
                else if (defenderDefense >= 20) {
                    resultElement3.textContent = `${this.name} swings forward!`
                    resultElement1.textContent = ` ${opponent.name} manages to withstand the attack!`;
                    resultElement2.textContent = ` The defense stops the damage!`;
                    resultElement2.style.color = "blue";
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                    battleResultsElement.prepend(resultElement3);
                    battleResultsElement.prepend(br);
                    battleResultsElement.prepend(br2);
                    battleResultsElement.prepend(br3);
                } 
                else {
                    resultElement3.textContent = ` ${this.name} stumbles forward and swings`;
                    resultElement1.textContent = ` ${opponent.name} trips but somehow withstands the attack!`;
                    resultElement2.textContent = ` No damage is taken by ${opponent.name}!`;
                    resultElement2.style.color = "blue";
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                    battleResultsElement.prepend(resultElement3);
                    battleResultsElement.prepend(br);
                    battleResultsElement.prepend(br2);
                    battleResultsElement.prepend(br3);
                }
            }
            if(this.health < 0){
                let resultElement1 = document.createElement("li");
                let br1 = document.createElement("br");
                let br2 = document.createElement("br");
                let br3 = document.createElement("br");
                resultElement1.textContent = `${opponent.name} Wins!!!`;
                battleResultsElement.prepend(resultElement1);
                battleResultsElement.prepend(br1);
                battleResultsElement.prepend(br2);
                battleResultsElement.prepend(br3);
            }
            else if(opponent.health < 0){
                let resultElement1 = document.createElement("li");
                let br1 = document.createElement("br");
                let br2 = document.createElement("br");
                let br3 = document.createElement("br");
                resultElement1.textContent = `${this.name} Wins!!!`;
                battleResultsElement.prepend(resultElement1);
                battleResultsElement.prepend(br1);
                battleResultsElement.prepend(br2);
                battleResultsElement.prepend(br3);
            }
        }

        this.spell_attack = function(opponent, spell){

            let resultElement1 = document.createElement("li");
            let resultElement2 = document.createElement("li");
            let resultElement3 = document.createElement("li");
            let br1 = document.createElement("br");
            let br2 = document.createElement("br");
            let br3 = document.createElement("br");
            
            let spell_id = spell.dataset.spell_id
            let name = spell.dataset.name
            let on_use = spell.dataset.on_use

            // offensive numbers
            let water_damage = getRandomNum(parseInt(spell.dataset.water_damage))
            let earth_damage = getRandomNum(parseInt(spell.dataset.earth_damage))
            let fire_damage = getRandomNum(parseInt(spell.dataset.fire_damage))
            let air_damage = getRandomNum(parseInt(spell.dataset.air_damage))

            // defensive numbers
            let defenderMagicDefense = parseInt(opponent.magic_defense)

            console.log(resultElement1)
            resultElement1.textContent = `${this.name} casts ${name}!`;
            resultElement2.textContent = `${on_use}`
            resultElement3.textContent = `${opponent.name} takes ${water_damage + earth_damage + fire_damage + air_damage} damage!`;
            resultElement2.style.color = "plum";
            resultElement3.style.color = "red";
            battleResultsElement.prepend(resultElement3);
            battleResultsElement.prepend(resultElement2);
            battleResultsElement.prepend(resultElement1);
            battleResultsElement.prepend(br1);
            battleResultsElement.prepend(br2);
            battleResultsElement.prepend(br3);

        }
    }

    // creating each character based on the elements retrieved from the html file
    const character1 = new CharacterCreation(character1Element);
    const character2 = new CharacterCreation(character2Element);

    // efficiency function
    function getRandomNum(num){
        return Math.floor(Math.random() * (num + 1));
    }

    let character1Turn = true;

    function handleKeyPress(){
        if(character1.health > 0 && character2.health > 0) {
            if(character1Turn === true){ 
                character1.attack(character2);
                character1Turn = false;
            }
            else{
                character2.attack(character1);
                character1Turn = true;
            }
        }
    }

    function handleSpellPress(spell){
        if(character1.health > 0 && character2.health > 0) {
            if(character1Turn === true && spell.target.id.slice(9,10) === "1"){
                character1.spell_attack(character2, spell.target);
                character1Turn = false;
            }
            if(character1Turn === false && spell.target.id.slice(9,10) === "2"){
                character2.spell_attack(character1, spell.target);
                character1Turn = true;
            }
        }
    }

    // function that will loop until there is a winner
    function Battle(character1, character2) {
        if(character1.speed < character2.speed) {
            character1Turn = false
        }
        // while(character1.health > 0 && character2.health > 0) {
        //     if(character1.speed > character2.speed) {
        //         character1.attack(character2);
        //         if(character2.health <= 0){
        //             break;
        //         }
        //         character2.attack(character1);
        //     }
        //     else{
        //         character2.attack(character1);
        //         if(character1.health <= 0){
        //             break;
        //         }
        //         character1.attack(character2);
        //     }
        document.addEventListener("keydown", handleKeyPress);
        
        const character1_spell1 = document.getElementById("character1_spell1");
        const character1_spell2 = document.getElementById("character1_spell2");
        const character1_spell3 = document.getElementById("character1_spell3");
        const character1_spell4 = document.getElementById("character1_spell4");

        const character2_spell1 = document.getElementById("character2_spell1");
        const character2_spell2 = document.getElementById("character2_spell2");
        const character2_spell3 = document.getElementById("character2_spell3");
        const character2_spell4 = document.getElementById("character2_spell4");

        if(character1_spell1){
            character1_spell1.addEventListener("click", handleSpellPress);
        }
        if(character1_spell2){
            character1_spell2.addEventListener("click", handleSpellPress);
        }
        if(character1_spell3){
            character1_spell3.addEventListener("click", handleSpellPress);
        }
        if(character1_spell4){
            character1_spell4.addEventListener("click", handleSpellPress);
        }

        if(character2_spell1){
            character2_spell1.addEventListener("click", handleSpellPress);
        }
        if(character2_spell2){
            character2_spell2.addEventListener("click", handleSpellPress);
        }
        if(character2_spell3){
            character2_spell3.addEventListener("click", handleSpellPress);
        }
        if(character2_spell4){
            character2_spell4.addEventListener("click", handleSpellPress);
        }

        console.log(character1_spell1.dataset.name)
        console.log(character1_spell2)
        console.log(character1Element)
        console.log(character1_spell4)
    }
        // after the loop completes I need to output the winner here

    // this is starting the battle!
    Battle(character1, character2);

})

$(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $(".dropdown").click(function(event) {
    $(this).toggleClass("is-active")
  })
