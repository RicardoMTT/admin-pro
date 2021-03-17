import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.scss'],
})
export class Grafica1Component implements OnInit {
  labels1 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data1 = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  constructor() {}

  ngOnInit(): void {}
}
