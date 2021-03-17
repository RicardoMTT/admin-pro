import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  progeso1: number = 25;

  progeso2: number = 35;

  get getProgeso1() {
    return `${this.progeso1}%`;
  }

  get getProgeso2() {
    return `${this.progeso2}%`;
  }
}
