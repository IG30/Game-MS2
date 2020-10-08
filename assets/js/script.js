const TOTAL_TIME_MS = 500;

class findTheHeavierBall {
  constructor(totalTime, basketballs) {
    this.timer = document.getElementById("time-remaining");
    this.checkAnswerBtn = document.getElementById("checkAnswer");
    this.bin = document.getElementById("discarded-balls");
    this.scaleMoves = document.querySelector("#scale-moves");
    this.scaleCheckBtn = document.querySelector(".scale-check");

    this.basketballsArray = basketballs;
    this.totalTime = totalTime;

    this.timeRemaining = totalTime;
    this.ballsInBasket = 0;
    this.ballsInBin = 0;
    this.scaleUse = 2;

// This create the drag and drop animation. It is implemented using SortableJs (more info in the README.md).
    new Sortable(leftSide, {
        group: "shared",
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
        onAdd: function (evt) {
          this.addOnBin();
        }.bind(this),
        onRemove: function (evt) {
          this.removeFromBin();
        }.bind(this),
    });

    new Sortable(basket, {
        group: "shared",
        animation: 500,
        onAdd: function (evt) {
          this.addBallToBasket();
        }.bind(this),
        onRemove: function (evt) {
          this.removeBallFromBasket();
        }.bind(this),
    });

    this.addEventListener();
  }

  startGame() {
    this.timeRemaining = this.totalTime;
    this.ballsInBasket = 0;
    this.ballsInBin = 0;
    this.scaleUse = 2;
    
    setTimeout(() => {
      this.shufflebasketballs();
      this.shufflegroup();
      clearInterval(this.countDown);
      this.countDown = this.startCountDown();
    }, TOTAL_TIME_MS);

    this.timeRemaining = this.totalTime;
    this.timer.innerText = this.timeRemaining;
    this.resetScale();
    this.removeOverlays();
    this.renderBinLabel();
    this.renderScaleUsesLabel();
    this.updateCheckAnswerButton();
    this.updateScaleCheckButton();
  }


//Control the shuffled of the balls and position of the div everytime the game restart.
  shufflebasketballs() {
    // Fisher-Yates (aka Knuth) Shuffle. This from taken and modify from Scotch (More infor in the README.md).
    let currentIndex = this.basketballsArray.length;
    let temporaryValue;
    let randomIndex;
    let balls = this.basketballsArray.slice();
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = balls[currentIndex];
      balls[currentIndex] = balls[randomIndex];
      balls[randomIndex] = temporaryValue;
    }
    return balls;
  }
  // group of all balls in riddle

  shufflegroup() {
    const groupBalls = document.querySelector(".balls-container");
    this.basketballsArray.forEach((item) => {
      groupBalls.appendChild(item);
    });
  }

  // count down for the time
  startCountDown() {
    return setInterval(() => {
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if (this.timeRemaining === 0) {
        clearInterval(this.countDown);
        this.gameOver();
      }
    }, 1000);
  }

  // overlays for game over and victory. I learn the idea and implemantation from Web Dev Simplified and PortEXE video. (More infor in the README.md)
  gameOver() {
    document.getElementById("game-over-text").classList.add("visible");
  }

  victoryOver() {
    document.getElementById("victory-text").classList.add("visible");
  }

  removeOverlays() {
    document.getElementById("game-over-text").classList.remove("visible");
    document.getElementById("victory-text").classList.remove("visible");
  }


// Controls the S button.
  onScaleCheckButton() {
    this.scaleUse--;
    this.renderScaleUsesLabel();
    if (this.scaleUse === 0) {
      this.checkForHeavy();
    } else {
      this.checkForHeavy();
    }
    this.updateScaleCheckButton();
  }
//Control the A button
  onClickBasketButton() {
    const basket = document.querySelector("#basket");
    const basketDivs = Array.from(basket.children);
    if (basketDivs[0].dataset.weight === "heavy") {
      this.victoryOver();
    } else {
      this.gameOver();
    }
  }

//This fuction calls the majority of the EventListeners to make sure that when the game restart the get call just once.
  addEventListener() {
    const gameOverOverlay = document.getElementById("game-over-text");
    gameOverOverlay.addEventListener("click", () => {
      this.startGame();
    });

    const victoryOverlay = document.getElementById("victory-text");
    victoryOverlay.addEventListener("click", () => {
      this.startGame();
    });

    this.scaleCheckBtn.addEventListener("click", this.onScaleCheckButton.bind(this));

    const restart = document.querySelector(".page-title");
    restart.addEventListener("click", () => {
      this.startGame();
    });

    let firtsOverlay = document.getElementById("start-overlay");
    firtsOverlay.addEventListener("click", () => {
      firtsOverlay.classList.remove("visible");
      this.startGame();
    });

    const basketButton = document.querySelector(".check-answer");
    basketButton.addEventListener("click", this.onClickBasketButton.bind(this));

    const resetButton = document.querySelector(".reset-scale");
    resetButton.addEventListener("click", () => {
      this.resetScale();
    });
  }

  //Check for the content in the scales.

  //Check for the data attribiute in the basketballs when the are drop on the sides of the scale and after clicking the S button.
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

//Rebalance the Scale
  resetScale() {
    document.querySelector(".left-side").classList.remove("heavier");
    document.querySelector(".right-side").classList.remove("heavier");
  }

// Enable or disable the A button
  updateCheckAnswerButton() {
    if (this.ballsInBasket == 1) {
      this.checkAnswerBtn.removeAttribute("disabled");
    } else {
      this.checkAnswerBtn.setAttribute("disabled", "disabled");
    }
  }

// Disable the S button after the scale has been used twice
  updateScaleCheckButton() {
    if (this.scaleUse === 0) {
      this.scaleCheckBtn.setAttribute("disabled", "disabled");
    } else {
      this.scaleCheckBtn.removeAttribute("disabled");
    }
  }
// Check for the amount of balls dropped onto the basket net
  addBallToBasket() {
    this.ballsInBasket++;
    this.updateCheckAnswerButton();
  }

  removeBallFromBasket() {
    if (this.ballsInBasket > 0) {
      this.ballsInBasket--;
      this.updateCheckAnswerButton();
    }
  }
// Check for the amount of balls dropped onto the bin
  addOnBin() {
    this.ballsInBin++;
    this.renderBinLabel();
  }

  removeFromBin() {
    this.ballsInBin--;
    this.renderBinLabel();
  }

// Control the values to indicate the user how many move left with the scale and how many balls are inside the bin.
  renderBinLabel() {
    this.bin.innerHTML = this.ballsInBin;
  }

  renderScaleUsesLabel() {
    this.scaleMoves.innerHTML = this.scaleUse;
  }
}

function ready() {
  let basketballs = Array.from(document.getElementsByClassName("basketballs"));
  let game = new findTheHeavierBall(180, basketballs);

// Tooltip implemented from Boostrap. 
  $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
}

// This event waits for the DOM content to be loaded before calling the ready Fuction.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
  ready();
}
