import { Component } from '@angular/core';

declare var  ejs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  temp = '<p>Hello, my name is <%= people.nome %>. I\'m 100 years old.</p>';
  tempProcessada = '';
  lyndon = { nome: 'Lyndon11', idade: 100};

  processTemp() {
    this.tempProcessada = ejs.render( this.temp, {people: this.lyndon});
  }

}

