
let currentMoleTile, currentPlantTile, score = 0, gameOver = false;

window.onload = startGame();

function startGame() {
    setGame();
};

function setGame() {
    /**Setting up the 3 X 3 grid for the game board in html */
    for (let i = 0; i < 9; i++) {
        /**Creating Div */
        let tile = document.createElement("div");
        /**Assigning id to the each div tile. 
         * <div id="0-8"></div>*/
        tile.id = i.toString();
        /**Listeing to the click events when player clicks on a tile. */
        tile.addEventListener("click", selectTile);
        /**We are inserting these tiles inside the div which
         * id board.*/
        document.getElementById("board").appendChild(tile);      
    }
    /**Calling setMole function every 1 seconds or 1000 miliseconds */
    setInterval(setMole, 1000);
    /**Calling setPlant function every 2 seconds or 2000 miliseconds */
    setInterval(setPlant, 2000);
};

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
};

function setMole() {
    /**Finishing the game if the game is over */
    if (gameOver) {
        return;
    }

    if (currentMoleTile) {
        currentMoleTile.innerHTML = "";        
    }
    
    let mole = document.createElement("img");
    mole.src = "./image/monty-mole.png";

    let num = getRandomTile();
    /**If a pipe or div is occupied by a plant then do not
     * assign any mole on that same div or pipe.*/
    if (currentPlantTile && currentPlantTile.id === num) {
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
};

function setPlant() {
    /**Finishing the game if the game is over */
    if (gameOver) {
        return;
    }

    if (currentPlantTile) {
        currentPlantTile.innerHTML = "";        
    }
    
    let plant = document.createElement("img");
    plant.src = "./image/piranha-plant.png";

    let num = getRandomTile();
    if (currentMoleTile && currentMoleTile.id === num) {
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
};

function selectTile() {
    /**Finishing the game if the game is over */
    if (gameOver) {
        return;
    }
    /**this refers to tile that has been clicked */
    if (this === currentMoleTile) {
        score += 10;
        /**Updating the score after the player successfully whac a mole */
        document.getElementById("score").innerText = score.toString();
    } else if (this === currentPlantTile) {
        /**Notifying the player that the game is over */
        document.getElementById("score").innerText = "Game Over: " + score.toString();
        gameOver = true;
    }
};