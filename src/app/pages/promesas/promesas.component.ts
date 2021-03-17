import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromesasComponent implements OnInit {
  ngOnInit(): void {
    this.getUsers().then((user) => console.log(user));
  }
  // constructor() {}

  // ngOnInit(): void {
  //   const promesa = new Promise(() => {
  //     console.log('xd');
  //   });
  //   console.log('fin');
  // }

  getUsers() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
  }
}
