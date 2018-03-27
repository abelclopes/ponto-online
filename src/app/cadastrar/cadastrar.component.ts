import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Ponto } from '../models/ponto.model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Ponto>;
  tasks$: Observable<Ponto[]>;

  forPontom: FormGroup;
  constructor(private formGroup: FormGroup, private db: AngularFirestore) {
   this.forPontom = new FormGroup ({
      titulo: new FormControl('', Validators.minLength(2)),
    });
  }

  ngOnInit() {
    const itemsRef = this.db.collection<Ponto>('items');
    this.itemsCollection = this.db.collection<Ponto>('items');
  }
  onSubmit(): void {
    console.log(this.forPontom.value);
  }

  addItem(ponto: Ponto) {
    this.itemsCollection.add(ponto);
  }
}
