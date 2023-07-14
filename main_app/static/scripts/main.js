document.addEventListener("DOMContentLoaded", function() {
    const character1Element = document.getElementById("character1");
    const character2Element = document.getElementById("character2");
    
    // this function is made to accept an html element
    function CharacterCreation(character){

        // attributes
        this.name = character.dataset.name;
        this.character_class = character.dataset.character_class;
        this.health = parseFloat(character.dataset.health);
        this.strength = parseFloat(character.dataset.strength);
        this.speed = parseFloat(character.dataset.speed);
        this.defense = parseFloat(character.dataset.defense);
        this.dodge = parseFloat(character.dataset.dodge);
        this.block = parseFloat(character.dataset.block);
        this.counter = parseFloat(character.dataset.counter);

        // methods
        this.attack = function(opponent) {
            // this is where each instance of an attack will take place, gets repeated on a loop in the battle function until there is one winner

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

            if(attackerStrength >= 80){
                console.log()
            }

            // Math.random() returns a number between 0 and 1
            if(Math.random() < dodgeChance) {
                if(damage === 0){
                    console.log(opponent.name + "dodged the attack!");
                }
                console.log(opponent.name + " dodges the attack!");
                return;
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

    // function that will loop until there is a winner
    function Battle(character1, character2) {
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
        character1.attack(character2);
    }
        // after the loop completes I need to output the winner here

    // this is starting the battle!
    Battle(character1, character2);

    console.log("char1class: " + character1.character_class);
    console.log("char2health: " + character2.health, character2.strength, character2.speed);
})