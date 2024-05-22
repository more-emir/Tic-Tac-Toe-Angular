import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tic tac toe';

  isXplaying: boolean = true;

  dataForX: number[] = [];
  dataForO: number[] = [];

  winnerIs: string = '';

  winCombArray:number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  gridArray = ['', '', '', '', '', '', '', '', ''];

  handleMove(index: number) {
    if (this.isXplaying) {
      this.gridArray[index] = 'X';
      this.dataForX.push(index);
    } else {
      this.gridArray[index] = 'O';
      this.dataForO.push(index);
    }

    for (let arr of this.winCombArray) {
      if (this.isXplaying) {
        if (this.defineWinner(arr, this.dataForX)) {
          this.winnerIs = 'X';
          return;
        }
      }
      if (!this.isXplaying) {
        if (this.defineWinner(arr, this.dataForO)) {
          this.winnerIs = 'O';
          return;
        }
      }
    }
    this.isXplaying = !this.isXplaying;
  }

  defineWinner(winArr: number[], dataArr: number[]) {
    let counter = 0;
    for (let item of winArr) {
      if (dataArr.includes(item)) {
        counter++;
        console.log(counter);
      }
    }
    return counter === 3 ? true : false;
  }

  restart() {
    this.isXplaying = !this.isXplaying;
    this.dataForX = [];
    this.dataForO = [];
    this.gridArray = ['', '', '', '', '', '', '', '', ''];
    this.winnerIs = '';
  }
}
