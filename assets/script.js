


class nameOfTheGame {
    constructor(basketballs){
    this.basketballsArray = basketballs;
    }

    startGame(){
        this.shufflebasketballs();
    }


    shufflebasketballs () {
        for(let i = this.basketballsArray.length -1; i > 0; i--){
            let randomIndex = Math.floor(Math.random() * (i+1));
            this.basketballsArray[randomIndex].style.order = i;
            this.basketballsArray[i].style.order = randomIndex;
        }
    }

    
}

function ready(){
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    let basketballs = Array.from(document.getElementsByClassName("basketballs"));
    let game = new nameOfTheGame(basketballs);

    overlays.forEach( overlay => {
        overlay.addEventListener('click', () =>{
            overlay.classList.remove('visible');

            //code to start game go here

        });
        
    });

}

