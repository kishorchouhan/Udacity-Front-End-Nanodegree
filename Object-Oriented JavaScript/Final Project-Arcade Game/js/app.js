/** Some useful data:
 * var canvasW = 505;
 * var canvasH = 606;
 * var blockW = 101;
 * var blockH = 83;
 * var totalRow = 6;
 * var totalCol = 5;
 */


var playerTopHeadOut = 83/4.0;
var enemyStartX = -101;
var playerStartX = 202;
var playerStartY = 83*5 - playerTopHeadOut;

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    ////update x position
    if (this.x > 505) {
        this.x = enemyStartX;
    } else {
        this.x += (this.speed * dt);
    }
    ////collision
    checkCollision(this);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.update = function(dt) {
    //this.handleInput();
};

// Draw the player on the screen, required method for game
// Display score
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    displayScore(score);
};

Player.prototype.handleInput = function(keychar) {
    if ((keychar === "left")&&(this.x > 0)) {
        this.x -= 101;
    } else if ((keychar === "right")&&(this.x < 404)) {
        this.x += 101;
    } else if ((keychar === "down")&&(this.y < playerStartY)) {
        this.y += 83;
    } else if (keychar === "up") {
        this.y -= 83;
        if (this.y < (83 - playerTopHeadOut)) {
            this.y = playerStartY;
            this.x = playerStartX;
            score += 10;
        }
    }
};

// Function to display player's score
var displayScore = function(aScore) {
    var firstTag = document.getElementsByTagName("h1")[0];

    // add player score to div element created
    scoreDiv.innerHTML = 'Score: ' + aScore;
    firstTag.insertAdjacentElement("afterend", scoreDiv)
};

//Check for collision between enemy and player
var checkCollision = function (anEnemy) {
    if (player.y + 60 >= anEnemy.y 
        && player.x -70 <= anEnemy.x
        && player.y - 60 <= anEnemy.y
        && player.x  +70>= anEnemy.x) {
            player.x = playerStartX;
            player.y = playerStartY;
            score = 0;
    }


}

// Declare new score and gameLevel variables to store score and level
var score = 0;
var scoreDiv = document.createElement('div');

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

var totalEnemyRows = 3;
var EnemyPerRow = 2;
for (var i = 0; i < totalEnemyRows; i++) {
    for (var j = 0; j < EnemyPerRow; j++) {
        var speedChange = Math.random()*150 + 10;
        var enemy = new Enemy(enemyStartX, (83 * (i+1))- playerTopHeadOut, speedChange);
        allEnemies.push(enemy);
    }
}

var player = new Player(playerStartX, playerStartY);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
