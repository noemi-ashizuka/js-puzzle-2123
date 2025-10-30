// ////////////////
// Rehearsal
// ////////////////

// Show the hint when you click the button!

// The 3 steps to follow

// 1. select the elements that I need (button, hint div)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");
// console.log(button, hint);

// 2. add event listener (listen to a click on the button)
// element.addEventListener("name of the event", arrow function)
button.addEventListener("click", () => {
  // 3. change the DOM
  hint.classList.toggle("active");
});




// ////////////////
/// Hints
// ////////////////

// temp1.cellIndex -> index of the column
// temp1.parentElement.rowIndex -> index of the row



// ////////////////
// Live code
// ////////////////
const canWeMove =  (tile)=> {
  // get the clicked tile cell index
  const currentTileCol = tile.cellIndex;
  // get the click tile row index
  const currentTileRow = tile.parentElement.rowIndex;
  console.log(currentTileCol, currentTileRow);
  // first we need to get the empty tile
  const emptyTile = document.querySelector(".empty");
  // get the empty tile cell index
  const emptyTileCol = emptyTile.cellIndex;
  // get the empty tile row index
  const emptyTileRow = emptyTile.parentElement.rowIndex;
  console.log(emptyTileCol, emptyTileRow);
  // compare and return a boolen

  return((emptyTileCol === currentTileCol + 1 || emptyTileCol === currentTileCol - 1) && (emptyTileRow === currentTileRow)
  ||
  ((emptyTileRow === currentTileRow + 1 || emptyTileRow === currentTileRow - 1) && (emptyTileCol === currentTileCol))
  )
}

const swapTile = (tile) => {
  // add class empty to the tile that we clicked
  // select the empty tile
  const emptyTile = document.querySelector(".empty");
  // remove the empty class from the empty tile
  emptyTile.classList.remove("empty");
  // change the inner text of the former empty tile
  emptyTile.innerText = tile.innerText;
  tile.innerText = "";
  tile.classList.add("empty");
};

///////////////// function to check if we won the game ////////////////////
const didWeWin = (tiles) => {
  // in JS two arrays will always be different
  // [] === [] -> false
  // but we can compare strings
  // define the winning sequence
  const winningSequence = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  // define an empty array to get all the innerText of the tiles
  const result = [];
  // iterate over the tiles (td elements)
  tiles.forEach((tile) => {
    // push the inner text into the array
    result.push(tile.innerText);
  });
  // compare the joined array (string) to the winning sequence string
  return (result.join() === winningSequence)
};

//1 - select all td elements (tiles)
const tiles = document.querySelectorAll("td");
//2 - iterate the tiles

tiles.forEach((tile) => {
  //3 - listen for clicks on each tile
  tile.addEventListener("click", () => {
    // console.log(event);
    //4 - check if the tile is next to an empty space and move the tile (create a new function)
    //5 - return a boolean canWeMove(tile)
    if (canWeMove(tile)) {
      //6 - if canWeMove returns TRUE move the tile
      swapTile(tile);
    }
    //7 - check the tile position to see if you won
    // make function didWeWin -> takes the tiles as parameter and returns a boolean
    if (didWeWin(tiles)) {
      alert("You won 🎉");
    };
  });
});






















// "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"