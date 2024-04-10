export class TicTacToe {
    constructor() {
      this.grid = document.getElementById('grid');
      this.cells = Array.from(document.getElementsByClassName('cell'));
      this.currentPlayerAffiche = document.getElementById('currentPlayer');
      this.playerOne = document.getElementById('playerOne');
      this.playerTwo = document.getElementById('playerTwo');
      this.replayButton = document.getElementById('replay');
  
      this.currentPlayer = 1;
      this.playerOneScore = 0;
      this.playerTwoScore = 0;
      this.gameFin = false;
  
      this.game();
    }
  
    game() {
      this.cells.forEach((cell) => {
        cell.addEventListener('click', () => {
          this.cellClick(cell);
        });
      });
  
      this.replayButton.addEventListener('click', () => {
        this.rejouer();
      });
  
      this.affichageJoueur();
    }
  
    cellClick(cell) {
      if (!this.gameFin && cell.textContent === '') {
        cell.textContent = this.currentPlayer === 1 ? 'X' : 'O';
        if (this.victoireVerify()) {
          this.currentPlayerAffiche.textContent = `Player ${this.currentPlayer} wins!`;
          this.fin();
        } else if (this.egalite()) {
          this.currentPlayerAffiche.textContent = 'Match nul !';
          this.fin();
        } else {
          this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
          this.affichageJoueur();
          this.afficheScore();
        }
      }
    }
  
    affichageJoueur() {
      this.currentPlayerAffiche.textContent = `Player ${this.currentPlayer}`;
    }
  
    victoireVerify() {
      for (let i = 0; i < 3; i++) {
        if (
          this.cells[i * 3].textContent === this.cells[i * 3 + 1].textContent &&
          this.cells[i * 3 + 1].textContent === this.cells[i * 3 + 2].textContent &&
          this.cells[i * 3].textContent !== ''
        ) {
          return true;
        }
      }
  

      for (let i = 0; i < 3; i++) {
        if (
          this.cells[i].textContent === this.cells[i + 3].textContent &&
          this.cells[i + 3].textContent === this.cells[i + 6].textContent &&
          this.cells[i].textContent !== ''
        ) {
          return true;
        }
      }

      if (
        (this.cells[0].textContent === this.cells[4].textContent &&
          this.cells[4].textContent === this.cells[8].textContent &&
          this.cells[0].textContent !== '') ||
        (this.cells[2].textContent === this.cells[4].textContent &&
          this.cells[4].textContent === this.cells[6].textContent &&
          this.cells[2].textContent !== '')
      ) {
        return true;
      }
  
      return false;
    }
  
    egalite() {
      return this.cells.every((cell) => cell.textContent !== '');
    }
  
    fin() {
      this.gameFin = true;
      this.afficheScore();
    }
  
    rejouer() {
      this.currentPlayer = 1;
      this.gameFin = false;
  
      this.cells.forEach((cell) => {
        cell.textContent = '';
      });
  
      this.affichageJoueur();
      this.afficheScore();
    }
  
    afficheScore() {
      if (this.gameFin) {
        if (!this.egalite()) {
          if (this.currentPlayer === 1) {
            this.playerOneScore++;
          } else {
            this.playerTwoScore++;
          }
          this.playerOne.textContent = this.playerOneScore;
          this.playerTwo.textContent = this.playerTwoScore;
        }
      }
    }
}

// let game = new TicTacToe();
  