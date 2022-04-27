import { Component } from '@angular/core';

// LEARNING this is like us creating our own html tag :)
// decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // LEARNING data binding - used in the template (html) to output dynamic content 
  title = 'my-first-angular-app';
  name = "Alice";
}
