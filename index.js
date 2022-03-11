
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function tirage(){
    let card = Math.floor(Math.random() * 13) + 1;
  if (card <= 10 && card >1){
      return card;
    }
  if (card > 10){
      return card = 10    
  }
  if (card===1){ 
    return card = 11; 
  }
}

do{
// Declareation des variables

let countPlayer = 0, cardPlayer1 = 0, cardPlayer2 = 0;
let countDealer = 0, cardDealer1 = 0, cardDealer2 = 0;
let askPlayer = true;
let continuGame = false;


function random () {
const figure = ["\u2665","\u2660","\u2663","\u2666"]
let result =(Math.floor(Math.random()* figure.length));
return figure[result]
}

  // Distribution des cartes Player
console.log("****** Bienvenu.e au BlackJack *******\n");
  const nomPlayer=prompt("Quel est ton nom ? ");
  console.log(`\nSalut ${nomPlayer}!`);
  
 
    cardPlayer1 = tirage()
    console.log(`Ta premiere carte est un ${cardPlayer1} ${random()}`)
    sleep(1500);
    cardPlayer2 = tirage()
    sleep(1500);
    console.log(`Ta deuxieme carte est un ${cardPlayer2} ${random()}`)
    // Verification si une des cartes est un as
    if (cardPlayer1 + cardPlayer2 === 22){
      cardPlayer1 = 1
    }
    countPlayer = (cardPlayer1 + cardPlayer2)
    sleep(1500);
    console.log(`Ton total est ${countPlayer}`);
    
    // Distribution des cartes dealer
    cardDealer1=tirage();
    console.log(`\nLa premiere carte du dealer est un ${cardDealer1} ${random()}`)
    cardDealer2=tirage(); // deuxième carte dealer distribuée mais pas affichée
    if (cardDealer1 + cardDealer2 === 22){
      cardDealer1 = 1
      }
    countDealer=cardDealer1+cardDealer2;
  
    while (askPlayer){
      askPlayer = confirm("\nTu veux une autre carte ?");
        if(askPlayer){
          let card3 = tirage();
          sleep(1500);
          console.log(`\nTa nouvelle carte est ${card3} ${random()}`);
          if (countPlayer + card3 > 21 && card3===11) {
            card3=1;
          }
          
          countPlayer = (countPlayer + card3);
          console.log("Ton total est "+ countPlayer);
          continuGame = true;
          
          if (countPlayer > 21){
          console.log('\nTu a perdu :(');
          askPlayer = false;
          continuGame = false;
          }
          if (countPlayer === 21){
          console.log('BlackJack !');
          askPlayer = false;
          continuGame = true;
          }  
      }else {
            continuGame = true;
        }
    }

  
  if (continuGame === true) {
    console.log(`\nLa seconde carte du dealer est ${cardDealer2} de ${random()}`);
    sleep(1500);
    console.log(`Ton total est ${countPlayer}`);
    sleep(1500);
    console.log(`Le total du dealer est ${countDealer}`);
    // Dans le cas ou le dealer est deja gagnant avant de tirer une carte 
  if ((countDealer > countPlayer) && (countDealer <= 21)){
    sleep(1000);
    console.log ('Dealer a gagné :(')
  }
  if (countPlayer < 22){
     // tant que dealer a une main inferieur a player il peut piocher , sous condition 
      while (countDealer <= countPlayer){
        // tant que dealer a - ou = a 16 , il peut piocher 
        if (countDealer <=16){
          let card4 = tirage();
            countDealer = (countDealer + card4);
            sleep(1500);
            console.log(`\nDealer tire une nouvelle carte et sa nouvelle carte est  ${card4} de ${random()}`);
            sleep(1500);
            console.log(`Le dealer a un total de ${countDealer}`);
          // Si le total de dealer est ++ a player mais qu'il ne depasse pas 21 
          if (countDealer > countPlayer && countDealer <= 21){ 
              console.log('Dealer Gagne')
            }
          // Si le total de dealer est ++ a player mais qu'il a depasser 21 
          else if (countDealer > countPlayer && countDealer > 21){
            console.log(`Bien joué ${nomPlayer} tu as gagné`);
          } 
          // Egalite entre les deux mains 
          else if (countDealer === countPlayer){
                console.log("Egalité")
            break;
            }
          }
        else{
          console.log(`Bien joué ${nomPlayer}, tu as gagné !`); 
          break; 
            }
                  }
      }
    }
  }
  while(confirm ("Une autre partie ?"))  




