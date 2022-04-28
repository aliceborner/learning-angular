import { Component } from '@angular/core';

// LEARNING this is like us creating our own html tag :)
// decorator
@Component({
  // LEARNING selector can be also an attribute or a class
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // LEARNING styles can also be defined here
  // styles: [
  //   `
  //     h3 {
  //       color: purple;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  // LEARNING data binding - used in the template (html) to output dynamic content
  title = 'my-first-angular-app';
  name = 'Alice';
}
