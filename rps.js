function getComputerChoice(){

        let random = (Math.floor(Math.random() * 3 ) + 1);
          if(random == 1){
            return 'paper'.toLowerCase();
          }
        else if(random == 2){
            return 'rock'.toLowerCase();
        }  
        else if(random == 3){
            return 'scissors'.toLowerCase();
        }
        }




function round(){
    playerSelection = prompt('Enter your choice').toLowerCase();
    let computerSelection = getComputerChoice();
    if(playerSelection == computerSelection){
        return "Draw";
    }
    
       else if((playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper')){
           return "Win";
         }
         else if((playerSelection == 'scissors' && computerSelection == 'rock') || (playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors')){
            return "Lose";
         }
    }
function game(){
let a = 0, b = 0, c = 0;

    for(let i =0; i<5; i++){
    let result = round();
    alert(result);    
    if(result == "Win"){
      a++;
    }
    else if (result == "Lose"){
      b++;
    }
    else if(result == "Draw"){
    c++;}
}
  if(a>b){
    alert("Winner");
} 
else if(b>a){
    alert("Loser");
    
}
  else if(a === b){

    alert("It's a Draw");}
}
  
 
  
