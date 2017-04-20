import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: 'hello-world.html'
})
export class HelloWorldComponent {
  tapCount: number = 0;

  constructor() {}

  onClick() {
    this.tapCount++;
  }
}
