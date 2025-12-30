

        // const score = {
        //     wins: 0,
        //     losses: 0,
        //     ties: 0
        // };

        // let score = JSON.parse(localStorage.getItem('score'));



        // after using localStorage.removeItem() there is no score and it will gives us null
        // solution .... we will give a default value

        // if (score === null) {
        //     score = {
        //         wins: 0,
        //         losses: 0,
        //         ties: 0
        //     }
        // }

        // shortcut 

        //  if (!score) {
        //     score = {
        //         wins: 0,
        //         losses: 0,
        //         ties: 0
        //     }
        // }


        //shortcut


        let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        }


        let playerMoveImage = document.querySelector('.js-playerMove');
    
        let computerMoveImage = document.querySelector('.js-computerMove');

        updateScoreElement();

        console.log(JSON.parse(localStorage.getItem('score')));

        function playGame(playerMove) {
            const computerMove = pickComputerMove();

            console.log(computerMove);
            if(playerMove === 'Scissor'){
                playerMoveImage.src = "images/scissor.png"
            }else if (playerMove === 'Paper'){
                playerMoveImage.src = "images/paper.png"
            }
            else{
                playerMoveImage.src = "images/rock.png"
            }


            if(computerMove === 'Scissor'){
                computerMoveImage.src = "images/scissor.png"
            }else if (computerMove === 'Paper'){
                computerMoveImage.src = "images/paper.png"
            }
            else{
                computerMoveImage.src = "images/rock.png"
            }



            let result = '';

            if (playerMove === 'Scissor') {
                if (computerMove === 'Rock') {
                    result = 'You loose'
                } else if (computerMove === 'Paper') {
                    result = 'You win'
                } else {
                    result = 'Tie'
                }
            }
            else if (playerMove === 'Rock') {

                
                if (computerMove === 'Rock') {
                    result = 'Tie'
                } else if (computerMove === 'Paper') {
                    result = 'You loose'
                } else {
                    result = 'You win'
                }
            }
            else {
                if (computerMove === 'Rock') {
                    
                    result = 'You win'
                } else if (computerMove === 'Paper') {
                    result = 'Tie'
                } else {
                    result = 'You loose'
                }
            }

            if (result === 'You win') {
                score.wins += 1;
            } else if (result === 'You loose') {
                score.losses += 1;
            } else {
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));
            updateScoreElement();

            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = `You choose ${playerMove}. Computer choose ${computerMove}.`;


            // document.getElementById('result').innerText = `You choose ${playerMove}. Computer choose ${computerMove}. ${result}
            // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            // alert(`You choose Scissors. Computer choose ${computerMove}. ${result}`);
            console.log(`You choose ${playerMove}. Computer choose ${computerMove}. ${result}`);
        }


        function updateScoreElement() {
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
        }
        function pickComputerMove() {
            const randomNumber = Math.random();
            let computerMove = '';

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'Rock';

            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'Paper';
            } else {
                computerMove = 'Scissor';
            }

            return computerMove;
        }