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

const TOTAL_TIME_MS = 500; 

class nameOfTheGame {
  constructor(totalTime, basketballs) {
    this.basketballsArray = basketballs;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById("time-remaining");
    //this.checkHeavyBall = basketButton;
    //this.scaleUse = scaleButton;
  }

  startGame() {
    setTimeout(() => {
      this.shufflebasketballs();
      this.shufflegroup();
      this.countDown = this.startCountDown();
    }, TOTAL_TIME_MS);
    this.timeRemaining = this.totalTime;
    this.timer.innerText = this.timeRemaining;
    this.checkScale();
    this.checkAnswer();
    this.reset();
    this.resetScale();
    this.restartGame();
  }

  shufflebasketballs() {
    // Fisher-Yates (aka Knuth) Shuffle
    let currentIndex = this.basketballsArray.length;
    let temporaryValue;
    let randomIndex;

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

  shufflegroup() {
    const groupBalls = document.querySelector(".balls-container");
    let shuffleBalls = this.basketballsArray;
    shuffleBalls.forEach((item) => {
      groupBalls.appendChild(item);
    });
  }
  // count down for the time
  startCountDown() {
    return setInterval(() => {
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if (this.timeRemaining === 0) this.gameOver();
    }, 1000);
  }

  // overlays for game over and victory

  gameOver() {
    clearInterval(this.countDown);
    document.getElementById("game-over-text").classList.add("visible");
    function clickTostart() {
      let gameOverOverlay = document.getElementById("game-over-text");
      gameOverOverlay.addEventListener("click", () => {
        document.location.reload(true);
      });
    }
    clickTostart();
  }

  victoryOver() {
    clearInterval(this.countDown);
    document.getElementById("victory-text").classList.add("visible");
    function clickTostart() {
      let victoryOverlay = document.getElementById("victory-text");
      victoryOverlay.addEventListener("click", () => {
        document.location.reload(true);
      });
    }
    clickTostart();
  }

  //Check for the content in the scales.

  // button action
  checkScale() {
    const scaleCheck = document.querySelector(".scale-check");
    let scaleUse = 0;
    scaleCheck.addEventListener("click", () => {
      scaleUse++;
      if (scaleUse > 2) {
        alert("The scale has been already used twice!!");
      } else {
        this.checkForHeavy();
      }
    });
  }

  //Check for the data attribiute in the basketballs
  checkForHeavy() {
    const leftSide = document.querySelector(".left-side");
    const leftSideDivs = Array.from(leftSide.children);
    const rightSide = document.querySelector(".right-side");
    const rightSideDivs = Array.from(rightSide.children);

    leftSideDivs.forEach((item) => {
      if (item.dataset.weight === "heavy") {
        document.querySelector(".left-side").classList.add("heavier");
      }
    });

    rightSideDivs.forEach((item) => {
      if (item.dataset.weight === "heavy") {
        document.querySelector(".right-side").classList.add("heavier");
      }
    });
  }

  checkAnswer() {
    const basketButton = document.querySelector(".check-answer");
    let checkHeavyBall = 0;
    basketButton.addEventListener("click", () => {
      checkHeavyBall++;
      if (checkHeavyBall > 1) {
        alert("You can only check once");
      } else {
        this.checkResult();
      }
    });
  }

  checkResult() {
    const basket = document.querySelector("#basket");
    const basketDivs = Array.from(basket.children);

    if (basketDivs.length === 1) {
      if (basketDivs[0].dataset.weight === "heavy") {
        this.victoryOver();
      } else {
        alert("This is light!");
      }
    } else if (basketDivs.length > 1) {
      alert("Only one basketball can be check!!");
    } else {
      alert("The basket is empty!");
    }
  }

  reset() {
    const resetButton = document.querySelector(".reset-scale");
    resetButton.addEventListener("click", () => {
      this.resetScale();
    });
  }

  resetScale() {
    document.querySelector(".left-side").classList.remove("heavier");
    document.querySelector(".right-side").classList.remove("heavier");
  }

  restartGame() {
    const restart = document.querySelector(".page-title");
    restart.addEventListener("click", () => {
      document.location.reload(true);
    });
  }
}
// close the objecy

function ready() {
  let basketballs = Array.from(document.getElementsByClassName("basketballs"));
  let game = new nameOfTheGame(180, basketballs);

  new Sortable(leftSide, {
    group: "shared", // set all lists to same group
    animation: 500,
  });

  new Sortable(rightSide, {
    group: "shared",
    animation: 500,
  });

  new Sortable(ballsGroup, {
    group: "shared",
    animation: 500,
  });

  new Sortable(discarded, {
    group: "shared",
    animation: 500,
  });

  new Sortable(basket, {
    group: "shared",
    animation: 500,
  });

  

  function clickTostart() {
    let firtsOverlay = document.getElementById("start-overlay");
    firtsOverlay.addEventListener("click", () => {
      firtsOverlay.classList.remove("visible");
      game.startGame();
    });
}

  clickTostart();

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

}


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
  ready();
}
