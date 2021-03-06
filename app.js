
//Var was used in the following project according to the project requirements.
//Private Counter Used to Eliminate Global Variables in JS (See MDN Closures Private Variables.)
var counter = (function(){
    privateCounter = 0;
    function increaseBy(val){
        privateCounter += val;
    }
    return{
        increment: function(){
            increaseBy(1);
        },
        presentValue: function(){
            return privateCounter;
        }
    }
})();

//Loop which creates the 100 h3s and adds a unique click event to each of them.
for (var x = 0; x < 100; x++) {                                      
    var accusations = document.createElement("h3");
    var accuText = document.createTextNode("Accusation " + (x + 1)); 
    document.body.appendChild(accusations).appendChild(accuText);
    accusations.addEventListener("click", clickAccusation(x));
}

//Uses closure to keep the unique value of the global var x.
function clickAccusation(num) {
        //Creates a multiDimensionalArrayofStrings [0][num] = names, [1][num] = weapons [2][num] = location
        //I chose to use a multiDimesionalArray to see if it was possible in JS.
        var myMultiDimensionalList = [
            //The names
            ["Sarah", "Kernel Bacon", "Anna", "Sam", "Armstrong Legstrong"],
            //The weapons
            ["Rolling Pin", "Knife", "Nuclear Control Rod", "Tooth Pick", "Electric Eel",
                "Anvil", "Spear", "Soap Stone", "Weaponized Jello", "Peanut Butter",
                "Webster's Dictionary", "APA Styling", "Marmite", "Tape Gun", "Cassette Tape",
                "Elephant Tusk", "Long Bow", "Grizzly Tale", "Watermelon", "Twelve Day Old Soup"],
            //The place
            ["Camel Stable", "Door Yard", "Town Hexagon", "Crab Shop", "Piano Room",
                "Cheese Cellar", "Observatory", "Dining Room", "Climbing Gym", "Alligator Washroom"]
        ];
        var weapon = Math.floor(Math.random() * 20); // Randomized so each person will have random weapons.
        var location = Math.floor(Math.random() * 10); // Randomized so each person will have random location.
        if (x % 20 === 0 && x !== 0) {
            counter.increment();
        }
        var currentCountVal1 = counter.presentValue();

        // Randomizes the weapons, and locations for each of the 5 persons
        // var theAccusation = "Accusation " + (num + 1) + ": I accuse " + myMultiDimensionalList[0][currentCountVal1] + " with the "
        // + myMultiDimensionalList[1][weapon] + " in the " + myMultiDimensionalList[2][location] +"!";

        // A test which allows for 20 ordered accusations for each of the 5 persons.
        var currentCountVal1 = counter.presentValue();
        var theAccusation = "Accusation " + (num + 1) + ": I accuse " + myMultiDimensionalList[0][currentCountVal1] + " with the "
            + myMultiDimensionalList[1][num % 20] + " in the " + myMultiDimensionalList[2][num % 10] + "!";
        
        //Closure
        return function() {
            return alert(theAccusation);
        }
}



