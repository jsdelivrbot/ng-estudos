import { Component } from '@angular/core';

declare var  ejs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  templateInicial = '<p>Hello, my name is <%= people.nome %>. E-mail: <%= people.email %>.</p>';
  tempProcessada = '';
  people = { nome: 'Lyndon Tavares', email: 'integraldominio@gmail.com'};

  processTemp() {
    this.tempProcessada = ejs.render( this.templateInicial, {people: this.people});
  }

}

