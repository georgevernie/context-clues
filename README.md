# Context Clues
Covalence

## Info
* You and your friends were attending a grand dinner party when tragedy struck
* Accusations are running rampant to determine who committed the crime
* You will be building a webpage that will display 100 accusations on the screen
* When an accusation is clicked, an alert will appear that shows the full text of the accusation
* Knowledge of closure and the modulus operator will be useful in this lab
* To force your hand at trying closure, you must not use let/const in this lab. Only use var.

## Getting Started
* Create an index.html, script.js, and a css file for styling

## Objectives
* Again, DO NOT use let/const in this lab. Only use var, even in loop declarations. This is to force a situation in which closure is required.
* When the page first loads, insert 100 h3 elements onto the page
    * The h3 elements should simply say Accusation 1, Accusation 2, Accusation 3, ... Accusation 100
    * Clicking on an h3 element should display an alert that says a statement in the following format:
```
Accusation i: I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!
ex: Accusation 7: I accuse Jane, with the paper clip in the copy room!
```
* Due to the way scoping works when using var, you will need to use closure to solve this problem
    * You need to create a function that returns a function that specializes in displaying an alert for a particular loop iteration
    * That returned function can be set as the click listener for the h3
* You need an array of 5 friend names
* You need an array of 10 location names
* You need an array of 20 weapon/object names (feel free to be silly/absurd)
* You will use the value of i in the loop to determine which of the above array items to use
    * Make sure you only select valid array indexes
    * Modulus is your friend
    * ex: 10 mod 10 is 0, 11 mod 10 is 1, 12 mod 10 is 2, ...
* You only need to use one loop for this assignment