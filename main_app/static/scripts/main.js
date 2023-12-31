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
        this.poisoned = false;
        this.combo = parseFloat(character.dataset.combo);
        this.combo_turn = false;

        this.health = parseFloat(character.dataset.health);
        this.max_health = parseFloat(character.dataset.health);
        this.defense = parseFloat(character.dataset.defense);
        this.magic_defense = parseFloat(character.dataset.magic_defense);
        this.dodge = parseFloat(character.dataset.dodge);
        this.block = parseFloat(character.dataset.block);
        this.health_regen = parseFloat(character.dataset.health_regen);
        this.turn_counter = 0;

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


            let resultElement1 = document.createElement("li");
            let resultElement2 = document.createElement("li");
            let resultElement3 = document.createElement("li");
            let resultElement4 = document.createElement("li");
            let healthRegenElement = document.createElement("li");
            let poisonElement = document.createElement("li");
            let critElement = document.createElement("li");
            let armorPiercingElement = document.createElement("li");
            let lifeStealElement = document.createElement("li");
            let comboElement = document.createElement("li");
            let victoryElement = document.createElement("li");
            healthRegenElement.style.color = "yellow";
            poisonElement.style.color = "green";
            critElement.style.color = "lightpink";
            armorPiercingElement.style.color = "orange";
            lifeStealElement.style.color = "lightgray";
            comboElement.style.color = "violet";
            let br1 = document.createElement("br");
            let br2 = document.createElement("br");
            let br3 = document.createElement("br");
            let br4 = document.createElement("br");
            let br5 = document.createElement("br");

            let attackerHealthElement = document.getElementById(this.character_id);
            let defenderHealthElement = document.getElementById(opponent.character_id);
            
            // storing all the stat variables so I can use them/access them easily
            let defenderStrength = getRandomNum(opponent.strength);
            let defenderCounterChance = opponent.counter / 100;
            let defenderCritChance = opponent.crit / 100;
            let defenderArmorPiercingChance = opponent.armor_piercing / 100;
            let defenderLifeSteal = opponent.life_steal / 100;
            let defenderPoisonChance = opponent.poison_chance / 100;
            let defenderPoisonDamage = opponent.poison_damage;
            let defenderComboChance = opponent.combo / 100;

            let defenderDefense = getRandomNum(opponent.defense);
            let defenderDodgeChance = opponent.dodge / 100;
            let defenderBlockChance = opponent.block / 100;
            let defenderHealthRegen = opponent.health_regen;
            
            // remember you need to target the health attribute directly so it updates in each model

            let attackerStrength = getRandomNum(this.strength);
            let attackerCounterChance = this.counter / 100;
            let attackerCritChance = this.crit / 100;
            let attackerArmorPiercingChance = this.armor_piercing / 100;
            let attackerLifeSteal = this.life_steal / 100;
            let attackerPoisonChance = this.poison_chance / 100;
            let attackerPoisonDamage = this.poison_damage;
            let attackerComboChance = this.combo / 100;
            
            let attackerDefense = getRandomNum(this.defense);
            let attackerDodgeChance = this.dodge / 100;
            let attackerBlockChance = this.block / 100;
            let attackerHealthRegen = this.health_regen;

            let attackerDamage = attackerStrength - defenderDefense;
            let defenderDamage = defenderStrength - attackerDefense;

            
            
            
            // implimenting armor piercing functionality before crit chance
            // also need to do it before they get set to 0
            if(attackerArmorPiercingChance > Math.random()){
                attackerDamage += defenderDefense;
                armorPiercingElement.textContent = `${this.name} pierces through ${opponent.name}'s defense!`;
            }
            
            // sets negative damage to 0
            if(attackerDamage < 0){
                attackerDamage = 0;
            }
            if(defenderDamage < 0){
                defenderDamage = 0;
            }
            
            // Here is where the logic starts!
            
            // implimenting crit chance functionality
            if(attackerCritChance > Math.random()){
                attackerDamage = attackerDamage * 2;
                critElement.textContent = `${this.name} crits!`;
            }
            
            // implimenting life steal functionality
            let attackerLifeStealAmount = attackerDamage * attackerLifeSteal;
            let defenderLifeStealAmount = defenderDamage * defenderLifeSteal;

            attackerLifeStealAmount = Math.floor(attackerLifeStealAmount);
            defenderLifeStealAmount = Math.floor(defenderLifeStealAmount);

            if(attackerLifeStealAmount > 0 && attackerLifeSteal >= Math.random()){
                lifeStealElement.textContent = `${this.name} steals ${attackerLifeStealAmount} Health!`;
            }

            // implimenting health regen functionality, 15% chance to activate
            // also doesn't get activated on a combo turn
            if(.25 > Math.random() && this.combo_turn == false && this.health !== this.max_health && this.health_regen > 0){
                this.health = this.health + this.health_regen;
                // make sure not to surpass max health!
                if(this.health > this.max_health){
                    this.health = this.max_health;
                }
                attackerHealthElement.textContent = `${this.health} Health`;
                healthRegenElement.textContent = `${this.name} regenerated ${this.health_regen} Health`;
            }

            // make sure to regen first and then apply the poison damage
            // poisoned character gets ticked at the start of his turn after he has a chance to regen health
            if(this.poisoned == true){
                this.health = this.health - opponent.poison_damage;
                attackerHealthElement.textContent = `${this.health} Health`;
                if(this.health <= 0){
                    // outputting different messages depending on if they hit the health regen chance as well
                    if(healthRegenElement.textContent == ""){
                        poisonElement.textContent = `${this.name} takes ${opponent.poison_damage} damage from poison!`;
                        resultElement1.textContent = `${this.name} succumbs under the poison's influence.`
                        battleResultsElement.prepend(resultElement1);
                        resultElement1.style.color = "red";
                        battleResultsElement.prepend(poisonElement);
                        battleResultsElement.prepend(br1);
                        battleResultsElement.prepend(br2);
                        victoryElement.textContent = `${opponent.name} Wins!!!`;
                        battleResultsElement.prepend(victoryElement);
                        battleResultsElement.prepend(br3);
                        battleResultsElement.prepend(br4);
                        battleResultsElement.prepend(br5);
                        return;
                    }
                    else{
                        poisonElement.textContent = `${this.name} takes ${opponent.poison_damage} damage from poison!`;
                        resultElement1.textContent = `Despite ${this.name}'s best efforts the poison prevails!`
                        battleResultsElement.prepend(resultElement1);
                        resultElement1.style.color = "red";
                        battleResultsElement.prepend(poisonElement);
                        battleResultsElement.prepend(healthRegenElement);
                        battleResultsElement.prepend(br1);
                        battleResultsElement.prepend(br2);
                        victoryElement.textContent = `${opponent.name} Wins!!!`;
                        battleResultsElement.prepend(victoryElement);
                        battleResultsElement.prepend(br3);
                        battleResultsElement.prepend(br4);
                        battleResultsElement.prepend(br5);
                        return
                    }
                }
                else{
                    poisonElement.textContent = `${this.name} takes ${opponent.poison_damage} damage from poison!`;
                }
            }



            if (defenderDodgeChance >= Math.random()) {
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
                if(poisonElement.textContent != '' && this.poisoned == true){
                    battleResultsElement.prepend(poisonElement);
                }
                battleResultsElement.prepend(br1);
                battleResultsElement.prepend(br2);
                battleResultsElement.prepend(br3);
            }

            else if(defenderBlockChance >= Math.random()) {
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
                
                    if(defenderDamage <= 0){
                        resultElement2.textContent = ` ${opponent.name} turns with the momentum, striking ${this.name} but dealing no damage!`;
                    }
                    else{
                        if(defenderLifeStealAmount > 0 && defenderLifeSteal >= Math.random()){
                            lifeStealElement.textContent = `${opponent.name} steals ${defenderLifeStealAmount} Health!`;
                            battleResultsElement.prepend(lifeStealElement);
                            opponent.health += defenderLifeStealAmount;
                            if(opponent.health > opponent.max_health){
                                opponent.health = opponent.max_health;
                            }
                            defenderHealthElement.textContent = `${opponent.health} Health`;            
                        }
                        resultElement2.textContent = randomCounterStatement + ` It inflicts ${defenderDamage} damage to ${this.name}!`;
                        this.health -= defenderDamage;
                        attackerHealthElement.textContent = `${this.health} Health`;
                    }
                    if(defenderPoisonChance > Math.random() && this.poisoned == false){
                        this.poisoned = true;
                        let defenderPoisonElement = document.createElement('li');
                        defenderPoisonElement.textContent = `${opponent.name} inflicts ${this.name} with poison!`;
                        defenderPoisonElement.style.color = 'green';
                        battleResultsElement.prepend(defenderPoisonElement);
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
                if(poisonElement.textContent != '' && this.poisoned == true){
                    battleResultsElement.prepend(poisonElement);
                }
                battleResultsElement.prepend(br1);
                battleResultsElement.prepend(br2);
                battleResultsElement.prepend(br3);
            }
            else if(attackerDamage > 0){
                if(attackerPoisonChance > Math.random() && opponent.poisoned == false){
                    opponent.poisoned = true;
                    let attackerPoisonElement = document.createElement('li');
                    attackerPoisonElement.textContent = `${this.name} inflicts ${opponent.name} with poison!`;
                    attackerPoisonElement.style.color = 'green';
                    battleResultsElement.prepend(attackerPoisonElement);
                }

                if (attackerStrength >= 80) {
                    resultElement1.textContent = `${this.name} unleashes a devastating attack on ${opponent.name} with unmatched strength!`;
                    resultElement2.textContent = `The sheer force of the attack overwhelms ${opponent.name}!`;
                    resultElement3.textContent = `${opponent.name} sustains a massive ${attackerDamage} damage!`;
                    resultElement3.style.color = "red";
                  
                    if(lifeStealElement.textContent != ''){
                        battleResultsElement.prepend(lifeStealElement);
                        this.health += attackerLifeStealAmount;
                        if(this.health > this.max_health){
                            this.health = this.max_health;
                        }
                        attackerHealthElement.textContent = `${this.health} Health`;        
                    }    
                    battleResultsElement.prepend(resultElement3);
                    if(critElement.textContent != ''){
                        battleResultsElement.prepend(critElement);
                    }    
                    if(armorPiercingElement.textContent != ''){
                        battleResultsElement.prepend(armorPiercingElement);
                    }    
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                }
                else if (attackerStrength >= 60) {
                    resultElement1.textContent = `${this.name} launches a powerful attack at ${opponent.name}!`;
                    resultElement2.textContent = `${opponent.name} tries to defend, but ${this.name}'s strength overpowers the defense!`;
                    resultElement3.textContent = `${opponent.name} suffers ${attackerDamage} damage!`;
                    resultElement3.style.color = "red";
                
                    if(lifeStealElement.textContent != ''){
                        battleResultsElement.prepend(lifeStealElement);
                        this.health += attackerLifeStealAmount;
                        if(this.health > this.max_health){
                            this.health = this.max_health;
                        }
                        attackerHealthElement.textContent = `${this.health} Health`;        
                    }    
                    battleResultsElement.prepend(resultElement3);
                    if(critElement.textContent != ''){
                        battleResultsElement.prepend(critElement);
                    }    
                    if(armorPiercingElement.textContent != ''){
                        battleResultsElement.prepend(armorPiercingElement);
                    }    
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                } 
                else if (attackerStrength >= 40) {
                    resultElement1.textContent = `${this.name} strikes swiftly and forcefully at ${opponent.name}!`;
                    resultElement2.textContent = `${opponent.name} tries to block, but the attack breaks through the defense!`;
                    resultElement3.textContent = `${opponent.name} receives ${attackerDamage} damage!`;
                    resultElement3.style.color = "red";
                
                    if(lifeStealElement.textContent != ''){
                        battleResultsElement.prepend(lifeStealElement);
                        this.health += attackerLifeStealAmount;
                        if(this.health > this.max_health){
                            this.health = this.max_health;
                        }
                        attackerHealthElement.textContent = `${this.health} Health`;        
                    }    
                    battleResultsElement.prepend(resultElement3);
                    if(critElement.textContent != ''){
                        battleResultsElement.prepend(critElement);
                    }    
                    if(armorPiercingElement.textContent != ''){
                        battleResultsElement.prepend(armorPiercingElement);
                    }    
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                } 
                else if (attackerStrength >= 20) {
                    resultElement1.textContent = `${this.name} delivers a solid blow to ${opponent.name}!`;
                    resultElement2.textContent = `Despite ${opponent.name}'s attempt to counter, the attack lands successfully!`;
                    resultElement3.textContent = `${opponent.name} takes ${attackerDamage} damage!`;
                    resultElement3.style.color = "red";
                
                    if(lifeStealElement.textContent != ''){
                        battleResultsElement.prepend(lifeStealElement);
                        this.health += attackerLifeStealAmount;
                        if(this.health > this.max_health){
                            this.health = this.max_health;
                        }
                        attackerHealthElement.textContent = `${this.health} Health`;        
                    }    
                    battleResultsElement.prepend(resultElement3);
                    if(critElement.textContent != ''){
                        battleResultsElement.prepend(critElement);
                    }    
                    if(armorPiercingElement.textContent != ''){
                        battleResultsElement.prepend(armorPiercingElement);
                    }    
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                } 
                else {
                    resultElement1.textContent = `${this.name} launches an attack at ${opponent.name}!`;
                    resultElement2.textContent = `${opponent.name} manages to defend against the attack but still takes ${attackerDamage} damage!`;
                    resultElement2.style.color = "red";
                
                    if(lifeStealElement.textContent != ''){
                        battleResultsElement.prepend(lifeStealElement);
                        this.health += attackerLifeStealAmount;
                        if(this.health > this.max_health){
                            this.health = this.max_health;
                        }
                        attackerHealthElement.textContent = `${this.health} Health`;        
                    }    
                    battleResultsElement.prepend(resultElement2);
                    if(critElement.textContent != ''){
                        battleResultsElement.prepend(critElement);
                    }
                    if(armorPiercingElement.textContent != ''){
                        battleResultsElement.prepend(armorPiercingElement);
                    }    
                    battleResultsElement.prepend(resultElement1);
                }

                opponent.health -= attackerDamage
                defenderHealthElement.textContent = `${opponent.health} Health`;
                if(poisonElement.textContent != '' && this.poisoned == true){
                    battleResultsElement.prepend(poisonElement);
                }
                battleResultsElement.prepend(br1);
                battleResultsElement.prepend(br2);
                battleResultsElement.prepend(br3);
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
                } 
                else if (defenderDefense >= 60) {
                    resultElement3.textContent = `${this.name} attacks!`
                    resultElement1.textContent = ` ${opponent.name} skillfully stops the attack with his armor!`;
                    resultElement2.textContent = ` The defense successfully nullifies the damage!`;
                    resultElement2.style.color = "blue";
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                    battleResultsElement.prepend(resultElement3);
                } 
                else if (defenderDefense >= 40) {
                    resultElement3.textContent = `${this.name} attacks!`
                    resultElement1.textContent = ` ${opponent.name} swiftly intercepts!`;
                    resultElement2.textContent = ` The defense effectively mitigates the damage!`;
                    resultElement2.style.color = "blue";
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                    battleResultsElement.prepend(resultElement3);
                } 
                else if (defenderDefense >= 20) {
                    resultElement3.textContent = `${this.name} swings forward!`
                    resultElement1.textContent = ` ${opponent.name} manages to withstand the attack!`;
                    resultElement2.textContent = ` The defense stops the damage!`;
                    resultElement2.style.color = "blue";
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                    battleResultsElement.prepend(resultElement3);
                } 
                else {
                    resultElement3.textContent = ` ${this.name} stumbles forward and swings`;
                    resultElement1.textContent = ` ${opponent.name} trips but somehow withstands the attack!`;
                    resultElement2.textContent = ` No damage is taken by ${opponent.name}!`;
                    resultElement2.style.color = "blue";
                    battleResultsElement.prepend(resultElement2);
                    battleResultsElement.prepend(resultElement1);
                    battleResultsElement.prepend(resultElement3);
                }
                if(poisonElement.textContent != '' && this.poisoned == true){
                    battleResultsElement.prepend(poisonElement);
                }
                if(healthRegenElement.textContent != ''){
                    battleResultsElement.prepend(healthRegenElement);
                }
                battleResultsElement.prepend(br1);
                battleResultsElement.prepend(br2);
                battleResultsElement.prepend(br3);
            }

            let winningbr1 = document.createElement("br");
            let winningbr2 = document.createElement("br");
            let winningbr3 = document.createElement("br");
            if(this.health < 0){
                victoryElement.textContent = `${opponent.name} Wins!!!`;
                battleResultsElement.prepend(victoryElement);
                battleResultsElement.prepend(winningbr1);
                battleResultsElement.prepend(winningbr2);
                battleResultsElement.prepend(winningbr3);
                return
            }
            else if(opponent.health < 0){
                victoryElement.textContent = `${this.name} Wins!!!`;
                battleResultsElement.prepend(victoryElement);
                battleResultsElement.prepend(winningbr1);
                battleResultsElement.prepend(winningbr2);
                battleResultsElement.prepend(winningbr3);
                return
            }

            if(attackerComboChance >= Math.random()){
                comboElement.textContent = `${this.name} immediately follows up with another attack!`;
                let combobr1 = document.createElement("br");
                let combobr2 = document.createElement("br");
                let combobr3 = document.createElement("br");

                battleResultsElement.prepend(comboElement);
                battleResultsElement.prepend(combobr1);
                battleResultsElement.prepend(combobr2);
                battleResultsElement.prepend(combobr3);

                this.attack(opponent)
            }
        }

        this.spell_attack = function(opponent, spell){

            let spellElement1 = document.createElement("li");
            let spellElement2 = document.createElement("li");
            let spellElement3 = document.createElement("li");
            let spellbr1 = document.createElement("br");
            let spellbr2 = document.createElement("br");
            let spellbr3 = document.createElement("br");
            
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

            let spell_damage = water_damage + earth_damage + fire_damage + air_damage
            spell_damage -= defenderMagicDefense

            if(spell_damage < 0){
                spell_damage = 0
            }

            if(spell_damage == 0){
                spellElement3.textContent = `${opponent.name} completely blocks the damage with his magic defense!`;
                spellElement3.style.color = "blue";
            }
            else{
                spellElement3.textContent = `${opponent.name} takes ${spell_damage} damage!`;
                spellElement3.style.color = "red";
            }

            spellElement1.textContent = `${this.name} casts ${name}!`;
            spellElement2.textContent = `${on_use}`
            spellElement2.style.color = "plum";
            battleResultsElement.prepend(spellElement3);
            battleResultsElement.prepend(spellElement2);
            battleResultsElement.prepend(spellElement1);
            battleResultsElement.prepend(spellbr1);
            battleResultsElement.prepend(spellbr2);
            battleResultsElement.prepend(spellbr3);
            opponent.health -= spell_damage
            let defenderHealthElement = document.getElementById(opponent.character_id);
            defenderHealthElement.textContent = `${opponent.health} Health`;

            let victoryElement = document.createElement("li");
            let winningbr1 = document.createElement("br");
            let winningbr2 = document.createElement("br");
            let winningbr3 = document.createElement("br");
            if(this.health < 0){
                victoryElement.textContent = `${opponent.name} Wins!!!`;
                battleResultsElement.prepend(victoryElement);
                battleResultsElement.prepend(winningbr1);
                battleResultsElement.prepend(winningbr2);
                battleResultsElement.prepend(winningbr3);
                return
            }
            else if(opponent.health < 0){
                victoryElement.textContent = `${this.name} Wins!!!`;
                battleResultsElement.prepend(victoryElement);
                battleResultsElement.prepend(winningbr1);
                battleResultsElement.prepend(winningbr2);
                battleResultsElement.prepend(winningbr3);
                return
            }
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
