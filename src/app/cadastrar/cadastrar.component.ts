import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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

  cpFormGroup: FormGroup;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    const itemsRef = this.db.collection<Ponto>('items');
    this.itemsCollection = this.db.collection<Ponto>('items');

    this.cpFormGroup = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      uid: new FormControl('')
    });
  }
  onSubmit(): void {
    console.log(this.cpFormGroup.value);
  }

  addItem(ponto: Ponto) {
    this.itemsCollection.add(ponto);
  }
}
