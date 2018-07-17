# Ngbuilder - Gerador de crud (Estudo)

Usar code template como técnca para gerar crud Angular usando EJS.

## Instalar EJS

```
npm i ejs
```

```
angular.json

 "scripts": [
              "node_modules/ejs/ejs.js"
            ]
```

## Exemplo

```javascript
app.component.ts

import { Component } from '@angular/core';

declare var  ejs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 artefato = {
  restResource: 'clientes',
  className: 'Cliente',
  fields: [
     { name: 'id', type: 'string'},
     { name: 'nome', type: 'string'},
     { name: 'email', type: 'string'}
 ]};

 tempProcessada = '';
 tplService = `
        import { Injectable } from '@angular/core';
        import { HttpClient, HttpHeaders } from '@angular/common/http';
        import { MessageService, ConfigService, ResourceService } from '../../infra/security';

        @Injectable({
          providedIn: 'root'
        })
        export class <%= artefato.className %>Service extends ResourceService<Cliente> {

          constructor(
            httpClient: HttpClient,
            messageService: MessageService,
            configService: ConfigService
          ) {
              super(
              httpClient,
              configService.getApiUrl(),
              '<%= artefato.restResource %>',
              messageService);
          }
        }

        export class <%= artefato.className %> {

          <% artefato.fields.forEach( f => { %>
            <%=f.name%> = <%=f.type%> ,
          <% }) %>

          ou assim:  

          <% artefato.fields.forEach(function(f){ %>
            <%=f.name%> = <%=f.type%> ,
          <% }); %>

        } `;

  processTemp() {
   this.tempProcessada = ejs.render( this.tplService, {artefato: this.artefato});
  }

}


```

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
