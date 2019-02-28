import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList , AngularFireObject } from 'angularfire2/database';
// import { Observable } from 'rxjs';
 import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;


  constructor(private router: Router, db: AngularFireDatabase) { 

    this.itemsRef = db.list('Door1');

    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    
  }

  ngOnInit() {
  }
  Logout(){
    this.router.navigate(['']);
  }
  plus(){
    this.router.navigate(['plus']);
  }
}
