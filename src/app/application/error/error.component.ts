import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
  <app-menu></app-menu>
  <h2 class="display-3 text-danger">Error 404:Page not Found</h2>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
