let basketballs = Array.from(document.getElementsByClassName("basketballs"));

function ready(){
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    

    overlays.forEach( overlay => {
        overlay.addEventListener('click', () =>{
            overlay.classList.remove('visible');

            //code to start game go here

        });
        
    });

    
}

function shuffle(basketballs) {
  let currentIndex = basketballs.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = basketballs[currentIndex];
    basketballs[currentIndex] = basketballs[randomIndex];
    basketballs[randomIndex] = temporaryValue;
  }
  return basketballs;
}

//  all the basketballs in game
const deck = document.querySelector(".balls-container");
function startGame(){
   var shuffledbasketballs = shuffle(basketballs);
   for (var i= 0; i < shuffledbasketballs.length; i++){
      [].forEach.call(shuffledbasketballs, function(item){
         deck.appendChild(item);
      });
   }
}


window.onload = startGame();



if (document.readyState === "loading"){
    document.addEventListener('DOMContentLoaded', ready());
}else {
    ready();
}