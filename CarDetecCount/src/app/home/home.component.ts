import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList , AngularFireObject } from 'angularfire2/database';
// import { Observable } from 'rxjs';
 import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent  {
 
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  // count: AngularFireList<any>;
  // c: Observable<any[]>;
  
  itemsRef2: AngularFireList<any>;
  items2: Observable<any[]>;

  itemsRef3: AngularFireList<any>;
  items3: Observable<any[]>;

  itemsRef4: AngularFireList<any>;
  items4: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('Door1');
    this.itemsRef2 = db.list('Door2');
    this.itemsRef3 = db.list('Door3');
    this.itemsRef4 = db.list('Door4');
   // this.count = db.list('Door1/count');
    
    // this.c = this.count.snapshotChanges().pipe(
    //   map(changes => 
    //     changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    //   )
    // );

    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.items2 = this.itemsRef2.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.items3 = this.itemsRef3.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.items4 = this.itemsRef4.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  
  
  }