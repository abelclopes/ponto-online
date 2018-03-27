import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Ponto } from './../models/ponto.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Ponto>;
  tasks$: Observable<Ponto[]>;

  constructor(private db: AngularFirestore)
  // tslint:disable-next-line:one-line
  {}


  ngOnInit(): void {
    this.tasks$ = this.db.collection<Ponto>('tasks').valueChanges();
    const itemsRef = this.db.collection<Ponto>('items');
    this.itemsCollection = this.db.collection<Ponto>('items');
  }
}
