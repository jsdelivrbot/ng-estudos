import { AngularFireDatabase  } from 'angularfire2/database';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { auth } from 'firebase';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu: Observable<Menu[]>;
  private iMenu: AngularFirestoreCollection<Menu>;

  constructor(
    private db: AngularFireDatabase,
    private fire: AngularFireAuth) {
    //  this.fire.auth.signInWithEmailAndPassword('integraldominio@gmail.com', '010203')
    //  .then(user => {
    //    this.fire.authState.subscribe( _auth => {
    //      if (_auth) {
    //        console.log('>>>logou');
            this.menu = db.list<Menu>('cardapio').valueChanges();

    //      }
    //  });

    // });
   }

  login() {
    this.fire.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.fire.auth.signOut();
  }

  addItem(item: Menu) {
    this.iMenu.add(item);
  }


}

export interface Menu {
  email: string;
  firstName: string;
  lastName: string;
  estabelecimento: {cidade: string; endereco: string; nome: string; pais: string;};
  horario: {segsex: number;  sabdom: number; };
  mapa: {lat: number; lng: number; };
  cardapio: [
    {
      nome: string;
      texto: string;
      preco: number;
      ativo: boolean;
    }
  ];
}

/*
https://jsoneditoronline.org/
{
  "email":"demo@gmail.com",
  "password":"010203",
  "firstName":"demo",
  "lastName":"demo",
  "phone":"+55-45-9998200413",
  "estabelecimento":
    {
    "nome":"BigBurger lanches",
    "endereco":"Rua Osvaldo Goch,1190",
    "cidade":"Foz Iguaçu",
    "pais":"Brazil"
    },
  "horario":{
    "seg-sex":{"ini":9,"fim":22},
    "sab-dom":{"ini":9,"fim":22}
  } ,
  "mapa": {"lat": -32.364, "lng": 153.207},
  "cardapio" :
  [
    {"nome":"BigBurger","texto":"Super Hambuger de carne com quiejo e salada.","preco":20, "ativo":true, "fotos":["foto"]} ,
    {"nome":"Coca 500ml","texto":"coca-cola 500ml","preco":10,"ativo":true, "fotos":["foto"]}
  ]
}
*/
