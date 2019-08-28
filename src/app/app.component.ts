import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formtemplatedriven';
  SubmitForm(fm){
    console.log(fm.value.username);
    console.log(fm.value.password);
  }
}
