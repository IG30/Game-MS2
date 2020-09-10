class nameOfTheGame {
  constructor(basketballs) {
    this.basketballsArray = basketballs;
    this.groupOfBalls = document.querySelector (".basketballs")
  }

  startGame() {
    this.shufflebasketballs();
  }

  shufflebasketballs() {

    function shuffleBalls(){
    for (let i = this.basketballsArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.basketballsArray[i];
      this.basketballsArray[i] = this.basketballsArray[j];
      this.basketballsArray[j] = temp;
    };
       return this.basketballsArray;
}
    
       let groupBalls = this.groupOfBalls;
      function moveBalls(){
          let shuffleDivs = shuffleBalls();
          for (var i= 0; i < shuffleDivs.length; i++){
          [].forEach.call(shuffleDivs, function(item){
          groupBalls.appendChild(item);
      });
      };
   };

   window.onload = moveBalls();
 };

}

 



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

  overlays.forEach((overlay) => {
    overlay.addEventListener("click", () => {
        overlay.classList.remove("visible");
        //code to start game go here
        game.startGame();
    });
    
  });
}

ready();

