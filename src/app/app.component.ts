import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    UserName = 'Arthur';
    UserData = {
    email: 'exemplo@example.com',
    job: 'Programador'
  }

  title = 'aula';
}
