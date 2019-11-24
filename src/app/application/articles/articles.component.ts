import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  template: `
  <app-menu></app-menu>

    <p>
      articles works!
    </p>
  `,
  styles: []
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
