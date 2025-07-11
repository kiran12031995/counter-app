import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter-app';
  history:any = []

  count = 0;

  increment() {
    this.count++;
    this.history.push(`[+1] counter is now ${this.count}`)
  }

  decrement() {
    if(this.count !== 0 || this.count > 0) {
      this.count--;
      this.history.push(`[-1] counter is now ${this.count}`)
    }
  }

  reset(){
    if(this.count !==0) {
      this.count = 0;
      this.history.push(`[Reset] counter is now ${this.count}`)
    }
  }

  clearHistory() {
    this.history = [];
  }
}
