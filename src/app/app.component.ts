import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent implements OnInit {
  Array(arg0: number) {
    throw new Error('Method not implemented.');
  }
  title = 'Tic tac toe';
  isXplaying = true;

  dataForX:number[] = [];
  dataForO:number[] = [];

  counter:number = 0;

  winCombArray = [
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

  ngOnInit(): void {
    for(let winArr of this.winCombArray) {
      this.defineWinner(winArr, this.dataForX);
    }
  }

  handleMove(index: number) {
    if (this.isXplaying) {
      this.gridArray[index] = 'X';
      this.dataForX.push(index)
      console.log(this.dataForX)
    } else {
      this.gridArray[index] = 'O';
      this.dataForO.push(index)
      console.log(this.dataForO)
    }
    this.isXplaying = !this.isXplaying;
  }

  defineWinner(winArr: any[], dataArr: any[]) {
    for (let item of winArr) {
      console.log(item)
      if(dataArr.includes(item)) {
        this.counter++;
      }
    }
    return this.counter === 3 ? true : false;
  }
}
