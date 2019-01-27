
//Computer play******************************
function computerPlay(){     
    var cPlay;
    var thrw = Math.floor((Math.random() * 3) + 1);
       if (thrw === 1){
        cPlay = 'Rock';
    } else if (thrw === 2){
        cPlay = 'Paper';
    } else {
        cPlay = 'Scissors';
    } return cPlay
}





var compScore = 0;
var userScore = 0;

     
        function playRound(uThrw, cThrw) { 

           

            if (uThrw === 'rock' && cThrw === 'Rock' ){
               return 'Tie';
            }else if (uThrw === 'rock'  && cThrw === 'Paper'){
               compScore++;
               return 'Lose';
            }else if (uThrw === 'rock' && cThrw === 'Scissors'){
             		userScore++;
                return 'Win';
            }else if (uThrw === 'paper' && cThrw === 'Rock'){
             		userScore++;
                return 'Win';
            }else if (uThrw === 'paper'  && cThrw === 'Paper'){
                return 'Tie';
            }else if (uThrw === 'paper' && cThrw === 'Scissors'){
               	compScore++;
                return 'Lose';
            }else if (uThrw === 'scissors' && cThrw === 'Rock'){
              	compScore++;
                return ' Lose';
            }else if (uThrw === 'scissors' && cThrw === 'Paper'){
              	compScore++;
                return 'Win';
            }else if (uThrw === 'scissors' && cThrw === 'Scissors'){
                return 'Tie';
            }else {
                return 'Invalid Input'
            }
            
             } 
            
             function game () {
                for(var i = 0; i < 5; i++)   {
                               
                 console.log (playRound(prompt('Choose one. Rock Paper or Scissors').toLowerCase(), computerPlay()));
                 console.log (compScore, userScore);
                          
                 }
              }


              game();
              if(compScore < userScore){
                  console.log('You Win')
              }else if (compScore > userScore){
                  console.log('You Lose')
              }else {
                  'It\'s a Tie'
              }








        