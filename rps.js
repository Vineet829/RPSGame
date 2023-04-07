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
        let result; 
        let playerSelection;
        let a=0;
        let b=0;
        let c=0;
        let y;
        function round(){
    
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
          
        };
function removescore(){
  const score = document.querySelector(".score")
  let q = score.childElementCount;
  alert(y);
  while(q!=0)   
      score.removeChild(score.firstElementChild);
    
    } 
    
 
  
     
  

        const game =   function (){
          const z = document.querySelector(".score");
          let count = z.childElementCount;
          if(count <5){
                  
              if(result == "Win"){
                let score = document.querySelector(".score")
                let txt = document.createElement('p');
                
                txt.textContent = "Win";
                score.appendChild(txt); 
              a++;  
              }
              else if (result == "Lose"){
                let score = document.querySelector(".score")
            let txt = document.createElement('p');
            
            txt.textContent = "Lose";
            score.appendChild(txt); 
                b++;
              }
              else if(result == "Draw"){
                const score = document.querySelector(".score")
                const txt = document.createElement('p');
                
                txt.textContent = "Draw";
                score.appendChild(txt); 
              c++;  
              }}
          
              
      else if(count =5) {
       if(a>b){
  const score = document.querySelector(".score")
  const end = document.createElement('p')
  end.textContent = "Winner";
  score.appendChild(end)
  y = "Winner";
  removescore();
  
  
  
  }
      else if(a<b){
        const score = document.querySelector(".score")
        const end = document.createElement('p')
        end.textContent = "Loser";
        y = "Loser";
        score.appendChild(end) 
    removescore();
     
      }
  else if(a == b){
    const score = document.querySelector(".score")
    const end = document.createElement('p')
    end.textContent = "Stalemate";
    y = "Stalemate";
    score.appendChild(end); 
     removescore();
     
  }               
 
}     
  }   
    
        
        const button1 = document.querySelector(".paper");
        button1.addEventListener('click', () => {
          playerSelection = "paper";
          result = round(); 
         game();
          
      
      });
        
        const button2 = document.querySelector(".rock");
        button2.addEventListener('click', () => {
          playerSelection = "rock";
          result = round(); 
       game();});
  
        const button3 = document.querySelector(".scissors");
        button3.addEventListener('click', () => {
          playerSelection = "scissors";
          result = round(); 
        game();});
        





       




