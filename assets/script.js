//start the game
//shuffle the balls
//star time
//dragable componenets. Make the balls dragable and create container when to drag them.
//count how many times the user has used the scale
//check for the heavy ball when using scale
//set animation when the heavy ball is found in one side of the scale.
//Set basket to check for the heavy ball.
//Set the basket to only be used one.
//



class nameOfTheGame {
  constructor(basketballs) {
    this.basketballsArray = basketballs;
  }

  startGame() {
    this.shufflebasketballs();
    this.shufflegroup();
  }

  shufflebasketballs() {
      // Fisher-Yates (aka Knuth) Shuffle
    var currentIndex = this.basketballsArray.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this.basketballsArray[currentIndex];
    this.basketballsArray[currentIndex] = this.basketballsArray[randomIndex];
    this.basketballsArray[randomIndex] = temporaryValue;
  }
  return this.basketballsArray;
  }
      // group of all balls in game

 shufflegroup(){
    const groupBalls = document.querySelector(".balls-container");
   var shuffleBalls = this.basketballsArray;
   for (var i= 0; i < shuffleBalls.length; i++){
      [].forEach.call(shuffleBalls, function(item){
         groupBalls.appendChild(item);
      });
   }
}
 };
 


 



function ready() {
  let overlays = Array.from(document.getElementsByClassName("overlay-text"));
  let basketballs = Array.from(document.getElementsByClassName("basketballs"));
  let game = new nameOfTheGame(basketballs);

  new Sortable(leftSide, {
    group: 'shared', // set both lists to same group
    animation: 150
    });

    new Sortable(rightSide, {
        group: 'shared',
        animation: 150
    });

    new Sortable(ballsGroup, {
    group: 'shared', // set both lists to same group
    animation: 150
    });

    new Sortable(basket, {
    group: 'shared', // set both lists to same group
    animation: 150
    });

  overlays.forEach((overlay) => {
    overlay.addEventListener("click", () => {
        overlay.classList.remove("visible");
        //code to start game go here
        game.startGame();
    });
    
  });
}

ready();

